/**
 * @file regexPatterns.ts
 * @description Regular expression patterns for cleaning terminal output.
 * 
 * This file combines VS Code sequences, control characters, and whitespace
 * patterns into a single CLEANER_PATTERNS object used by cleaner.ts.
 * 
 * @module constants/regexPatterns
 */

import { VSCODE_SEQUENCES } from './vsCodeConstants.js';

export const CLEANER_PATTERNS = {
    VSCODE_SEQUENCES,
    CONTROL_CHARS: /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g,
    MULTIPLE_WHITESPACE: /[ \t]+/g
};
