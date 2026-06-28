# Changelog

All notable changes to the **Terminal Velocity** VS Code extension will be documented in this file.

---

## [1.0.1] - 2026-06-27

### Fixed
- **Packaging**: Fixed missing `strip-ansi` dependency in the packaged VSIX.

### Documentation
- Added comprehensive [FAQ](docs/FAQ.md) with troubleshooting and common questions.
- Updated [Features](docs/FEATURES.md) document to be user-focused.
- Improved [README](../README.md) with clearer installation and usage instructions.
- Removed `ROADMAP` and `RELEASE-NOTES` files

---

## [1.0.0] - 2026-06-26

### Added
- **Copy Command**: Copy command text to clipboard with a single click.
- **Copy Command & Output**: Copy both the command and its output together.
- **Delete Entry**: Remove individual commands from history with confirmation.
- **Production Stability**: Full test coverage (57 unit tests) and GitHub Actions CI/CD.
- **Security Features**: Sensitive data detection and redaction for passwords, API keys, and tokens.


### Changed
- **Renamed**: Extension renamed from "Terminal History Outline" to **Terminal Velocity**.
- **Display Name**: Updated display name to "Terminal Velocity" in the VS Code Marketplace.
- **Status Indicators**: Improved multi-layer exit code detection for more accurate status.

---

## [0.5.0] - 2026-06-20

### Added
- **Copy Command** - Copy just the command text.
- **Copy Command & Output** - Copy both with formatting.
- **Delete Entry** - Remove individual commands with confirmation.
- **Inline Action Buttons** - Quick actions in the TreeView.
- **Context Menu Actions** - Right-click menu for all actions.

### Changed
- **UI/UX**: Improved action buttons layout and visibility.

### Fixed
- **Command Parsing**: Better handling of multi-line commands.

---

## [0.4.4] - 2026-06-19

### Added
- **Multi-layer Exit Code Detection**: Event, terminal, and output analysis for accurate status.
- **Status Indicators**: 🟢 Success / 🔴 Failure / 🟡 Running
- **Exit Code Detection**: Improved detection for all commands.

### Fixed
- **Status Mismatch**: Reduced discrepancies between extension and terminal status.

---

## [0.4.3] - 2026-06-18

### Added
- **Constants Extraction**: Organized constants into dedicated files.
- **Full JSDoc Documentation**: Complete documentation for all classes and functions.

---

## [0.4.2] - 2026-06-18

### Added
- **Enum Directory**: Type-safe constants for better code quality.
- **Interface Directory**: Type definitions for improved type safety.

---

## [0.4.1] - 2026-06-17

### Added
- **Pre-commit & Pre-push Hooks**: Automated validation before commits and pushes.
- **Vitest Integration**: Migrated from mocha to vitest for faster tests.
- **Act Integration**: Local GitHub Actions testing with `act`.
- **53 Passing Tests**: Comprehensive test suite.

---

## [0.4.0] - 2026-06-17

### Added
- **Sensitive Data Detection**: Automatically detects passwords, API keys, and tokens.
- **Auto-Redaction**: Redacts sensitive data with `[REDACTED]` placeholder.
- **Command Exclusion**: Exclude commands via regex patterns.
- **Privacy Dashboard**: View and manage security settings.
- **Configurable Security**: Custom patterns and redaction levels.

### Security
- **Detection Patterns**: Password, API key, token, and SSH key detection.
- **Redaction Levels**: Off, warn, redact, and block options.

---

## [0.3.0] - 2026-06-16

### Added
- **Mocha Test Framework**: 49 passing unit tests.
- **Cleaner Module**: ANSI code stripping with no VS Code dependencies.
- **Test Infrastructure**: Foundation for reliable testing.

---

## [0.2.0] - 2026-06-15

### Added
- **Command Capture**: Automatic capture of terminal commands.
- **Full Output Capture**: Complete output with streaming support.
- **Status Indicators**: 🟢 Success / 🔴 Failure / 🟡 Running.
- **Rerun Commands**: Execute any command again in a new terminal.
- **Copy Output**: Copy command output to clipboard.
- **Persistent History**: History survives VS Code restarts.

---

## [0.1.0] - 2026-06-14

### Added
- **Initial Release**: Basic command history tracking in VS Code.
- **Explorer View**: Display commands in the Explorer sidebar.
- **Basic Actions**: Rerun and copy output.

---

## 📝 About Versions

- **1.x.x**: Production releases (stable, documented, and supported)
- **0.x.x**: Beta/Development releases (features may change)

---

## 🔮 Upcoming Features

See the [Features Roadmap](docs/FEATURES.md) for planned features in future releases.

---

*Last updated: June 2026*