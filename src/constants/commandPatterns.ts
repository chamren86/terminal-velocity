/**
 * @file commandPatterns.ts
 * @description Regular expressions and patterns for cleaning command input,
 * detecting errors, and identifying warning states.
 * 
 * This file provides:
 * - COMMAND_CLEAN_PATTERNS: Patterns to remove from command strings
 * - ERROR_DETECTION_PATTERNS: Patterns that indicate command failure
 * - WARNING_DETECTION_PATTERNS: Patterns that indicate command warnings
 * - Helper functions to test output for errors and warnings
 * 
 * @module constants/commandPatterns
 */

export const COMMAND_CLEAN_PATTERNS = [
    / --color=auto/g,
    / --color/g
];

export const ERROR_DETECTION_PATTERNS = [
    'error',
    'fail',
    'exception',
    'not found',
    'permission denied',
    'No such file',
    'command not found',
    'EACCES',
    'ENOENT',
    'is not a git command',
    'is not a valid command',
    'fatal:',
    'usage:',
    'try "git --help"',
    'did you mean',
    'no such file or directory',
    'cannot find',
    'unable to',
    'invalid',
    'missing script',
    'unknown command',
    'not recognized',
    'npm ERR',
    'npm error',
    'version not changed'
];

export const WARNING_DETECTION_PATTERNS = [
    'deprecationwarning',
    'deprecated',
    'is deprecated',
    'npm warn',
    'npm warning',
    'warning:',
    'potential security issue',
    'found vulnerabilities',
    '⚠️',
    'appears to have',
    'may not be',
    'not recommended',
    'skipping',
    'could not',
    'ts error',
    'has no exported member',
    'deprecated package',
    'npm warn deprecated'
];
