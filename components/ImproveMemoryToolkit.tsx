'use client';

import { useMemo, useState } from 'react';
import {
  improveMemoryChecklist,
  improveMemoryCleanupRhythms,
  improveMemoryExamples,
  improveMemoryLongTermRules,
  improveMemoryPhilosophy,
  improveMemoryPromotionSignals,
  improveMemoryQuickWins,
  improveMemorySampleEntries,
} from '@/lib/data';

const defaultDailyInputs = {
  date: '2026-04-02',
  decision: 'Keep daily memory lightweight and promote only what repeats or changes future work.',
  change: 'Finished a first-pass toolkit implementation and proved the build passes.',
  followUp: 'Review this week\'s daily notes on Friday and promote durable lessons to MEMORY.md.',
  avoid: 'Dumping every tiny interaction or status update into long-term memory.',
};

const defaultPromotionDraft = {
  note: 'Steve does not want Doug working on memory-fix tasks unless explicitly reassigned.',
  repeatability: 5,
  durability: 5,
  operationalValue: 5,
};

function scoreLabel(score: number) {
  if (score >= 13) return 'Promote now';
  if (score >= 9) return 'Keep in daily notes for now';
  return 'Probably ephemeral';
}

export default function ImproveMemoryToolkit() {
  const [dailyInputs, setDailyInputs] = useState(defaultDailyInputs);
  const [promotionDraft, setPromotionDraft] = useState(defaultPromotionDraft);

  const dailyPreview = useMemo(
    () => `# ${dailyInputs.date}\n\n- Decision: ${dailyInputs.decision}\n- Changed: ${dailyInputs.change}\n- Follow-up: ${dailyInputs.followUp}\n- Avoid next time: ${dailyInputs.avoid}`,
    [dailyInputs],
  );

  const longTermPreview = useMemo(
    () => `## Durable working rule\n\n- ${promotionDraft.note}\n- Why it belongs here: high repeat value, likely to affect future delegation, and easy to forget if left buried in daily logs.`,
    [promotionDraft.note],
  );

  const promotionScore = promotionDraft.repeatability + promotionDraft.durability + promotionDraft.operationalValue;

  return (
    <section className="sectionStack">
      <div className="grid2">
        <div className="sectionCard">
          <div className="kicker">Outcome</div>
          <h2 style={{ marginTop: 0 }}>Build a memory system that stays useful under real workload</h2>
          <p className="subtle">
            This first pass turns the placeholder into a practical operator guide: what to capture, what to promote,
            how to review it, and how to avoid turning memory into a junk drawer.
          </p>
          <div className="badgeRow" style={{ marginTop: 16 }}>
            <span className="badge good">Real draft</span>
            <span className="badge info">Interactive examples</span>
            <span className="badge warn">Ready for Steve’s opinions later</span>
          </div>
        </div>

        <div className="sectionCard">
          <div className="kicker">Reader promise</div>
          <ul className="list">
            {improveMemoryQuickWins.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid3">
        {improveMemoryPhilosophy.map((item) => (
          <article className="sectionCard" key={item.title}>
            <div className="kicker">Memory philosophy</div>
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
          <div className="kicker">Daily logging habits</div>
          <p className="subtle">
            Daily notes should be light enough to keep. Capture the decisions, changes, follow-ups, and mistakes that will
            matter tomorrow. Skip the minute-by-minute play-by-play.
          </p>

          <div className="formGrid" style={{ marginTop: 18 }}>
            <label className="fieldLabel">
              <span>Date</span>
              <input
                className="fieldInput"
                value={dailyInputs.date}
                onChange={(event) => setDailyInputs((current) => ({ ...current, date: event.target.value }))}
              />
            </label>
            <label className="fieldLabel">
              <span>Decision</span>
              <textarea
                className="fieldInput fieldTextarea"
                value={dailyInputs.decision}
                onChange={(event) => setDailyInputs((current) => ({ ...current, decision: event.target.value }))}
              />
            </label>
            <label className="fieldLabel">
              <span>What changed</span>
              <textarea
                className="fieldInput fieldTextarea"
                value={dailyInputs.change}
                onChange={(event) => setDailyInputs((current) => ({ ...current, change: event.target.value }))}
              />
            </label>
            <label className="fieldLabel">
              <span>Follow-up</span>
              <textarea
                className="fieldInput fieldTextarea"
                value={dailyInputs.followUp}
                onChange={(event) => setDailyInputs((current) => ({ ...current, followUp: event.target.value }))}
              />
            </label>
            <label className="fieldLabel">
              <span>What to avoid next time</span>
              <textarea
                className="fieldInput fieldTextarea"
                value={dailyInputs.avoid}
                onChange={(event) => setDailyInputs((current) => ({ ...current, avoid: event.target.value }))}
              />
            </label>
          </div>
        </div>

        <div className="sectionCard">
          <div className="kicker">Sample daily note output</div>
          <p className="subtle">The preview below shows the target shape: short, specific, and biased toward future usefulness.</p>
          <pre className="fileBlock">{dailyPreview}</pre>
          <div className="kicker" style={{ marginTop: 18 }}>Example patterns</div>
          <ul className="list">
            {improveMemorySampleEntries.daily.map((item) => (
              <li key={item}><strong>{item.split(':')[0]}:</strong>{item.includes(':') ? ` ${item.split(':').slice(1).join(':').trim()}` : ''}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid2">
        <div className="sectionCard">
          <div className="kicker">What belongs in long-term memory</div>
          <div className="tableLike">
            {improveMemoryLongTermRules.map((item) => (
              <div className="rowItem" key={item.title}>
                <div>
                  <strong>{item.title}</strong>
                </div>
                <div className="subtle">Keep: {item.keep}</div>
                <div className="subtle">Leave out: {item.avoid}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="sectionCard">
          <div className="kicker">Promotion rules</div>
          <p className="subtle">
            Promotion is a filtering decision, not a reward. If something will change future behavior, reduce repeated explanation,
            or represent a stable preference, it should graduate.
          </p>

          <div className="formGrid compactForm" style={{ marginTop: 18 }}>
            <label className="fieldLabel">
              <span>Candidate memory</span>
              <textarea
                className="fieldInput fieldTextarea"
                value={promotionDraft.note}
                onChange={(event) => setPromotionDraft((current) => ({ ...current, note: event.target.value }))}
              />
            </label>
            <label className="fieldLabel">
              <span>Repeatability ({promotionDraft.repeatability}/5)</span>
              <input
                className="fieldRange"
                type="range"
                min={1}
                max={5}
                value={promotionDraft.repeatability}
                onChange={(event) => setPromotionDraft((current) => ({ ...current, repeatability: Number(event.target.value) }))}
              />
            </label>
            <label className="fieldLabel">
              <span>Durability ({promotionDraft.durability}/5)</span>
              <input
                className="fieldRange"
                type="range"
                min={1}
                max={5}
                value={promotionDraft.durability}
                onChange={(event) => setPromotionDraft((current) => ({ ...current, durability: Number(event.target.value) }))}
              />
            </label>
            <label className="fieldLabel">
              <span>Operational value ({promotionDraft.operationalValue}/5)</span>
              <input
                className="fieldRange"
                type="range"
                min={1}
                max={5}
                value={promotionDraft.operationalValue}
                onChange={(event) => setPromotionDraft((current) => ({ ...current, operationalValue: Number(event.target.value) }))}
              />
            </label>
          </div>

          <div className="badgeRow" style={{ marginTop: 18 }}>
            <span className="badge info">Score {promotionScore}/15</span>
            <span className={`badge ${promotionScore >= 13 ? 'good' : promotionScore >= 9 ? 'warn' : 'danger'}`}>{scoreLabel(promotionScore)}</span>
          </div>

          <div className="grid2" style={{ marginTop: 18 }}>
            {improveMemoryPromotionSignals.map((item) => (
              <div className="callout" key={item.title}>
                <strong>{item.title}:</strong> {item.detail}
              </div>
            ))}
          </div>

          <div className="kicker" style={{ marginTop: 18 }}>Promoted entry preview</div>
          <pre className="fileBlock">{longTermPreview}</pre>
        </div>
      </div>

      <div className="grid3">
        {improveMemoryCleanupRhythms.map((item) => (
          <div className="sectionCard" key={item.cadence}>
            <div className="kicker">{item.cadence}</div>
            <h3 style={{ marginTop: 0 }}>{item.title}</h3>
            <p className="subtle">{item.detail}</p>
            <ul className="list">
              {item.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid3">
        {improveMemoryExamples.map((item) => (
          <article className="sectionCard" key={item.label}>
            <div className="badgeRow" style={{ marginBottom: 12 }}>
              <span className={`badge ${item.tone}`}>{item.label}</span>
            </div>
            <h3 style={{ marginTop: 0 }}>{item.title}</h3>
            <p className="subtle">{item.detail}</p>
            <pre className="fileBlock">{item.example}</pre>
          </article>
        ))}
      </div>

      <div className="grid2">
        <div className="sectionCard">
          <div className="kicker">Implementation checklist</div>
          <ul className="list">
            {improveMemoryChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="sectionCard">
          <div className="kicker">Source-material slots still open</div>
          <ul className="list">
            <li><strong>Promotion edge cases:</strong> Steve’s strongest opinions on what should never hit MEMORY.md.</li>
            <li><strong>Favorite examples:</strong> actual before/after cleanup snippets from real OpenClaw usage.</li>
            <li><strong>Cleanup cadence preference:</strong> whether weekly review is strict or flexible.</li>
            <li><strong>Public tone:</strong> how blunt he wants the guide to be about memory bloat and over-capture.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
