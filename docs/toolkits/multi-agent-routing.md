# Multi-Agent Routing

Status: first implementation pass complete

This guide is for OpenClaw users who want clean delegation without turning multi-agent work into chaos, over-routing, or endless coordination chatter.

## Outcome

Build a practical routing model that helps you decide:

- what should stay in the main session
- what should go to a specialist agent
- how to write better handoffs
- how to recover when an agent gets stuck, drifts, or only finishes part of the task

## Reader promise

By the end of this guide, you should have:

- a simple routing model for common OpenClaw task types
- role definitions for main vs specialist agents
- a reusable handoff structure
- a triage method for deciding when delegation is worth it
- fallback rules for messy or partial agent runs

---

## 1. When to route vs do it directly

### Keep it in the main agent when:

- the task is still ambiguous
- the work is highly user-facing
- the answer depends heavily on taste, judgment, or private context
- you are still deciding what “done” means

The main session should own clarification, prioritization, and the final user-facing answer.

### Route it to a specialist when:

- the task is concrete and bounded
- the work needs sustained file exploration or execution depth
- the specialist has a clear advantage, like coding, research, or repetitive transformation
- the return can be summarized cleanly

### Routing is overkill when:

- the task is tiny and faster to do directly
- the handoff would take longer than the work itself
- you would need to supervise every minute anyway
- the specialist would be forced to guess missing intent

### Working rule

**Keep judgment close to the user. Push execution depth outward.**

---

## 2. Agent role definitions

### Main agent

Owns:

- user-facing conversation
- clarifying the request
- choosing the plan
- deciding what matters most
- reviewing specialist output
- final synthesis and delivery

Should avoid:

- getting trapped in long implementation loops when a specialist can do them better

### Coding specialist

Owns:

- implementation work
- repo-local file edits
- build/test loops
- deeper technical execution

Should avoid:

- inventing product direction
- guessing user intent
- making external promises

### Research / support specialist

Owns:

- gathering evidence
- checking docs or source material
- preparing compact summaries
- comparing options for the main agent to judge

Should avoid:

- making the final recommendation when the tradeoff depends mostly on user context

### Boundary rule

**Specialists execute. The main agent judges and presents.**

---

## 3. Task triage rules

Before delegating, pressure-test the task across five dimensions.

### 1. User-facing risk

If a mistake would directly affect what the user sees, keep stronger control in the main session.

### 2. Execution depth

If the task touches many files, needs a build/test loop, or requires sustained focus, delegation becomes more attractive.

### 3. Ambiguity

If the task is vague, do not outsource the confusion.
Clarify first. Delegate second.

### 4. Specialist leverage

If a coding agent or research agent can clearly do the middle of the task faster or better, route it.

### 5. Coordination cost

If the handoff, monitoring, and review cost are high, do not split the task unless the leverage clearly outweighs that cost.

### Simple routing heuristic

Ask:

> Will delegation save more focus than it costs in coordination?

If yes, route it.
If no, keep it central.

---

## 4. Escalation and fallback patterns

### When an agent asks too many questions

This usually means the handoff was under-scoped.

Recovery:

- pull the task back
- clarify the missing decisions in the main session
- re-delegate only the concrete remainder

### When an agent drifts outside scope

This usually means the boundary was implied instead of explicit.

Recovery:

- restate the exact goal
- name what is out of scope
- require a concise return tied to the original task

### When the agent gets stuck

Do not let the run spin forever.

Recovery:

- ask for the blocker in one sentence
- ask what changed already
- decide whether to unblock, re-scope, or stop and take over directly

### When the result is only partial

Partial progress is still useful if it is summarized well.

Capture:

- what changed
- what passed
- what failed
- what the next best step is

### Recovery rule

**Preserve momentum, not perfection.**

---

## 5. Example routing playbooks

### Build task

Pattern:

1. Main agent defines scope, repo, constraints, and success condition.
2. Coding specialist performs implementation and validation.
3. Main agent reviews and reports the result to the user.

### Research task

Pattern:

1. Main agent defines the question and decision criteria.
2. Research specialist gathers options or evidence.
3. Main agent interprets the findings and gives the recommendation.

### Mixed task

Pattern:

1. Main agent handles the user-facing framing and initial triage.
2. Specialist handles the bounded execution block.
3. Main agent performs synthesis, QA, and final delivery.

### Anti-pattern

Do not delegate the entire messy workflow if only the middle needs specialist depth.
Split at clean handoff boundaries instead.

---

## 6. Failure recovery notes

### Common failure modes

- under-scoped handoff
- ambiguous success condition
- drifting beyond the requested boundary
- partial implementation with poor summary
- excessive coordination overhead for too little gain

### Recovery sequence

1. Stop the drift.
2. Identify the real blocker.
3. Capture useful partial progress.
4. Re-scope or re-route.
5. Finish with a cleaner handoff or take over directly.

### What a useful partial summary looks like

```md
- Changed: Added the toolkit component and wired it into the docs tab.
- Validation: Build passes.
- Blocker: No blocker.
- Next step: Add Steve-specific public examples and sharper routing opinions.
```

That shape preserves momentum.

---

## 7. Operational checklist

### Pre-delegation

- Clarify the task.
- Choose the specialist for a reason.
- Name the repo, files, or environment.
- Define success in verifiable terms.
- Specify exactly what should be returned.

### In-flight

- Monitor for scope drift.
- Intervene only when the agent is blocked or off-track.
- Avoid micromanaging work that was intentionally delegated.

### Completion

- Review the output.
- Check the validation result.
- Compress the result into a clean user-facing summary.
- Keep any blocker or next step explicit.

---

## Source material slots still open

Steve can still strengthen this guide by adding:

- stronger public examples of his preferred agent boundaries
- named routing examples safe to share publicly
- real stuck-run and recovery examples from live usage
- sharper opinions on when to stop delegating and take over directly
