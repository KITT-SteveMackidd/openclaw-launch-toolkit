# Improve Memory

Status: first implementation pass complete

This guide is for OpenClaw users who want better continuity without turning memory into a junk drawer.

## Outcome

Build a memory system that helps future work: lighter daily notes, clearer promotion rules, and a cleanup cadence that keeps memory useful instead of bloated.

## Reader promise

By the end of this guide, you should have:

- A practical memory philosophy
- A daily logging habit light enough to maintain
- Clear rules for what belongs in long-term memory
- A review cadence that prevents memory sprawl
- Concrete examples of good, bad, and cleaned-up memory

---

## 1. Memory philosophy

### What memory is for

Memory in OpenClaw exists to make the next session better.

Good memory should:

- preserve decisions that affect future work
- reduce repeated explanation
- retain stable preferences and operating rules
- keep important lessons from being rediscovered the hard way

If a note does none of those things, it probably does not need durable storage.

### What memory is not for

Memory is not:

- a diary of every interaction
- a complete transcript substitute
- emotional reassurance that "nothing was lost"
- a place to dump every status update

Those uses feel safe in the moment, but they make later retrieval worse.

### Why over-capturing becomes a problem

Too much memory becomes anti-memory.

When everything gets saved:

- reviews take longer
- useful signal gets buried in noise
- long-term files become harder to trust
- future sessions spend time parsing clutter instead of using context

A smaller, sharper memory system is usually more useful than a comprehensive one.

### Working principle

**Capture what changes future work. Let the rest stay ephemeral.**

---

## 2. Daily logging habits

### What to record during the day

Daily notes are the raw layer. They should be fast and practical.

Good daily captures include:

- decisions that were made
- meaningful changes in project direction
- follow-ups that still matter tomorrow
- mistakes or friction worth noticing
- context that would otherwise need to be reassembled next session

### What can stay ephemeral

Usually skip:

- routine acknowledgments
- every build/test run
- trivial chat details
- low-value status chatter
- details already preserved clearly elsewhere

### How much detail is enough

Enough to recover context quickly. Not enough to recreate the whole day.

A good test:

> If I read this tomorrow, will it save time or change what I do?

If yes, keep it.
If no, let it go.

### Lightweight daily note pattern

Use a short structure like this:

```md
# 2026-04-02

- Decision: Keep daily memory lightweight and promote only what repeats or changes future work.
- Changed: Improve Memory moved from placeholder to interactive first-pass draft.
- Follow-up: Add Steve's preferred examples for promotion rules and cleanup cadence.
- Avoid next time: Do not treat every build/test run as worthy of long-term memory.
```

That is enough for continuity without becoming a chore.

---

## 3. What belongs in long-term memory

Long-term memory should hold compressed, durable context.

### Good candidates

#### Durable preferences

Examples:

- preferred response style
- recurring communication expectations
- stable boundaries or working rules

#### Project-level context

Examples:

- why a product direction changed
- why a workflow was rejected
- what principle should guide future decisions

#### Repeated mistakes or lessons

Examples:

- failure patterns likely to recur
- instructions future-you keeps forgetting
- known sources of confusion or waste

#### Delegation-shaping rules

Examples:

- which agent should or should not handle certain tasks
- what must always be included in completion summaries
- role boundaries that affect future task routing

### Things that should stay out

Avoid promoting:

- temporary moods
- one-off events with no future effect
- routine progress chatter
- long narratives when one sentence would do
- information already stored cleanly in code, docs, or boards

### Litmus test

Promote something if it is likely to be:

- reused
- re-explained
- operationally important
- painful to forget

---

## 4. Promotion rules

Promotion is a filtering decision, not a reward for writing notes.

### Move a note into long-term memory when:

- it will likely matter again
- it changes future recommendations or implementation
- it compresses several repeated daily notes into one durable rule
- it captures a stable preference, lesson, or constraint

### Strong promotion signals

#### 1. Repeat signal

If you expect to explain it again, promote it.

#### 2. Behavior signal

If knowing it would change future actions, promote it.

#### 3. Compression signal

If several raw notes can be reduced to one strong summary, promote the summary.

### Anti-patterns to avoid

Do **not** promote something just because:

- it was recent
- it took effort to write
- it felt important in the moment
- you are afraid of losing anything at all

### Example promotion

Raw repeated notes:

- Steve prefers concise updates.
- Steve wants explicit build status.
- Steve does not want rambling completion summaries.

Promoted long-term memory:

```md
## Delegated coding output

- End delegated coding work with a concise completion summary and explicit build/test status.
```

That is what good promotion looks like: compressed and reusable.

---

## 5. Review and cleanup cadence

### Daily

At the end of the day:

- add the smallest useful note for what changed
- capture any follow-up still in motion
- skip vanity logging and transcript-like detail

### Weekly

Once a week:

- scan the last 5-7 daily notes
- look for repeats, stable preferences, and recurring mistakes
- promote only the compressed takeaway
- ignore or remove stale reminders that no longer matter

This is where memory becomes useful instead of merely accumulated.

### Periodic cleanup

Every so often:

- reread long-term memory
- remove outdated assumptions
- merge overlapping entries
- revise anything that is no longer true

If long-term memory is never pruned, it quietly becomes misleading.

### Rule of thumb

Daily memory captures.
Weekly review promotes.
Periodic cleanup prunes.

---

## 6. Example memory patterns

### Good example

```md
## Delegation boundary

- Doug should not be assigned memory-fix tasks unless explicitly reassigned.
- Reason: role clarity matters and this will affect future task routing.
```

Why this is good:

- durable
- specific
- operational
- likely to matter again

### Bad example

```md
Today we talked about memory again for a while. There were several points about memory philosophy, some feelings about the previous memory setup, and a lot of back-and-forth before the work moved on. It seemed important at the time.
```

Why this is bad:

- verbose
- unclear
- hard to reuse
- stores narrative instead of guidance

### Before / after cleanup example

Before:

```md
- Steve prefers concise updates.
- Steve wants explicit build status.
- Steve does not want rambling completion summaries.
```

After:

```md
- Delegated coding work should end with a concise completion summary plus explicit build/test status.
```

That is the kind of compression review should produce.

---

## 7. Implementation checklist

### Minimum viable memory system

- Create daily memory files
- Keep daily entries short and future-facing
- Reserve long-term memory for durable context only
- Review recent notes weekly
- Prune outdated long-term memory periodically

### Nice-to-have habits

- Compress repeated daily patterns into one stable rule
- Keep examples of good vs bad entries
- Review memory quality when context starts feeling noisy

### How to tell the system is working

The memory system is working if:

- context recovery gets faster
- repeated explanations decrease
- long-term memory becomes easier to trust
- daily notes stay lightweight enough that you actually keep them
- future sessions benefit from memory instead of fighting it

---

## Source material slots still open

Steve can still strengthen this guide by adding:

- preferred edge cases for promotion vs non-promotion
- actual before/after cleanup examples from real usage
- stronger opinions on cleanup cadence
- public-facing phrasing around memory bloat and over-capture
