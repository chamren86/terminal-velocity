/**
 * @file security.ts
 * @description Security module for the Terminal History Outline VS Code extension.
 * 
 * This file handles:
 * - Detection of sensitive data using predefined and custom patterns
 * - Redaction of sensitive data with [REDACTED] placeholder
 * - Command exclusion based on user-defined patterns
 * - Configuration management for security settings
 * - User interaction for sensitive command handling
 * - Loading security configuration from VS Code settings
 * 
 * @module security
 */

import { RedactionAction, RedactionLevel } from './enums/index.js';
import { ISensitivePattern, ISecurityConfig } from './interfaces/index.js';
import { SENSITIVE_PATTERNS, DEFAULT_SECURITY_CONFIG } from './constants/index.js';

let currentConfig: ISecurityConfig = { ...DEFAULT_SECURITY_CONFIG };

export function setSecurityConfig(config: Partial<ISecurityConfig>) {
    currentConfig = { ...currentConfig, ...config };
}

export function getSecurityConfig(): ISecurityConfig {
    return currentConfig;
}

export function detectSensitiveData(text: string, config?: ISecurityConfig): ISensitivePattern[] {
    const cfg = config || getSecurityConfig();
    if (!cfg.detectionEnabled) {
        return [];
    }
    
    const found: ISensitivePattern[] = [];
    const allPatterns = [...SENSITIVE_PATTERNS];
    
    for (const patternStr of cfg.customPatterns) {
        try {
            const regex = new RegExp(patternStr, 'gi');
            allPatterns.push({
                regex,
                name: 'custom',
                description: `Custom pattern: ${patternStr}`
            });
        } catch (e) {
            // Invalid regex pattern - skip it silently
        }
    }
    
    for (const pattern of allPatterns) {
        pattern.regex.lastIndex = 0;
        if (pattern.regex.test(text)) {
            found.push(pattern);
        }
    }
    
    return found;
}

export function redactSensitiveData(text: string, config?: ISecurityConfig): string {
    const cfg = config || getSecurityConfig();
    if (cfg.redactionLevel !== RedactionLevel.REDACT) {
        return text;
    }
    
    let redacted = text;
    const allPatterns = [...SENSITIVE_PATTERNS];
    
    for (const patternStr of cfg.customPatterns) {
        try {
            const regex = new RegExp(patternStr, 'gi');
            allPatterns.push({
                regex,
                name: 'custom',
                description: `Custom pattern: ${patternStr}`
            });
        } catch (e) {
            // Invalid regex pattern - skip it silently
        }
    }
    
    const sortedPatterns = allPatterns.sort((a, b) => {
        const aLen = a.regex.source.length;
        const bLen = b.regex.source.length;
        return bLen - aLen;
    });
    
    for (const pattern of sortedPatterns) {
        redacted = redacted.replace(pattern.regex, (match) => {
            if (match.includes('\n') || match.includes('-----BEGIN')) {
                return '[REDACTED]';
            }
            
            if (match.includes('=')) {
                return match.replace(/=.*/, '=[REDACTED]');
            } else if (match.includes(':')) {
                return match.replace(/:.*/, ':[REDACTED]');
            } else if (match.startsWith('-p')) {
                return '-p [REDACTED]';
            } else if (match.startsWith('--password')) {
                return '--password [REDACTED]';
            } else if (match.startsWith('Bearer')) {
                return 'Bearer [REDACTED]';
            } else if (match.length > 20 && !match.includes(' ')) {
                return '[REDACTED]';
            } else {
                return '[REDACTED]';
            }
        });
    }
    
    return redacted;
}

export function isExcludedCommand(command: string, config?: ISecurityConfig): boolean {
    const cfg = config || getSecurityConfig();
    for (const pattern of cfg.excludedCommands) {
        try {
            const regex = new RegExp(pattern, 'i');
            if (regex.test(command)) {
                return true;
            }
        } catch (e) {
            // Invalid regex pattern - skip it silently
        }
    }
    return false;
}

export async function handleSensitiveCommand(
    command: string, 
    patterns: ISensitivePattern[],
    showWarning: boolean = true,
    showModal: boolean = false
): Promise<RedactionAction> {
    const config = getSecurityConfig();
    
    if (!config.warnOnDetection || !showWarning) {
        return RedactionAction.PROCEED;
    }
    
    if (config.redactionLevel === RedactionLevel.BLOCK) {
        return RedactionAction.BLOCK;
    }
    
    if (config.redactionLevel === RedactionLevel.REDACT) {
        return RedactionAction.REDACT;
    }
    
    const patternNames = [...new Set(patterns.map(p => p.name))].join(', ');
    const truncatedCommand = command.length > 50 ? command.substring(0, 50) + '...' : command;
    
    try {
        const vscode = await import('vscode');
        const choice = await vscode.window.showWarningMessage(
            `⚠️ Sensitive data detected in command: "${truncatedCommand}"\n` +
            `Patterns found: ${patternNames}\n\n` +
            `This command may contain passwords, API keys, or other secrets.`,
            { modal: showModal },
            'Save Anyway',
            'Redact Sensitive Data',
            'Block This Command'
        );
        
        switch (choice) {
            case 'Redact Sensitive Data':
                return RedactionAction.REDACT;
            case 'Block This Command':
                return RedactionAction.BLOCK;
            default:
                return RedactionAction.PROCEED;
        }
    } catch {
        return RedactionAction.PROCEED;
    }
}

export function shouldRedactOrBlock(
    command: string, 
    config?: ISecurityConfig
): { action: RedactionAction; reason: string } {
    const cfg = config || getSecurityConfig();
    
    if (!cfg.detectionEnabled) {
        return { action: RedactionAction.PROCEED, reason: 'Detection disabled' };
    }
    
    const patterns = detectSensitiveData(command, cfg);
    if (patterns.length === 0) {
        return { action: RedactionAction.PROCEED, reason: 'No sensitive data detected' };
    }
    
    if (isExcludedCommand(command, cfg)) {
        return { action: RedactionAction.BLOCK, reason: 'Command excluded by user settings' };
    }
    
    if (cfg.redactionLevel === RedactionLevel.BLOCK) {
        return { action: RedactionAction.BLOCK, reason: 'Redaction level set to block' };
    }
    
    if (cfg.redactionLevel === RedactionLevel.REDACT) {
        return { action: RedactionAction.REDACT, reason: 'Redaction level set to redact' };
    }
    
    return { action: RedactionAction.PROCEED, reason: 'User will be prompted' };
}

export function loadConfigFromVSCode(): ISecurityConfig {
    import('vscode')
        .then((vscode) => {
            const config = vscode.workspace.getConfiguration('terminalHistory');
            const level = config.get<string>('security.redactionLevel', 'warn');
            
            let redactionLevel: RedactionLevel;
            switch (level) {
                case 'off': redactionLevel = RedactionLevel.OFF; break;
                case 'warn': redactionLevel = RedactionLevel.WARN; break;
                case 'redact': redactionLevel = RedactionLevel.REDACT; break;
                case 'block': redactionLevel = RedactionLevel.BLOCK; break;
                default: redactionLevel = RedactionLevel.WARN;
            }
            
            const newConfig: ISecurityConfig = {
                detectionEnabled: config.get('security.detectionEnabled', true),
                redactionLevel: redactionLevel,
                customPatterns: config.get('security.customPatterns', []),
                excludedCommands: config.get('security.excludedCommands', []),
                warnOnDetection: config.get('security.warnOnDetection', true)
            };
            
            setSecurityConfig(newConfig);
            return newConfig;
        })
        .catch(() => {
            // vscode not available (testing), use defaults
            return getSecurityConfig();
        });
    
    return getSecurityConfig();
}