# Terminal Velocity

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/chamren86/terminal-velocity)
[![VS Code](https://img.shields.io/badge/VS%20Code-1.93%2B-blue.svg)](https://code.visualstudio.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Download VSIX](https://img.shields.io/badge/download-.vsix-blue.svg)](https://github.com/chamren86/terminal-velocity/releases/latest/download/terminal-history-outline-1.0.1.vsix)

View and manage your terminal command history directly in the VS Code Explorer outline view.

## Features

- 📝 **Command History** - Automatically captures every command and its output
- 🟢/🔴/🟡 **Status Indicators** - Shows success, failure, or running status
- 🔧 **Actions** - Rerun commands, copy output, clear history
- 🔒 **Security** - Detects and redacts passwords, API keys, and tokens (v0.4.0)
- 📊 **Privacy Dashboard** - View and manage your security settings
- 🎨 **Clean Display** - Strips ANSI codes and shows clean output
- 💾 **Persistent** - History survives VS Code restarts

## Demo

<div align="center">
  <img src="docs/basicPreview.gif" alt="Terminal Velocity Demo" width="700"/>
  <p><em>Terminal Velocity in action</em></p>
</div>

## Documentation

- [Frequestly Asked Questions ](docs/FAQ.md)
- [Installation](docs/INSTALL.md)
- [Current and Future Features](docs/FEATURES.md)

## Usage

1. Open a terminal (`` Ctrl+` ``)
2. Run any command - it appears in the Terminal History view (Explorer sidebar)
3. Click a command to see its output
4. Right-click for actions: Rerun, Copy Output

### Security Settings

| Setting | Values | Description |
|---------|--------|-------------|
| `detectionEnabled` | true/false | Enable/disable sensitive data detection |
| `redactionLevel` | off/warn/redact/block | How to handle sensitive data |
| `warnOnDetection` | true/false | Show warning when sensitive data is detected |
| `customPatterns` | string[] | Custom regex patterns for detection |
| `excludedCommands` | string[] | Commands to never save (regex supported) |

### Testing

| Command | Description | When to Use |
|---------|-------------|-------------|
| `npm test` | Run all unit tests | During development |
| `npm run precommit` | Check uncommitted changes | Before committing |
| `npm run prepush` | Full validation | Before pushing |

### Install `act` for GitHub Actions Testing (Optional)
To test GitHub Actions locally:
- **Ubuntu/Debian**: `curl -s https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash`
- **macOS**: `brew install act`
- **Windows**: `choco install act`
- **More info**: https://github.com/nektos/act

## Requirements

- VS Code 1.93+
- Shell Integration enabled (default: on)

## Release Notes

[Full Release Notes](docs/RELEASE-NOTES.md)

## License

MIT © [chamren86](https://github.com/chamren86)

---

**Enjoy tracking your terminal history!** 🚀