# Terminal Velocity - Frequently Asked Questions 

## Common Questions
 
- [Not working with zsh](#zsh-setup)
- [Status indicators not matching terminal](#why-do-my-status-indicators-not-always-match-the-ones-in-my-terminal)
- [My commands arent showing up](#commands-not-showing-up)
- [Will it work onffline?](#will-it-work-offline)

## ZSH Setup

If you're using `zsh` and Terminal Velocity isn't capturing your commands, it's usually because VS Code's **Shell Integration** isn't properly enabled. Follow these steps to fix it:

1.  **Ensure you have VS Code 1.93 or newer.**
    *   Check your version: `Help` → `About`.
2.  **Set `zsh` as your default terminal profile.**
    *   Open Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`).
    *   Run `Terminal: Select Default Profile` and choose `zsh`.
3.  **Enable Shell Integration.**
    *   In VS Code Settings (`Cmd+,` / `Ctrl+,`), search for `terminal.integrated.shellIntegration.enabled` and make sure it's checked.
4.  **Manually install the script.**
    *   If the above doesn't work, add this line to your `~/.zshrc` file:
        ```sh
        [[ "$TERM_PROGRAM" == "vscode" ]] && . "$(code --locate-shell-integration-path zsh)"
        ```
    *   **Restart VS Code** completely.

[Back to Top](#common-questions)

## Why do my status indicators not always match the ones in my terminal?

The status indicators in `Terminal Velocity` (🟢/🔴) may occasionally differ from what you see in the terminal itself. This happens for a few technical reasons:

**Timing:** Your extension captures the exit code immediately after a command finishes, but sometimes the shell hasn't fully reported it yet.

**Fallback Analysis:** If the exit code isn't available, your extension scans the output for error patterns (like "command not found" or "permission denied"). This isn't always perfect.

**Shell Integration:** Some shells don't always report exit codes correctly to VS Code's API.

**The Result:** The terminal shows the "source of truth" status, while your extension does its best with the information available.

[Back to Top](#common-questions)

## Commands not showing up

If commands aren't being captured, ensure Shell Integration is enabled:
1. Open VS Code Settings (Ctrl+,)
2. Search for "shell integration enabled"
3. Check `Terminal > Integrated > Shell Integration: Enabled`

[Back to Top](#common-questions)

## Will it work offline?

Yes, `Terminal Velocity` does not require internet connection to work.

[Back to Top](#common-questions)