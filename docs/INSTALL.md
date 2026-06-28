# Installation Guide

## Method 1: From VS Code Marketplace

## Method 2: VSIX File (Recommended for Beta Testing)

### Step 1: Download the VSIX
Download the latest `.vsix` file from:
- [GitHub Releases](https://github.com/chamren86/terminal-velocity/releases)

### Step 2: Install in VS Code
1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Click the ... menu in the top-right
4. Select "Install from VSIX..."
5. Choose the downloaded .vsix file

## Method 2: From Source (For Development)

1. git clone https://github.com/chamren86/terminal-velocity.git
2. cd terminal-velocity
3. npm install
4. npm run compile

Press F5 in VS Code to launch the extension in a development window.

## Troubleshooting

### Command not captured?
Ensure Shell Integration is enabled:
1. Open VS Code Settings (Ctrl+,)
2. Search for "shell integration enabled"
3. Check `Terminal > Integrated > Shell Integration: Enabled`

### Extension not showing?
1. Reload VS Code: `Ctrl+Shift+P` → `Developer: Reload Window`
2. Check the Explorer panel for "Terminal History" section

### Feedback
Please report issues at: https://github.com/chamren86/terminal-velocity/issues