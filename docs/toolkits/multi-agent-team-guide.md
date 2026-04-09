# Build Your OpenClaw Multi-Agent Team

If you already have OpenClaw running, the next big upgrade is adding more than one agent.

A single agent can help with a lot.
But one agent doing **everything** eventually becomes messy.
It has too many jobs, too many instructions, too many tools, and too much context to hold at once.

A better setup is this:
- one **main agent** that talks to you and coordinates work
- one or more **specialist agents** that each focus on one type of job

For example:
- a writing agent
- a coding agent
- a research agent
- a marketing agent

This guide is written for beginners.
If you have never worked in the terminal before, that is okay.
We are going to do this slowly, step by step, click by click.

By the end of this guide, you will know how to:
- understand how multi-agent OpenClaw works
- create a second agent
- give that agent its own role
- connect it to Telegram if you want a separate chat
- update `openclaw.json`
- understand the difference between a full agent and a sub-agent
- add the new guide inside Mission Control

---

## What a multi-agent setup looks like

The easiest way to think about this is like a small team.

### Your main agent

Your main agent is the one you talk to most of the time.
Its job is to:
- talk to you
- understand what you want
- decide which specialist should handle the task
- delegate work when needed

### Your specialist agents

These are agents with focused jobs.

Examples:
- a copywriting agent for scripts, emails, captions, and landing page copy
- a coding agent for implementation tasks
- a research agent for web research and summaries
- a project manager agent for planning and follow-up

The point is not to create agents just because you can.
The point is to create them when one agent is doing too many unrelated things.

---

## Before you start

This guide assumes:
- OpenClaw is already installed
- your standard OpenClaw files live in `~/.openclaw`
- your main workspace lives in `~/.openclaw/workspace`
- you can open a terminal on the machine where OpenClaw is running

If you are using a VPS:
1. Open **Windows Terminal** on your computer
2. SSH into your server
3. Stay in that terminal window for this whole guide

---

## Step 1: Open your terminal

If you are already connected to your OpenClaw machine, good.
If not, open your terminal now.

### If you are on Windows using a VPS

1. Open **Windows Terminal**
2. Type your SSH command
3. Press **Enter**

It will look something like this:

```bash
ssh root@YOUR_SERVER_IP
```

After that, you should see a command prompt on your server.

---

## Step 2: Move into your OpenClaw folder

In the terminal, type:

```bash
cd ~/.openclaw
```

Then press **Enter**.

Now type:

```bash
pwd
```

Then press **Enter**.

You should see something like:

```bash
/home/YOUR_USERNAME/.openclaw
```

That means you are in the correct folder.

---

## Step 3: Understand where your agents live

OpenClaw normally uses:
- `~/.openclaw/workspace` for your main agent workspace
- `~/.openclaw/workspace-AGENTNAME` for each additional agent workspace
- `~/.openclaw/openclaw.json` for your main configuration

### 3.1 Look at what is already there

In the terminal, type:

```bash
ls
```

Then press **Enter**.

You may see things like:
- `openclaw.json`
- `workspace`
- `workspace-doug`
- other agent folders

### 3.2 Look inside your main workspace

Type:

```bash
cd ~/.openclaw/workspace
```

Then press **Enter**.

Now type:

```bash
ls
```

Then press **Enter**.

You should see important files such as:
- `AGENTS.md`
- `SOUL.md`
- `USER.md`
- `MEMORY.md`
- `TOOLS.md`
- `IDENTITY.md`

These files shape how your main agent behaves.

---

## Step 4: Decide what your second agent should do

Before creating a new agent, choose a clear role.

Good examples:
- “This agent only writes copy.”
- “This agent only handles coding tasks.”
- “This agent only researches topics and returns structured notes.”

Bad examples:
- “This agent does everything except sometimes something else.”
- “This agent is kind of like my main agent but different somehow.”

A good specialist agent should have a narrow purpose.

For this guide, we will use a writing-focused example agent called **Writer**.

---

## Step 5: Create a new agent

There are multiple ways to create an agent.
The clearest beginner path is using the OpenClaw CLI.

### 5.1 Return to the `.openclaw` folder

If you are not already there, type:

```bash
cd ~/.openclaw
```

Then press **Enter**.

### 5.2 Create the agent

If your OpenClaw docs or current version give you a specific `openclaw agents add` or helper command, use that exact command and create the agent named `Writer`.

If you already know the command from the docs or your current setup, run it now and use `Writer` as the agent name.

If not, use the docs page at:

`https://docs.openclaw.ai`

and look for the multi-agent routing section.

The important idea is:
- the agent gets an ID
- OpenClaw creates a new isolated workspace
- you can optionally copy auth profiles from your main agent

### 5.3 What usually happens during agent creation

When the agent is created, OpenClaw typically asks things like:
- what to call the agent
- where its workspace should live
- whether to copy authentication profiles from the main agent
- what model/provider to use
- whether to connect it to a chat channel

### 5.4 Recommended choices for beginners

If you are prompted:
- **workspace path** → accept the default suggested workspace
- **copy auth profiles** → choose **Yes** if you want the new agent to use the same provider auth as your main agent
- **model** → start with the same model your main agent uses
- **chat channel** → optional; you can skip it and add it later

---

## Step 6: Check that the new workspace was created

After the agent is created, type:

```bash
cd ~/.openclaw
```

Then press **Enter**.

Now type:

```bash
ls
```

Then press **Enter**.

You should now see a new folder like:

```bash
workspace-writer
```

or whatever name you used.

### 6.1 Open the new workspace

Type:

```bash
cd ~/.openclaw/workspace-writer
```

Replace `writer` with your actual agent name if needed.

Then press **Enter**.

### 6.2 List the files

Type:

```bash
ls
```

Then press **Enter**.

You may see files like:
- `BOOTSTRAP.md`
- `SOUL.md`
- `IDENTITY.md`
- `USER.md`
- maybe a `memory` folder later

This is the new agent’s own isolated workspace.

That isolation is the whole point.
The new agent should have its own instructions, personality, and memory.

---

## Step 7: Open the new agent’s files

Now you are going to shape the new agent.

### 7.1 Open IDENTITY.md

Type:

```bash
nano IDENTITY.md
```

Then press **Enter**.

Use this file to set things like:
- the agent name
- the vibe
- the role

For a writing agent, you might use something like:

```markdown
- Name: Writer
- Creature: Focused specialist
- Vibe: Sharp, creative, concise
```

### 7.2 Save and exit nano

When done:
1. Press **Ctrl + O**
2. Press **Enter**
3. Press **Ctrl + X**

### 7.3 Open SOUL.md

Now type:

```bash
nano SOUL.md
```

Then press **Enter**.

This is where you shape how the agent thinks and writes.

For a copywriting-focused agent, you might say things like:
- it should write clearly and naturally
- it should avoid generic AI-sounding phrases
- it should prefer strong hooks and clean structure
- it should stay focused on writing tasks only

### 7.4 Save and exit nano

Again:
1. Press **Ctrl + O**
2. Press **Enter**
3. Press **Ctrl + X**

---

## Step 8: Tell your main agent to delegate

Your main agent needs to understand that the new agent exists and when to use it.

### 8.1 Open your main workspace again

Type:

```bash
cd ~/.openclaw/workspace
```

Then press **Enter**.

### 8.2 Open MEMORY.md or AGENTS.md

If you want a durable instruction, open `MEMORY.md`:

```bash
nano MEMORY.md
```

If you want an operating rule, open `AGENTS.md`:

```bash
nano AGENTS.md
```

### 8.3 Add a delegation rule

For example:

```markdown
## Multi-agent routing

- Writer is the writing specialist.
- For copywriting, scripts, captions, emails, and marketing copy, delegate to Writer.
- The main agent should orchestrate and return the result clearly.
```

### 8.4 Save and exit

As before:
1. Press **Ctrl + O**
2. Press **Enter**
3. Press **Ctrl + X**

---

## Step 9: Open openclaw.json

This is the main config file that controls the agent list, bindings, and defaults.

### 9.1 Move to the config folder

Type:

```bash
cd ~/.openclaw
```

Then press **Enter**.

### 9.2 Open the config file

Type:

```bash
nano openclaw.json
```

Then press **Enter**.

This file is where you will see:
- model defaults
- supported models
- channel accounts
- bindings
- the list of agents

---

## Step 10: Understand the agent list in openclaw.json

Inside `openclaw.json`, look for:

```json
"agents"
```

Then inside that, look for:

```json
"list"
```

This is where OpenClaw stores the configured agents.

It may look something like this:

```json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "openai-codex/gpt-5.4"
      }
    },
    "list": [
      {
        "id": "main"
      },
      {
        "id": "ink",
        "name": "Ink",
        "workspace": "/home/YOUR_USERNAME/.openclaw/workspace-writer",
        "agentDir": "/home/YOUR_USERNAME/.openclaw/agents/ink/agent",
        "model": "openai-codex/gpt-5.4"
      }
    ]
  }
}
```

The exact details may differ on your machine, but the idea is the same.

### 10.1 What each part means

- `id`: the internal name of the agent
- `name`: the human-friendly name
- `workspace`: where that agent’s files live
- `agentDir`: where its internal agent data lives
- `model`: the default model for that agent

---

## Step 11: Give the new agent its own default model if needed

You do not have to do this, but you can.

For example:
- your main agent might use a stronger orchestration model
- your specialist writing agent might use the same model or a lighter one

If you want the new agent to always use a specific model, make sure its entry includes a model line like:

```json
"model": "openai-codex/gpt-5.4"
```

Be careful when editing JSON:
- every key goes on its own line
- strings need quotes
- commas must be in the right place

When done:
1. Press **Ctrl + O**
2. Press **Enter**
3. Press **Ctrl + X**

---

## Step 12: Restart OpenClaw after config changes

After editing `openclaw.json`, restart the gateway so the changes load.

Type:

```bash
openclaw gateway restart
```

Then press **Enter**.

### 12.1 Check status

Now type:

```bash
openclaw gateway status
```

Then press **Enter**.

If the gateway is running, your new config should be active.

---

## Step 13: Optional — connect the new agent to Telegram

If you want a separate Telegram chat for the specialist agent, you can do that too.

This is optional.
A lot of people are fine talking only to the main agent.

### 13.1 Open Telegram

On your phone or desktop:
1. Open **Telegram**
2. Search for **BotFather**
3. Open the chat with **BotFather**

### 13.2 Create a new bot

In BotFather:
1. Type `/newbot`
2. Press **Send**
3. Enter the bot’s display name
4. Enter a username that ends in `bot`

Example:
- display name: `Writer`
- username: `writer_helper_bot`

### 13.3 Copy the bot token

BotFather will give you a token.

**Keep this private.**
Do not share it publicly.

### 13.4 Add the token to your OpenClaw config

Back in the terminal:

```bash
cd ~/.openclaw
nano openclaw.json
```

Find the Telegram accounts section and add the new bot account.

It will look something like this:

```json
"channels": {
  "telegram": {
    "accounts": {
      "default": {
        "botToken": "YOUR_MAIN_BOT_TOKEN"
      },
      "writer": {
        "botToken": "YOUR_NEW_WRITER_BOT_TOKEN"
      }
    }
  }
}
```

### 13.5 Add a binding for the new agent

Still in `openclaw.json`, find or add the `bindings` section.

A simple example looks like this:

```json
{
  "bindings": [
    {
      "agentId": "main",
      "match": {
        "channel": "telegram",
        "accountId": "default"
      }
    },
    {
      "agentId": "writer",
      "match": {
        "channel": "telegram",
        "accountId": "writer"
      }
    }
  ]
}
```

This tells OpenClaw:
- messages to the main Telegram bot go to `main`
- messages to the Writer Telegram bot go to `writer`

### 13.6 Save and restart

When done:
1. Press **Ctrl + O**
2. Press **Enter**
3. Press **Ctrl + X**

Then run:

```bash
openclaw gateway restart
```

---

## Step 14: Approve the new Telegram chat if required

When you open the new bot chat in Telegram, you may see a pairing or approval message.

If OpenClaw tells you to approve the chat, follow the pairing instruction it gives you.

This usually means:
- starting the bot chat
- sending a first message
- completing the approval flow for your user account

The exact message may vary depending on your OpenClaw version and pairing mode.

---

## Step 15: Understand full agents vs sub-agents

This part confuses a lot of people.

### Full agent

A full agent is a real configured agent with:
- its own workspace
- its own identity
- its own memory
- its own optional chat channel
- its own config entry

Examples:
- main
- writer
- doug

### Sub-agent

A sub-agent is usually a temporary working instance created to handle a task.

It is often used when:
- your main agent delegates work
- a specialist agent is spun up for a focused task
- the result is returned back to the main agent

A simple way to think about it:
- **full agent** = team member
- **sub-agent** = task run

You do not always need to manually manage sub-agents.
For many users, it is enough to create the full specialist agents and let the main agent orchestrate.

---

## Step 16: Add skills only where they belong

One of the biggest wins in a multi-agent setup is keeping skills focused.

If you install every skill everywhere, your agents become bloated and less reliable.

### Good approach

- writing skills go to the writing agent
- coding skills go to the coding agent
- shared tone or business rules can live at the top level if truly shared

### Why this matters

Too many skills can cause:
- wrong tool choice
- unnecessary context load
- worse routing decisions
- more confusion

---

## Step 17: Test your new setup

Now test it.

### 17.1 Talk to the main agent

Ask something like:

`Write an Instagram caption about why multi-agent workflows beat one giant generalist agent.`

If your routing is set up well, the main agent should delegate that writing task to the writing specialist.

### 17.2 If you created a separate Telegram bot

Open the specialist agent’s chat and say hello.

The first message may ask you to define who the agent is.
That is normal.

### 17.3 Train the specialist clearly

For example, tell the writing agent:
- its name
- its role
- what good output looks like
- what tasks it should avoid

That gives it a much better starting point.

---

## Step 18: Keep the system simple at first

Do not build eight agents on day one.

The best beginner move is:
1. keep your main agent
2. add one specialist agent
3. teach the main agent when to delegate
4. test that workflow until it feels solid
5. only then add more specialists

This is much easier to debug and much easier to trust.

---

## Common beginner mistakes

### Mistake 1: creating too many agents too early

Start with one extra agent.
Get that working first.

### Mistake 2: unclear specialist roles

Each agent should have a clear job.

### Mistake 3: editing JSON carelessly

A broken comma or quote in `openclaw.json` can break startup.
Edit carefully.

### Mistake 4: forgetting to restart after config changes

If you change `openclaw.json`, restart the gateway.

### Mistake 5: overloading the main agent with specialist work anyway

If you create a writer agent, let it write.
The main agent should orchestrate.

---

## A simple starter multi-agent setup

If you want a practical first team, use this:

- **Main agent** → orchestrator and front door
- **Writing agent** → scripts, captions, emails, copy
- **Coding agent** → implementation work

That alone gives you a much cleaner system than one overloaded generalist.

---

## Quick checklist

- [ ] Open terminal
- [ ] Run `cd ~/.openclaw`
- [ ] Confirm your main workspace exists
- [ ] Create a second agent
- [ ] Confirm the new `workspace-AGENTNAME` folder exists
- [ ] Open and edit `IDENTITY.md`
- [ ] Open and edit `SOUL.md`
- [ ] Add delegation rules to the main agent
- [ ] Open `nano openclaw.json`
- [ ] Confirm the new agent is listed in `agents.list`
- [ ] Set a default model for the new agent if needed
- [ ] Add Telegram account and binding if you want a separate bot
- [ ] Run `openclaw gateway restart`
- [ ] Run `openclaw gateway status`
- [ ] Test a delegated task

---

## Source referenced

This guide was created with reference to:

`https://www.youtube.com/watch?v=CYBZmwOmsk8`
