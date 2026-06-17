# Changelog

All notable changes to the "terminal-history-outline" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.1] - 2026-06-17

### Added
- Pre-commit validation script (`npm run precommit`)
- Pre-push validation script (`npm run prepush`)
- Unit test script (`npm run test:unit`)
- Full test script (`npm run test:full`)
- `act` integration for local GitHub Actions testing
- VSIX packaging support with `.vscodeignore`
- Test documentation

### Changed
- Migrated from mocha to vitest for better ESM support
- Improved security module logic in `shouldRedactOrBlock`
- Updated test scripts to use vitest
- Improved Docker detection in precommit script
- Cleaner VSIX packaging

### Fixed
- Security test failures related to SSH key redaction
- shouldRedactOrBlock function logic order
- Detection disabled test case
- VSIX packaging security warnings

## [0.4.0] - 2026-06-17

### Added
- 🔒 Sensitive data detection (passwords, API keys, tokens)
- 🔒 Auto-redaction with `[REDACTED]` placeholder
- 🔒 Command exclusion patterns
- 📊 Privacy dashboard
- ✅ 37 security tests (49 total passing)
- ⚙️ Configuration settings for all security features

### Changed
- 🔄 Security module decoupled from VS Code for testability
- 🔄 Improved error handling in config loading

### Fixed
- Security test edge cases and pattern matching

## [0.3.0] - 2026-06-16

### Added
- Testing infrastructure with mocha
- 49 unit tests (12 ANSI + 37 security)
- `cleaner.ts` - Pure function module
- Test fixtures for ANSI and security testing
- `npm test` script for running tests

### Changed
- Separated ANSI cleaning logic into `cleaner.ts`
- Updated `terminalHistoryProvider.ts` to import cleaner module

## [0.2.0] - 2026-06-15

### Added
- 🟢 Colored emoji status indicators
- 📝 Command output capture and cleaning
- 🔄 Command rerun functionality
- 📋 Copy output to clipboard
- 💾 Persistent history storage
- 🎨 ANSI code stripping

## [0.1.0] - 2026-06-14

### Added
- 🎉 First working prototype
- Basic command capture
- Tree view integration