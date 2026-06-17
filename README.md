# Terminal History Outline

[![Version](https://img.shields.io/badge/version-0.4.1-blue.svg)](https://github.com/chamren86/terminal-history-outline)
[![VS Code](https://img.shields.io/badge/VS%20Code-1.93%2B-blue.svg)](https://code.visualstudio.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

View and manage your terminal command history directly in the VS Code Explorer outline view.

<div align="center">
  <img src="docs/basicPreview.gif" alt="Terminal History Outline Demo" width="400"/>
  <p><em>Terminal History Outline in action</em></p>
</div>

## Features

- 📝 **Command History** - Automatically captures every command and its output
- 🟢/🔴/🟡 **Status Indicators** - Shows success, failure, or running status
- 🔧 **Actions** - Rerun commands, copy output, clear history
- 🔒 **Security** - Detects and redacts passwords, API keys, and tokens (v0.4.0)
- 🎨 **Clean Display** - Strips ANSI codes and shows clean output
- 💾 **Persistent** - History survives VS Code restarts

## Installation

From VS Code: Search for "Terminal History Outline" in the Extensions view (Ctrl+Shift+X).

Or from source:

```bash
git clone https://github.com/chamren86/terminal-history-outline.git
cd terminal-history-outline
npm install
npm run compile