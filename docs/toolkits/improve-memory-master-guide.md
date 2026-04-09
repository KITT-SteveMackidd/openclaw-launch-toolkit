# Improve OpenClaw Memory

If your OpenClaw assistant keeps forgetting things, that usually does **not** mean the model is bad.

It usually means one of three things happened:
- you told it something in chat, but never saved it to a file
- the conversation got too long and older context was compacted
- the assistant never searched its memory files before acting

The good news is that this is fixable.

This guide is written for beginners. If you have never used the terminal before, that is okay. We are going to do this one step at a time.

By the end of this guide, you will know how to:
- open the important OpenClaw memory files
- edit `MEMORY.md`
- edit `AGENTS.md`
- find and update `~/.openclaw/openclaw.json`
- turn on stronger memory settings
- make your assistant check memory before acting

---

## What you are trying to fix

When people say “my assistant forgot,” they usually mean one of these:

- “I told it an important rule, but later it ignored that rule.”
- “It remembered something earlier in the session, then stopped remembering it.”
- “It forgot what project we were working on.”
- “It forgot my preferences.”

The most important rule in OpenClaw memory is this:

**If it matters later, save it to a file now.**

Do not trust chat alone for important rules.

---

## Step 1: Open your terminal

This guide assumes you are using a standard OpenClaw setup on Linux or a VPS, and that OpenClaw was installed in the normal location.

### 1.1 Open your terminal window

If you are already connected to your server over SSH, stay there.

If you are on your own Linux machine, open the Terminal app.

If you are on Windows and managing a Linux VPS:
1. Open **Windows Terminal**
2. SSH into your VPS
3. Stay in that SSH session for the rest of these steps

If you are already looking at a command prompt connected to your OpenClaw machine, you are in the right place.

---

## Step 2: Move into your OpenClaw workspace

Your most important memory files usually live in the OpenClaw workspace.

In the terminal, type this command exactly:

```bash
cd ~/.openclaw/workspace
```

Then press **Enter**.

### 2.1 Check that you are in the right folder

Now type:

```bash
pwd
```

Then press **Enter**.

You should see something like:

```bash
/home/YOUR_USERNAME/.openclaw/workspace
```

That means you are in the correct workspace folder.

### 2.2 List the files in the workspace

Now type:

```bash
ls
```

Then press **Enter**.

You should see files like:
- `AGENTS.md`
- `SOUL.md`
- `USER.md`
- `MEMORY.md`
- `TOOLS.md`
- maybe a `memory` folder

If you see `MEMORY.md`, that is a good sign.

---

## Step 3: Open MEMORY.md

`MEMORY.md` is where your durable long-term memory should go.

That means things like:
- important preferences
- rules the assistant learned
- mistakes that should never happen again
- project-level facts that should survive across sessions

### 3.1 Open MEMORY.md in nano

In the terminal, type:

```bash
nano MEMORY.md
```

Then press **Enter**.

This opens the file in the **nano** text editor.

### 3.2 What to put in MEMORY.md

Good things to add:
- “Steve prefers concise status updates.”
- “Do not do destructive bulk actions without explicit approval.”
- “Before answering about past work, search memory first.”
- “When a mistake is corrected, save it as a durable rule.”

Bad things to put in MEMORY.md:
- random temporary ideas
- rough drafts
- giant logs of everything that happened today
- API keys, passwords, or tokens

Keep `MEMORY.md` short and useful.

### 3.3 Example MEMORY.md entry

Here is the style you want:

```markdown
## Durable rules

- Before answering questions about prior work, search memory first.
- Do not perform destructive actions without explicit approval.
- Steve prefers concise status updates with the actual result first.
```

### 3.4 Save and exit nano

When you are done editing:
1. Press **Ctrl + O** to write the file
2. Press **Enter** to confirm
3. Press **Ctrl + X** to exit

That saves your changes.

---

## Step 4: Open AGENTS.md

`AGENTS.md` is where you put operating rules.

This file tells OpenClaw **how to behave** while working.

### 4.1 Open AGENTS.md

In the terminal, type:

```bash
nano AGENTS.md
```

Then press **Enter**.

### 4.2 Add a memory protocol section

You want your assistant to search memory before acting.

Add a section like this:

```markdown
## Memory Protocol

- Before answering questions about prior work: search memory first.
- Before starting non-trivial work: check recent memory for active context.
- When something important is learned: write it down immediately.
- When corrected on a mistake: turn that correction into a durable rule.
- When a session gets large: summarize the important parts into today’s memory file.
```

### 4.3 Add a retrieval protocol section

Then add this:

```markdown
## Retrieval Protocol

Before doing non-trivial work:
1. run memory_search for the topic, project, or preference
2. use memory_get for the relevant file chunk if needed
3. then continue with the task
```

That gives OpenClaw a clear rule:
- check memory first
- then act

### 4.4 Save and exit nano

When you are done:
1. Press **Ctrl + O**
2. Press **Enter**
3. Press **Ctrl + X**

---

## Step 5: Open the daily memory folder

OpenClaw also uses daily memory logs.

These are usually stored in:

```bash
~/.openclaw/workspace/memory/
```

### 5.1 Move into the memory folder

In the terminal, type:

```bash
cd ~/.openclaw/workspace/memory
```

Then press **Enter**.

### 5.2 List the files

Type:

```bash
ls
```

Then press **Enter**.

You should see files named like dates, for example:
- `2026-04-06.md`
- `2026-04-05.md`

These files are useful for:
- what happened today
- current task state
- decisions made recently
- follow-up notes

### 5.3 Open today’s file

If today’s file exists, open it like this:

```bash
nano 2026-04-06.md
```

Replace the date with today’s date if needed.

If the file does not exist yet, nano will create it for you.

### 5.4 What belongs in the daily memory file

Good examples:
- “Decision: Use the Launch Toolkit as the current product focus.”
- “Changed: Updated the VPS setup guide PDF.”
- “Follow-up: Rewrite the memory guide for true beginners.”
- “Mistake: Important rule was only left in chat and not written to file.”

This file is for working memory, not long-term permanent memory.

---

## Step 6: Find your openclaw.json config file

If you used the standard OpenClaw installation path, the config file is usually here:

```bash
~/.openclaw/openclaw.json
```

### 6.1 Move to the .openclaw folder

In the terminal, type:

```bash
cd ~/.openclaw
```

Then press **Enter**.

### 6.2 Check that openclaw.json exists

Now type:

```bash
ls
```

Then press **Enter**.

You should see:
- `openclaw.json`

If you see that file, you are in the right place.

### 6.3 Open openclaw.json in nano

Type:

```bash
nano openclaw.json
```

Then press **Enter**.

Now you are editing the main OpenClaw config file.

---

## Step 7: Update the config baseline

This is the section where you make OpenClaw memory more reliable.

What we want to do:
- give compaction more headroom
- make sure memory flush is enabled
- turn on local memory search
- reduce tool-result bloat with pruning

### 7.1 Carefully find the agents defaults section

Inside `openclaw.json`, look for:

```json
"agents"
```

Then look inside that for:

```json
"defaults"
```

If those sections already exist, you will add the missing fields inside them.

If they do **not** exist, you may need to paste the full block below into the file in the correct place.

### 7.2 Use this config baseline

Format the JSON exactly like this:

```json
{
  "agents": {
    "defaults": {
      "compaction": {
        "reserveTokensFloor": 40000,
        "memoryFlush": {
          "enabled": true,
          "softThresholdTokens": 4000,
          "systemPrompt": "Session nearing compaction. Store durable memories now.",
          "prompt": "Write any lasting notes to memory/YYYY-MM-DD.md; reply with NO_REPLY if nothing to store."
        }
      },
      "memorySearch": {
        "enabled": true,
        "provider": "local",
        "local": {
          "modelPath": "hf:ggml-org/embeddinggemma-300m-qat-q8_0-GGUF/embeddinggemma-300m-qat-Q8_0.gguf"
        },
        "query": {
          "hybrid": {
            "enabled": true,
            "vectorWeight": 0.7,
            "textWeight": 0.3
          }
        },
        "cache": {
          "enabled": true
        }
      },
      "contextPruning": {
        "mode": "cache-ttl",
        "ttl": "5m"
      }
    }
  }
}
```

### 7.3 What these settings do

You do **not** need to memorize these.
Just understand the purpose.

- `reserveTokensFloor`: leaves enough room before context gets dangerously full
- `memoryFlush.enabled`: tells OpenClaw to save important memory before compaction
- `memorySearch.enabled`: turns on local memory searching
- `query.hybrid.enabled`: helps search by both words and meaning
- `contextPruning`: trims old tool-result bloat so compaction happens less aggressively

### 7.4 Save the config file

When you finish editing `openclaw.json`:
1. Press **Ctrl + O**
2. Press **Enter**
3. Press **Ctrl + X**

That saves the file.

---

## Step 8: Restart OpenClaw after editing config

After changing `openclaw.json`, restart the gateway so the new settings can take effect.

In the terminal, type:

```bash
openclaw gateway restart
```

Then press **Enter**.

### 8.1 Check that the gateway is running

Now type:

```bash
openclaw gateway status
```

Then press **Enter**.

If the service is running, your config changes should now be active.

---

## Step 9: Test whether memory is working better

Now that your files and config are in better shape, test the workflow.

### 9.1 Add one durable preference

In chat with your assistant, say something like:

`Remember this: always search memory before answering questions about past work.`

Then immediately say:

`Write that to MEMORY.md now.`

This is important.
Do not leave it only in chat.

### 9.2 Add one daily working note

Then say:

`Write today’s important task context to today’s memory file.`

That helps the assistant keep working context in the right place.

### 9.3 Test retrieval

Now ask:

`What rule did I just tell you to remember about past work? Search memory first before answering.`

If the assistant behaves properly, it should retrieve the rule from memory rather than guessing.

---

## Step 10: Use manual save points

Even with automatic memory flush enabled, you should still use manual save points.

These are simple messages like:
- `Save this to memory.`
- `Write today’s key decisions to memory.`
- `Add that as a rule to MEMORY.md.`

Use these when:
- you switch topics
- you make an important decision
- you fix a mistake
- a session is getting long
- you are about to compact or reset

This is one of the easiest ways to prevent memory loss.

---

## Step 11: Know the difference between long-term memory and daily memory

This part matters a lot.

## Put this in MEMORY.md

Use `MEMORY.md` for:
- durable preferences
- project-level truths
- recurring rules
- important corrections
- things that should survive across many sessions

## Put this in memory/YYYY-MM-DD.md

Use daily memory files for:
- what changed today
- what task is in progress right now
- follow-ups
- recent decisions
- temporary but useful context

A simple way to think about it:
- `MEMORY.md` = what should still matter later
- daily log = what matters right now

---

## Step 12: Fix common beginner mistakes

## Mistake 1: only saying things in chat

If a rule matters, save it to a file.

## Mistake 2: making MEMORY.md too big

Keep it short.
If everything goes in long-term memory, nothing stands out.

## Mistake 3: never checking memory before acting

That is why the retrieval protocol belongs in `AGENTS.md`.

## Mistake 4: waiting until overflow

Do not wait until the session is already broken.
Use save points before things get too large.

## Mistake 5: forgetting to restart after config changes

If you edit `openclaw.json`, restart the gateway.

---

## The easiest beginner workflow

If you want a simple everyday routine, use this:

1. Keep durable rules in `MEMORY.md`
2. Keep operating behavior in `AGENTS.md`
3. Keep today’s work in `memory/YYYY-MM-DD.md`
4. Add save points during long sessions
5. Restart OpenClaw after config changes
6. Tell the assistant to search memory before acting

That is enough to make a huge difference.

---

## The one sentence to remember

If it matters later, write it now.

That single rule will save you from most OpenClaw memory problems.

---

## Quick checklist

- [ ] Open terminal
- [ ] Run `cd ~/.openclaw/workspace`
- [ ] Open `MEMORY.md` with `nano MEMORY.md`
- [ ] Add durable preferences and rules
- [ ] Open `AGENTS.md` with `nano AGENTS.md`
- [ ] Add memory and retrieval protocols
- [ ] Open the daily memory folder with `cd ~/.openclaw/workspace/memory`
- [ ] Open today’s file with `nano YYYY-MM-DD.md`
- [ ] Move to `~/.openclaw` with `cd ~/.openclaw`
- [ ] Open config with `nano openclaw.json`
- [ ] Add the config baseline JSON
- [ ] Save the file
- [ ] Run `openclaw gateway restart`
- [ ] Run `openclaw gateway status`
- [ ] Test memory by saving one rule and asking the assistant to retrieve it

---

## Source referenced

This guide was created with reference to:

`https://velvetshark.com/openclaw-memory-masterclass`
