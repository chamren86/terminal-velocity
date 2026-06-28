# Terminal Velocity - Features

## What It Does

Terminal Velocity automatically captures your terminal commands and makes them easily accessible in the VS Code Explorer sidebar.

---

## ✨ Current Features (v1.0.1)

### 📝 Command History
- **Automatic Capture** - Every command you run is automatically saved
- **Full Output** - Complete command output is captured and stored
- **Persistent Storage** - History survives VS Code restarts
- **Status Indicators** - Visual feedback for success, failure, running, or interrupted commands

### 🟢 Status Indicators
| Icon | Meaning |
|------|---------|
| 🟢 | Command succeeded (exit code 0) |
| 🔴 | Command failed (non-zero exit code) |
| 🟡 | Command is still running |

### 🔧 Quick Actions
Right-click or use the inline buttons on any command to:
- **Rerun** - Execute the command again in a new terminal
- **Copy Command** - Copy just the command text
- **Copy Output** - Copy just the command output
- **Copy Both** - Copy command and output together
- **Delete Entry** - Remove the command from history

### 🗑️ History Management
- **Delete Single** - Remove individual commands
- **Clear All** - Clear entire history with confirmation

### 🔒 Security & Privacy
- **Sensitive Data Detection** - Automatically detects passwords, API keys, and tokens
- **Auto-Redaction** - Replaces sensitive data with `[REDACTED]`
- **Command Exclusion** - Exclude specific commands from being saved
- **Privacy Dashboard** - Centralized security settings

### 🎨 Clean Display
- **ANSI Code Stripping** - Removes color codes for clean, readable output
- **Output Truncation** - Long outputs are truncated for performance
- **Full Output Access** - Copy full output with one click

---

## 🚀 Upcoming Features

### 🔍 Search & Filter
- **Real-time Search** - Quickly find commands by typing
- **Filter by Text** - Filter by command or output content
- **Instant Results** - Results update as you type
- **Filter by Status** - Filter by success/error/running/interrupted

### 📂 Groups & Organization
- **Group by Terminal** - Organize commands by terminal session
- **Group by Project** - Organize by working directory
- **Custom Groups** - Create your own groups
- **Pin Commands** - Pin important commands to top

### 🗑️ Bulk Operations
- **Delete Multiple** - Select and delete multiple commands at once
- **Export Selection** - Export selected commands

---

## 📊 Quick Comparison

| Feature | Terminal Velocity (v1.0.1) | Built-in Terminal |
|---------|----------------------------|-------------------|
| **Persistent History** | ✅ Across sessions | ❌ Current session only |
| **Command Output** | ✅ Full output saved | ❌ Not saved |
| **Copy & Rerun** | ✅ One-click actions | ❌ Manual only |
| **Security** | ✅ Sensitive data redaction | ❌ No security features |
| **Search/Filter** | 🔜 Coming in v1.1.0 | ❌ Basic scroll only |
| **Export** | 🔜 Planned for v1.3.0 | ❌ No export |

---