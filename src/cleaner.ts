import stripAnsi from 'strip-ansi';

/**
 * Clean terminal output by removing ANSI codes and VS Code sequences
 * This function has no VS Code dependencies and can be tested easily
 */
export function cleanTerminalOutput(str: string): string {
    if (!str) return '';
    
    // Step 1: Use strip-ansi for reliable ANSI removal
    let cleaned = stripAnsi(str);
    
    // Step 2: Remove VS Code specific sequences
    cleaned = cleaned.replace(/\u001b\]633;[CE]\u0007/g, '');
    cleaned = cleaned.replace(/\u001b\]633;[CE]\u001b\\/g, '');
    cleaned = cleaned.replace(/\u001b\]633;[CE]/g, '');
    cleaned = cleaned.replace(/\]633;[CE]/g, '');
    
    // Step 3: Remove any remaining control characters
    cleaned = cleaned.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
    
    // Step 4: Normalize whitespace (but preserve structure)
    cleaned = cleaned.replace(/[ \t]+/g, ' ');
    
    // Step 5: Remove empty lines and trim
    cleaned = cleaned.split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .join(' ');
    
    return cleaned.trim();
}