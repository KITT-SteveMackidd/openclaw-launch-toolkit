'use client';

import { useMemo, useState } from 'react';
import {
  multiAgentChecklist,
  multiAgentFailureModes,
  multiAgentHandoffFields,
  multiAgentPlaybooks,
  multiAgentQuickWins,
  multiAgentRoleCards,
  multiAgentRoutingPrinciples,
  multiAgentScoringGuidance,
  multiAgentTriageAxes,
} from '@/lib/data';

const defaultTaskDraft = {
  title: 'Implement the first pass of the Multi-Agent Routing toolkit in the launch site.',
  userFacingRisk: 2,
  fileDepth: 4,
  ambiguity: 2,
  specialistNeed: 4,
  coordinationCost: 3,
};

const defaultHandoff = {
  task: 'Implement the first pass of the Multi-Agent Routing toolkit in the launch app.',
  success: 'A meaningful first-pass UX exists, data flows through the docs tab, and the production build passes.',
  constraints: 'Stay consistent with project style, modify the existing app directly, and avoid scope drift.',
  artifacts: 'List changed files, summarize what shipped, and include build status plus any blocker.',
};

function routeLabel(score: number) {
  if (score >= 5) return 'Delegate to a specialist agent';
  if (score >= 1) return 'Split the task and keep a main-agent checkpoint';
  return 'Keep it in the main agent';
}

function routeTone(score: number) {
  if (score >= 5) return 'good';
  if (score >= 1) return 'warn';
  return 'info';
}

export default function MultiAgentRoutingToolkit() {
  const [taskDraft, setTaskDraft] = useState(defaultTaskDraft);
  const [handoffDraft, setHandoffDraft] = useState(defaultHandoff);

  const routingScore =
    taskDraft.fileDepth +
    taskDraft.specialistNeed -
    taskDraft.userFacingRisk -
    taskDraft.ambiguity -
    taskDraft.coordinationCost;

  const routingPreview = useMemo(() => {
    const recommendation = routeLabel(routingScore);

    return [
      '## Delegation brief',
      '',
      `- Task: ${handoffDraft.task}`,
      `- Success condition: ${handoffDraft.success}`,
      `- Constraints: ${handoffDraft.constraints}`,
      `- Return with: ${handoffDraft.artifacts}`,
      `- Recommendation: ${recommendation}`,
    ].join('\n');
  }, [handoffDraft, routingScore]);

  return (
    <section className="sectionStack">
      <div className="grid2">
        <div className="sectionCard">
          <div className="kicker">Outcome</div>
          <h2 style={{ marginTop: 0 }}>Route work to the right agent without creating coordination theater</h2>
          <p className="subtle">
            This first pass turns the placeholder into a practical routing guide: when to keep work in the main session,
            when to delegate, how to frame handoffs, and how to recover when a specialist run goes sideways.
          </p>
          <div className="badgeRow" style={{ marginTop: 16 }}>
            <span className="badge good">Real draft</span>
            <span className="badge info">Interactive triage</span>
            <span className="badge warn">Ready for Steve&apos;s opinions later</span>
          </div>
        </div>

        <div className="sectionCard">
          <div className="kicker">Reader promise</div>
          <ul className="list">
            {multiAgentQuickWins.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid3">
        {multiAgentRoutingPrinciples.map((item) => (
          <article className="sectionCard" key={item.title}>
            <div className="kicker">Routing principle</div>
            <h3 style={{ marginTop: 0 }}>{item.title}</h3>
            <p className="subtle">{item.detail}</p>
            <div className="callout" style={{ marginTop: 16 }}>
              <strong>Operator rule:</strong> {item.rule}
            </div>
          </article>
        ))}
      </div>

      <div className="grid2">
        <div className="sectionCard">
          <div className="kicker">Agent role definitions</div>
          <div className="tableLike">
            {multiAgentRoleCards.map((item) => (
              <div className="rowItem" key={item.title}>
                <div>
                  <strong>{item.title}</strong>
                </div>
                <div className="subtle">Best for: {item.bestFor}</div>
                <div className="subtle">Avoid: {item.avoid}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="sectionCard">
          <div className="kicker">Task triage rules</div>
          <p className="subtle">
            Delegation works best when the work is concrete, bounded, and specialist-friendly. It gets worse when the task
            is ambiguous, highly user-facing, or requires constant re-interpretation.
          </p>
          <div className="grid2" style={{ marginTop: 18 }}>
            {multiAgentTriageAxes.map((item) => (
              <div className="callout" key={item.title}>
                <strong>{item.title}:</strong> {item.detail}
              </div>
            ))}
          </div>
          <div className="kicker" style={{ marginTop: 18 }}>Quick scoring guidance</div>
          <ul className="list">
            {multiAgentScoringGuidance.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid2">
        <div className="sectionCard">
          <div className="kicker">Delegation planner</div>
          <p className="subtle">
            Use the sliders to pressure-test whether a task should stay in the main session, get split, or be delegated to a specialist.
          </p>

          <div className="formGrid compactForm" style={{ marginTop: 18 }}>
            <label className="fieldLabel">
              <span>Task title</span>
              <textarea
                className="fieldInput fieldTextarea"
                value={taskDraft.title}
                onChange={(event) => setTaskDraft((current) => ({ ...current, title: event.target.value }))}
              />
            </label>
            <label className="fieldLabel">
              <span>User-facing risk ({taskDraft.userFacingRisk}/5)</span>
              <input
                className="fieldRange"
                type="range"
                min={1}
                max={5}
                value={taskDraft.userFacingRisk}
                onChange={(event) => setTaskDraft((current) => ({ ...current, userFacingRisk: Number(event.target.value) }))}
              />
            </label>
            <label className="fieldLabel">
              <span>File / execution depth ({taskDraft.fileDepth}/5)</span>
              <input
                className="fieldRange"
                type="range"
                min={1}
                max={5}
                value={taskDraft.fileDepth}
                onChange={(event) => setTaskDraft((current) => ({ ...current, fileDepth: Number(event.target.value) }))}
              />
            </label>
            <label className="fieldLabel">
              <span>Ambiguity ({taskDraft.ambiguity}/5)</span>
              <input
                className="fieldRange"
                type="range"
                min={1}
                max={5}
                value={taskDraft.ambiguity}
                onChange={(event) => setTaskDraft((current) => ({ ...current, ambiguity: Number(event.target.value) }))}
              />
            </label>
            <label className="fieldLabel">
              <span>Specialist need ({taskDraft.specialistNeed}/5)</span>
              <input
                className="fieldRange"
                type="range"
                min={1}
                max={5}
                value={taskDraft.specialistNeed}
                onChange={(event) => setTaskDraft((current) => ({ ...current, specialistNeed: Number(event.target.value) }))}
              />
            </label>
            <label className="fieldLabel">
              <span>Coordination cost ({taskDraft.coordinationCost}/5)</span>
              <input
                className="fieldRange"
                type="range"
                min={1}
                max={5}
                value={taskDraft.coordinationCost}
                onChange={(event) => setTaskDraft((current) => ({ ...current, coordinationCost: Number(event.target.value) }))}
              />
            </label>
          </div>
        </div>

        <div className="sectionCard">
          <div className="kicker">Routing recommendation</div>
          <p className="subtle">A useful routing model stays simple: favor delegation when depth and specialist leverage are high, but pull work back when ambiguity or user risk dominates.</p>
          <div className="badgeRow" style={{ marginTop: 16 }}>
            <span className="badge info">Score {routingScore}</span>
            <span className={`badge ${routeTone(routingScore)}`}>{routeLabel(routingScore)}</span>
          </div>
          <div className="callout" style={{ marginTop: 18 }}>
            <strong>Current task:</strong> {taskDraft.title}
          </div>
          <div className="kicker" style={{ marginTop: 18 }}>Suggested interpretation</div>
          <ul className="list">
            <li><strong>High depth + high specialist need:</strong> good candidate for a coding or research subagent.</li>
            <li><strong>High ambiguity or high user-facing risk:</strong> keep the framing, taste, and final reply in the main session.</li>
            <li><strong>High coordination cost:</strong> split the task only if the specialist return will clearly save more time than the handoff costs.</li>
          </ul>
        </div>
      </div>

      <div className="grid2">
        <div className="sectionCard">
          <div className="kicker">Handoff pattern</div>
          <p className="subtle">
            A good handoff removes guesswork. Tell the specialist what to do, where to do it, what success looks like,
            and exactly what to report back.
          </p>
          <div className="formGrid" style={{ marginTop: 18 }}>
            {multiAgentHandoffFields.map((field) => (
              <label className="fieldLabel" key={field.key}>
                <span>{field.label}</span>
                <textarea
                  className="fieldInput fieldTextarea"
                  value={handoffDraft[field.key]}
                  onChange={(event) => setHandoffDraft((current) => ({ ...current, [field.key]: event.target.value }))}
                />
              </label>
            ))}
          </div>
        </div>

        <div className="sectionCard">
          <div className="kicker">Delegation brief preview</div>
          <p className="subtle">This is the shape you want: specific enough to execute, short enough to reuse, and explicit about the return format.</p>
          <pre className="fileBlock">{routingPreview}</pre>
          <div className="kicker" style={{ marginTop: 18 }}>What a handoff must include</div>
          <ul className="list">
            <li><strong>Scope:</strong> the exact task, repo, and boundaries.</li>
            <li><strong>Success condition:</strong> what counts as done, not just what to try.</li>
            <li><strong>Constraints:</strong> style, safety, approvals, and things to avoid.</li>
            <li><strong>Return payload:</strong> changed files, build/test status, and blockers.</li>
          </ul>
        </div>
      </div>

      <div className="grid3">
        {multiAgentPlaybooks.map((item) => (
          <article className="sectionCard" key={item.title}>
            <div className="badgeRow" style={{ marginBottom: 12 }}>
              <span className={`badge ${item.tone}`}>{item.label}</span>
            </div>
            <h3 style={{ marginTop: 0 }}>{item.title}</h3>
            <p className="subtle">{item.detail}</p>
            <ul className="list">
              {item.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="grid3">
        {multiAgentFailureModes.map((item) => (
          <article className="sectionCard" key={item.title}>
            <div className="kicker">Failure recovery</div>
            <h3 style={{ marginTop: 0 }}>{item.title}</h3>
            <p className="subtle">{item.detail}</p>
            <div className="callout" style={{ marginTop: 16 }}>
              <strong>Recovery move:</strong> {item.recovery}
            </div>
          </article>
        ))}
      </div>

      <div className="grid2">
        <div className="sectionCard">
          <div className="kicker">Operational checklist</div>
          <ul className="list">
            {multiAgentChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="sectionCard">
          <div className="kicker">Source-material slots still open</div>
          <ul className="list">
            <li><strong>Steve&apos;s strongest routing opinions:</strong> where he wants hard rules instead of flexible guidance.</li>
            <li><strong>Named agent examples:</strong> which roles and labels are safe to present publicly.</li>
            <li><strong>Real failure cases:</strong> examples of subagent drift, confusion, or useful recovery summaries.</li>
            <li><strong>Escalation tone:</strong> how blunt the public guide should be about when to stop delegating and take over directly.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
