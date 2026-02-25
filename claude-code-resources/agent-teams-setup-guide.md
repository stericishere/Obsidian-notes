# Agent Teams Setup Guide

Complete step-by-step instructions to get Agent Teams running in Claude Code.

---

## Prerequisites

Before starting, ensure you have:
- Claude Code installed and up to date
- Basic terminal/command-line familiarity
- Administrative access to install software

---

## Step 1: Enable Experimental Agent Teams Feature

### Option A: Environment Variable (Session-Level)

**macOS/Linux:**
```bash
export CLAUDE_EXPERIMENTAL_AGENT_TEAMS=true
# Then launch Claude Code in the same terminal session
```

**Windows (WSL):**
```bash
export CLAUDE_EXPERIMENTAL_AGENT_TEAMS=true
# Then launch Claude Code
```

**PowerShell:**
```powershell
$env:CLAUDE_EXPERIMENTAL_AGENT_TEAMS="true"
```

### Option B: Permanent Configuration (Recommended)

Add to `~/.claude/settings.json` (global) or `.claude/settings.json` (project-specific):

```json
{
  "experimental": {
    "agentTeams": true
  }
}
```

This enables agent teams for:
- **Global setting** (`~/.claude/settings.json`): All Claude Code projects
- **Project setting** (`.claude/settings.json` in project root): Only that specific project

**Location Guide:**
- **macOS**: `~/.claude/settings.json`
- **Linux**: `~/.claude/settings.json`
- **Windows**: `%USERPROFILE%\.claude\settings.json`

---

## Step 2: Install Terminal Multiplexer

Agent Teams displays parallel agents in split-pane terminals. You need one of these:

### Option A: Tmux (Recommended, All Platforms)

**macOS (Homebrew):**
```bash
brew install tmux
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install tmux
```

**Linux (Fedora):**
```bash
sudo dnf install tmux
```

**Verify Installation:**
```bash
tmux --version
```

### Option B: iTerm 2 (macOS Only)

**macOS:**
1. Download from https://iterm2.com/
2. Install and launch iTerm 2
3. iTerm 2 has built-in split pane support

**Verify Installation:**
Check Applications folder or launch from command line:
```bash
open -a iTerm
```

### Windows Users

Agent Teams works on Windows via **WSL (Windows Subsystem for Linux)**:

1. **Install WSL 2:**
   ```bash
   wsl --install
   # Then install tmux in your WSL environment
   ```

2. **Install Tmux in WSL:**
   ```bash
   sudo apt update
   sudo apt install tmux
   ```

3. **Launch Claude Code from WSL terminal**

---

## Step 3: Verify Setup

### Quick Verification Checklist

1. **Environment variable is set:**
   ```bash
   echo $CLAUDE_EXPERIMENTAL_AGENT_TEAMS
   # Should output: true
   ```

2. **Terminal multiplexer is installed:**
   ```bash
   tmux --version
   # or
   which tmux
   ```

3. **Claude Code recognizes settings:**
   - Open Claude Code settings
   - Verify experimental features are enabled
   - Restart Claude Code if needed

---

## Step 4: Test Your Setup

### Simple Test Request

In Claude Code, send this message:

```
Create an agent team with 2 agents:
- Agent 1: Analyzes the current project structure
- Agent 2: Lists all configuration files

Show me how they collaborate.
```

### Expected Behavior

✅ **Success:**
- Primary agent acknowledges request
- Creates task list
- Spawns 2 terminal panes on the right
- Each agent appears with a distinct prompt
- Agents complete tasks and communicate

❌ **Common Issues:**

| Issue | Solution |
|-------|----------|
| Terminals not appearing | Ensure Tmux is installed and in PATH |
| "Agent Teams not enabled" error | Set environment variable or restart Claude Code |
| Only 1 terminal appears | Some tasks don't need parallel work; this is normal |
| Agents don't communicate | This is harder to observe; query agents for status |

---

## Step 5: Navigate Agent Terminals

Once agents are running:

### Tmux Navigation

**Switch between panes:**
- `Ctrl+B` then `Left/Right/Up/Down` arrow keys

**Chat with specific agent:**
- Navigate to agent's pane
- Type your question (e.g., "What are you currently working on?")
- Agent responds within its terminal

**Check lead agent status:**
- Return to leftmost (primary) pane
- Ask: "Give me a status update on the task list"
- Lead agent provides overview of all agents' progress

**Exit agent terminals:**
- When all agents complete, terminals auto-close
- You're returned to primary Claude Code interface

---

## Configuration Optimization

### For Better Performance

**Optional: Set custom terminal size**

Add to `~/.claude/settings.json`:

```json
{
  "experimental": {
    "agentTeams": true,
    "terminalWidth": 100,
    "terminalHeight": 40
  }
}
```

### For Project-Specific Settings

Create `.claude/settings.json` in your project root:

```json
{
  "experimental": {
    "agentTeams": true
  },
  "mcp": {
    "servers": {
      "serena": { "enabled": true },
      "context7": { "enabled": true }
    }
  }
}
```

---

## Troubleshooting

### "Agent Teams not available"

**Fix:**
```bash
# Verify environment variable
export CLAUDE_EXPERIMENTAL_AGENT_TEAMS=true

# Restart Claude Code
# Try again
```

### "Tmux not found" error

**Fix:**
```bash
# Reinstall Tmux
brew install tmux  # macOS
# or
sudo apt install tmux  # Linux

# Verify installation
which tmux
```

### Agents spawn but don't communicate

**This is normal** — agent communication isn't always visible in logs. Options:
- Query agents directly for status
- Ask lead agent for collaboration summary
- Check agent is updating the shared task list
- Use skill template (see best practices guide) for better coordination visibility

### High token usage

**Expected behavior** — agent teams use 2-4x tokens. To reduce:
- Use sub-agents for research first
- Implement contract-first spawning (see best practices)
- Reduce team size if possible
- Define clear task lists upfront

### Agents create suboptimal solutions

**Fix:** Use the Agent Teams skill template with detailed instructions (see best practices guide)

---

## Next Steps

1. ✅ Complete setup above
2. 📖 Read: [[agent-teams-best-practices.md]]
3. 🚀 Try: Simple test request (Step 4)
4. 🎯 Implement: Contract-first spawning pattern for complex projects
5. 🔧 Customize: Adjust skill template for your workflow

---

## Resources

- **Official Anthropic Guide**: https://docs.anthropic.com/agent-teams
- **Agent Teams Skill**: Available via `/sc:agent-teams` command
- **Terminal Setup Help**:
  - Tmux: https://github.com/tmux/tmux/wiki
  - iTerm 2: https://iterm2.com/documentation.html
