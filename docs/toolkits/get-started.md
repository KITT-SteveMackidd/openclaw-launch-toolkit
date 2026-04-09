# Get Started

Status: first implementation pass complete

This guide is for new OpenClaw users who want useful daily workflows fast, without turning setup into a hobby project.

## Outcome

Go from "I installed OpenClaw" to "I use it for real work" with a clean workspace baseline, a short setup sequence, and three starter workflows that create immediate value.

## Reader promise

By the end of this guide, you should have:

- A working OpenClaw setup you trust enough to use every day
- A minimal workspace structure that does not fight you later
- Three practical starter workflows you can run this week
- Fewer avoidable mistakes around memory, scope, and over-customization

---

## 1. Who this is for

This guide is for you if:

- You already have basic comfort with files, folders, and editing text
- You want to use OpenClaw as an operator tool, not a toy
- You would rather copy a sane baseline than invent your own system on day one
- You care more about speed to usefulness than about perfect personalization

This guide is **not** trying to teach every advanced OpenClaw capability. It is trying to get you to a stable, useful baseline quickly.

What this guide helps you skip:

- Endless tweaking before you have a real workflow
- Writing giant prompt manifestos before you know what matters
- Treating memory like a scrapbook instead of a tool
- Building a beautiful workspace that does not actually help you operate

---

## 2. Setup checklist

### The practical goal

Before you optimize anything, prove these basics:

1. OpenClaw starts
2. It can read and write inside your workspace
3. It can see your core guidance files
4. You can complete one real task end-to-end

If any one of those is missing, you are not "set up enough" yet.

### Prerequisites

At minimum, you want:

- OpenClaw installed and launching correctly
- A dedicated workspace directory
- A text editor you like using
- Enough comfort with the terminal to start the app and inspect files

Nice to have, but not required on day one:

- Git initialized in your project directories
- A few specialized skills you know you actually need
- External service integrations
- Automation or scheduled routines

### First-run verification

Use this quick sequence:

#### Step 1: confirm OpenClaw can run

Make sure the app launches cleanly and you can interact with it. If startup is flaky, fix that first instead of marching forward.

#### Step 2: confirm the workspace exists

You want one stable home directory where OpenClaw can keep its operating context. Inside that workspace, the important thing is not fancy structure. It is consistency.

#### Step 3: confirm baseline files are visible

A good first-run setup should include these files at the workspace root:

- `AGENTS.md`
- `SOUL.md`
- `USER.md`
- `TOOLS.md`
- `IDENTITY.md`
- `memory/` directory

If those exist and OpenClaw can read them, you have the beginnings of continuity.

#### Step 4: test a harmless write

Have OpenClaw update or create a small file in the workspace. This proves it can do more than chat.

#### Step 5: finish one real task

Examples:

- Summarize a document in your workspace
- Draft a follow-up message based on notes
- Create a simple checklist file from a rough request
- Inspect a repo and tell you what is in it

The point is not the task. The point is proving the loop works.

### “You are ready to continue” checkpoint

You are ready for the rest of this guide when all of the following are true:

- OpenClaw launches reliably
- Your workspace files exist and are readable
- OpenClaw can create or edit files in the workspace
- You have completed one useful task without friction or confusion

If that is not true yet, stay here. Do not jump ahead to clever workflows.

---

## 3. Recommended workspace files

A strong OpenClaw setup does **not** begin with a giant knowledge base. It begins with a few files that teach the assistant who it is, who it is helping, and how to persist context.

### `AGENTS.md`

Purpose: defines how your workspace operates.

This is the operating handbook. It should explain startup behavior, memory habits, red lines, and practical working rules.

Keep it focused on behavior, not philosophy essays.

### `SOUL.md`

Purpose: gives the assistant a stable voice and working style.

This is where tone, posture, and values live. Good examples:

- be genuinely helpful
- avoid performative filler
- be resourceful before asking
- respect privacy and human oversight

Do not overcomplicate this. A page of clear guidance beats a bloated identity document.

### `USER.md`

Purpose: stores the helpful basics about the human.

Use it for:

- name and preferred form of address
- light personal context that helps with tone and recommendations
- durable interests or goals

Do **not** turn it into a dossier. If it feels creepy, it probably is.

### `TOOLS.md`

Purpose: local setup notes.

Put environment-specific facts here, such as:

- device nicknames
- SSH aliases
- preferred TTS voice
- room names
- machine-specific quirks

This file is your cheat sheet, not a dumping ground.

### `IDENTITY.md`

Purpose: quick assistant identity metadata.

This is lightweight. It helps continuity, naming, and presentation. It should not become a substitute for `SOUL.md`.

### `memory/YYYY-MM-DD.md`

Purpose: raw daily continuity.

Use daily memory notes for:

- what happened
- what changed
- what decisions were made
- what to remember next time

Think of this as a working log, not a polished journal.

### `MEMORY.md`

Purpose: curated long-term memory.

This should hold durable lessons and stable context, not every little event. Promote into it selectively.

### Minimal starter versions

If you are starting from scratch, your first versions should be short and useful. Aim for:

- `AGENTS.md`: startup rules, memory rules, red lines
- `SOUL.md`: tone, boundaries, how to behave
- `USER.md`: name, context, preferences
- `TOOLS.md`: setup-specific notes only
- `memory/`: create it immediately, even if today’s file is tiny

### What not to overcomplicate yet

Avoid these early mistakes:

- writing ten pages of prompt rules before using the system
- creating five overlapping memory files for the same purpose
- adding automations you do not yet trust
- stuffing random project notes into `SOUL.md` or `USER.md`

Baseline first. Refinement later.

---

## 4. First 3 high-value workflows

If you only use OpenClaw for one or two flashy demos, you will not build trust in it. Start with small recurring workflows that save time.

### Workflow 1: daily operator check-in

Use OpenClaw to answer: what matters today?

Good examples:

- summarize recent project state
- inspect a repo and tell you what changed
- turn rough goals into a short action list
- check your memory notes before starting work

Why this comes first:

- it creates daily usefulness
- it trains you to work from context, not from scratch
- it is low-risk and repeatable

### Workflow 2: turn rough notes into usable artifacts

This is one of the fastest ways to get value.

Examples:

- raw bullet points → polished checklist
- scattered thoughts → draft document
- repo notes → implementation plan
- meeting fragments → follow-up summary

Why this comes second:

- it turns your mess into something reusable
- it creates files, which means continuity
- it shows the difference between chatting and operating

### Workflow 3: workspace-aware implementation help

Once the baseline is stable, use OpenClaw inside a real project.

Examples:

- read code and explain the shape of a repo
- implement a small feature or edit
- draft documentation from actual files
- review a launch page or checklist against the repo state

Why this comes third:

- it proves OpenClaw can work against real context
- it pushes beyond brainstorming into execution
- it reveals where your workspace guidance is strong or weak

### Why these three come first

Together they cover:

- daily planning
- artifact creation
- real execution

That is enough to make OpenClaw useful before you touch advanced routing, automations, or memory refinement.

---

## 5. Common setup mistakes

### Mistake 1: trying to personalize everything on day one

**Symptom:** You spend an hour rewriting identity files and still have not completed a real task.

**Fast fix:** Cut the files down to a minimal baseline and do one practical workflow.

**Prevention:** Personalization should follow usage, not precede it.

### Mistake 2: treating memory like a junk drawer

**Symptom:** Everything goes into memory, so nothing is easy to find or worth rereading.

**Fast fix:** Use daily memory for raw notes and reserve long-term memory for stable lessons.

**Prevention:** Promote selectively. Raw capture and curated memory are different jobs.

### Mistake 3: asking OpenClaw to do work without enough local context

**Symptom:** The assistant gives generic answers that feel obvious or shallow.

**Fast fix:** Point it at the real files, repo, notes, or docs that matter.

**Prevention:** Use the workspace. Context beats clever prompting.

### Mistake 4: choosing “interesting” tasks instead of repeatable ones

**Symptom:** You run one impressive demo, then do not use OpenClaw again for a week.

**Fast fix:** Pick workflows tied to work you actually repeat.

**Prevention:** Favour recurring pain points over novelty.

### Mistake 5: overbuilding the system before trust exists

**Symptom:** You are already thinking about automation, subagents, and orchestration, but basic setup still feels shaky.

**Fast fix:** Simplify back to one workspace, a few core files, and three starter workflows.

**Prevention:** Earn complexity by proving the baseline works.

---

## 6. Quick win checklist

After about 30 minutes, "useful enough" should look like this:

- OpenClaw runs without drama
- Your workspace has the core baseline files
- You understand what each file is for
- You have one memory note for today
- You completed one small real task
- You can name the first workflow you will use tomorrow

### A very practical 30-minute target

If you only want the short version, do this:

1. Confirm OpenClaw launches
2. Create or verify your baseline files
3. Add one short note to `USER.md`
4. Add one setup-specific note to `TOOLS.md`
5. Create today’s memory file
6. Ask OpenClaw to turn rough notes into a useful file
7. Save the result in the workspace

That is enough to move from installation to usefulness.

### What to postpone until later

Delay these until the baseline feels boringly reliable:

- aggressive automation
- broad multi-agent routing strategies
- large skill libraries you barely use
- deep memory taxonomy debates
- polished packaging for workflows you have not yet validated

Useful first. Elegant later.

---

## 7. Next step after initial setup

Once the baseline works, the best next toolkit is usually **Improve Memory**.

Why:

- most users can start quickly, but lose value when memory gets messy
- daily notes, promotion rules, and cleanup habits are where continuity either compounds or collapses
- better memory makes every later workflow stronger

After that, move to **Multi-Agent Routing** only when:

- you already know which tasks repeat
- you can tell which work should be delegated vs done directly
- your baseline workflows are stable enough that more complexity will help instead of distract

### A sane progression

1. Get setup stable
2. Build 3 repeatable workflows
3. Improve memory hygiene
4. Add delegation and routing only when it solves a real bottleneck

That order will save you a lot of wheel-spinning.

---

## Quick reference: recommended day-one baseline

### Create these first

- `AGENTS.md`
- `SOUL.md`
- `USER.md`
- `TOOLS.md`
- `IDENTITY.md`
- `memory/`

### Prove these capabilities

- read files
- write files
- maintain continuity
- complete one real task

### Use these first workflows

- daily operator check-in
- notes into artifacts
- workspace-aware implementation help

If you can do those three things, you are not "experimenting with OpenClaw" anymore. You are using it.

---

## Open questions for later refinement

These are the best candidates for Steve’s source material later:

- the exact install sequence he wants to recommend publicly
- screenshots of a clean workspace baseline
- one or two real first-week workflow examples from actual use
- the preferred minimum toolchain for new buyers
- the line between universal guidance and Steve-specific setup opinions
