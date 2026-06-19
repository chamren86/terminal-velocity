/**
 * @file displayConstants.ts
 * @description Display and formatting constants for the extension UI.
 * 
 * This file contains:
 * - Output length limits for preview and full display
 * - Command display length limits
 * - History size limits
 * - UI strings for the privacy dashboard
 * 
 * @module constants/displayConstants
 */

export const MAX_OUTPUT_PREVIEW_LENGTH = 500;
export const MAX_OUTPUT_DISPLAY_LENGTH = 1000;
export const MAX_COMMAND_DISPLAY_LENGTH = 50;
export const MAX_HISTORY_SIZE = 100;
export const DASHBOARD_TITLE = 'Terminal History - Privacy Dashboard';
export const SECURITY_NOTICE = '⚠️ Security Notice: Commands are stored locally on your machine. Sensitive data (passwords, API keys) may be stored unless redaction is enabled.';
export const RERUN_TERMINAL_PREFIX = 'History: ';
