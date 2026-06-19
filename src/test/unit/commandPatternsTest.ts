import * as assert from 'node:assert';
import { describe, it } from 'node:test';
import {
    ERROR_DETECTION_PATTERNS,
    WARNING_DETECTION_PATTERNS
} from '../../constants/commandPatterns.js';

describe('Command Patterns Tests', () => {
    // Test the error patterns directly
    describe('Error Detection', () => {
        it('Should detect git command errors', () => {
            const output = "git: 'confit' is not a git command. See 'git --help'.";
            const errorRegex = new RegExp(ERROR_DETECTION_PATTERNS.join('|'), 'i');
            assert.strictEqual(errorRegex.test(output), true);
        });

        it('Should detect fatal errors', () => {
            const output = "fatal: not a git repository";
            const errorRegex = new RegExp(ERROR_DETECTION_PATTERNS.join('|'), 'i');
            assert.strictEqual(errorRegex.test(output), true);
        });

        it('Should detect command not found errors', () => {
            const output = "bash: ls: command not found";
            const errorRegex = new RegExp(ERROR_DETECTION_PATTERNS.join('|'), 'i');
            assert.strictEqual(errorRegex.test(output), true);
        });

        it('Should detect permission denied errors', () => {
            const output = "permission denied: /root/file.txt";
            const errorRegex = new RegExp(ERROR_DETECTION_PATTERNS.join('|'), 'i');
            assert.strictEqual(errorRegex.test(output), true);
        });

        it('Should not detect success as error', () => {
            const output = "Successfully completed";
            const errorRegex = new RegExp(ERROR_DETECTION_PATTERNS.join('|'), 'i');
            assert.strictEqual(errorRegex.test(output), false);
        });
    });

    describe('Warning Detection', () => {
        it('Should detect deprecation warnings', () => {
            const output = "DeprecationWarning: The `url.parse()` behavior is not standardized";
            const warningRegex = new RegExp(WARNING_DETECTION_PATTERNS.join('|'), 'i');
            assert.strictEqual(warningRegex.test(output), true);
        });

        it('Should detect npm warnings', () => {
            const output = "npm warn deprecated inflight@1.0.6: This module is not supported";
            const warningRegex = new RegExp(WARNING_DETECTION_PATTERNS.join('|'), 'i');
            assert.strictEqual(warningRegex.test(output), true);
        });

        it('Should detect security warnings', () => {
            const output = "Potential security issue detected: Your extension package contains sensitive information";
            const warningRegex = new RegExp(WARNING_DETECTION_PATTERNS.join('|'), 'i');
            assert.strictEqual(warningRegex.test(output), true);
        });
    });

    describe('Pattern Coverage', () => {
        it('Should have error patterns defined', () => {
            assert.ok(ERROR_DETECTION_PATTERNS.length > 0);
        });

        it('Should have warning patterns defined', () => {
            assert.ok(WARNING_DETECTION_PATTERNS.length > 0);
        });

        it('Error patterns should include git-specific errors', () => {
            const gitErrors = ERROR_DETECTION_PATTERNS.filter((p: string) => 
                p === 'is not a git command' || 
                p === 'fatal:' || 
                p === 'usage:'
            );
            assert.ok(gitErrors.length >= 3);
        });

        it('Warning patterns should include deprecation warnings', () => {
            const warningPatterns = WARNING_DETECTION_PATTERNS.filter((p: string) => 
                p === 'deprecated' || 
                p === 'is deprecated' ||
                p === 'DeprecationWarning'
            );
            assert.ok(warningPatterns.length >= 2);
        });
    });
});
