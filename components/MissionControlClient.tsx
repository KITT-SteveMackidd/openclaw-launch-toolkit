'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  faqItems,
  heroStats,
  kanbanColumns,
  kanbanSeedTasks,
  launchPrinciples,
  launchSequence,
  monetization,
  mvpBacklog,
  productSections,
  toolkitDocs,
} from '@/lib/data';

type TabKey = 'offer' | 'pricing' | 'backlog' | 'kanban' | 'docs';

const tabs: Array<{ key: TabKey; label: string }> = [
  { key: 'offer', label: 'Launch Site' },
  { key: 'pricing', label: 'Pricing Model' },
  { key: 'backlog', label: 'Backlog' },
  { key: 'kanban', label: 'Kanban' },
  { key: 'docs', label: 'Toolkit Slots' },
];

const validTabs = new Set<TabKey>(tabs.map((tab) => tab.key));
const buyHref = '#pricing';

function toneClass(tone: string) {
  return `badge ${tone}`;
}

function priorityTone(priority: 'P0' | 'P1' | 'P2') {
  if (priority === 'P0') return 'danger';
  if (priority === 'P1') return 'warn';
  return 'info';
}

function columnTone(key: 'pending' | 'in-progress' | 'done') {
  if (key === 'done') return 'good';
  if (key === 'in-progress') return 'info';
  return 'warn';
}

function getTabFromHash(hash: string): TabKey {
  const candidate = hash.replace('#', '') as TabKey;
  return validTabs.has(candidate) ? candidate : 'offer';
}

export default function MissionControlClient() {
  const [activeTab, setActiveTab] = useState<TabKey>('offer');
  const [kanbanTasks, setKanbanTasks] = useState(kanbanSeedTasks);

  useEffect(() => {
    const applyHash = () => setActiveTab(getTabFromHash(window.location.hash));
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  const activeLabel = useMemo(() => tabs.find((tab) => tab.key === activeTab)?.label ?? 'Launch Site', [activeTab]);

  const selectTab = (tab: TabKey) => {
    setActiveTab(tab);
    window.location.hash = tab;
  };

  const moveTask = (taskId: string, direction: 'left' | 'right') => {
    const columnOrder = kanbanColumns.map((column) => column.key);
    setKanbanTasks((current) =>
      current.map((task) => {
        if (task.id !== taskId) return task;
        const currentIndex = columnOrder.indexOf(task.status);
        const nextIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
        const nextStatus = columnOrder[nextIndex];
        return nextStatus ? { ...task, status: nextStatus } : task;
      }),
    );
  };

  return (
    <main className="page appShell">
      <aside className="sidebar panel">
        <div>
          <div className="kicker">OpenClaw Launch Toolkit</div>
          <h1 className="sidebarTitle">Paid product launch</h1>
          <p className="subtle sidebarCopy">
            A lean launch site and execution board for shipping a one-time paid OpenClaw toolkit bundle with three practical documents.
          </p>
        </div>

        <div className="sidebarNav">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`sidebarTab ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => selectTab(tab.key)}
              type="button"
              aria-pressed={activeTab === tab.key}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="sidebarFooter">
          <div className="badgeRow">
            <span className="badge good">One-time paid bundle</span>
            <span className="badge info">3 toolkit docs</span>
          </div>
        </div>
      </aside>

      <section className="mainView">
        <section className="hero panel heroMain">
          <div className="kicker">{activeLabel}</div>
          <h1 className="mainTitle">Launch OpenClaw faster with a paid toolkit, not more theory.</h1>
          <p className="subtle" style={{ fontSize: '1.05rem', maxWidth: 960 }}>
            This project now aims at the smallest sellable version of <strong>OpenClaw Launch Toolkit</strong>: a one-time paid bundle built around three practical documents — Get Started, Improve Memory, and Multi-Agent Routing — plus the sales page and launch plan needed to get the first buyers.
          </p>
          <div className="badgeRow" style={{ marginTop: 18 }}>
            <span className="badge good">Paid toolkit first</span>
            <span className="badge warn">Speed to launch</span>
            <span className="badge info">Optional upsell later</span>
          </div>
          <div className="ctaRow">
            <a className="ctaButton primary" href={buyHref}>Reserve pricing slot</a>
            <button className="ctaButton secondary" type="button" onClick={() => selectTab('docs')}>View toolkit slots</button>
          </div>
        </section>

        {activeTab === 'offer' && (
          <section className="sectionStack">
            <div className="grid2">
              {heroStats.map((stat) => (
                <div className="statCard" key={stat.label}>
                  <div className="statLabel">{stat.label}</div>
                  <div className="statValue">{stat.value}</div>
                  <div className={toneClass(stat.tone)}>{stat.tone.toUpperCase()}</div>
                  <p className="subtle" style={{ marginTop: 12 }}>{stat.note}</p>
                </div>
              ))}
            </div>

            <div className="grid3">
              <div className="sectionCard">
                <div className="kicker">What is included</div>
                <ul className="list">
                  {toolkitDocs.map((doc) => <li key={doc.slug}><strong>{doc.name}:</strong> {doc.outcome}</li>)}
                </ul>
              </div>

              <div className="sectionCard">
                <div className="kicker">Product rules</div>
                <ul className="list">
                  {launchPrinciples.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>

              <div className="sectionCard">
                <div className="kicker">Required page sections</div>
                <ul className="list">
                  {productSections.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>

            <div className="grid3">
              {toolkitDocs.map((doc) => (
                <article className="sectionCard" key={doc.slug}>
                  <div className="badgeRow" style={{ marginBottom: 12 }}>
                    <span className="badge info">Toolkit document</span>
                    <span className="badge warn">{doc.status}</span>
                  </div>
                  <h3 style={{ marginTop: 0 }}>{doc.name}</h3>
                  <p className="subtle">{doc.positioning}</p>
                  <div className="kicker" style={{ marginTop: 18 }}>Placeholder outline</div>
                  <ul className="list">
                    {doc.placeholderSections.map((section) => <li key={section}>{section}</li>)}
                  </ul>
                </article>
              ))}
            </div>

            <div className="sectionCard">
              <div className="kicker">FAQ</div>
              <div className="faqStack">
                {faqItems.map((item) => (
                  <div className="faqItem" key={item.question}>
                    <h3 style={{ margin: 0 }}>{item.question}</h3>
                    <p className="subtle" style={{ marginBottom: 0 }}>{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'pricing' && (
          <section className="sectionStack">
            <div className="grid2">
              <div className="sectionCard">
                <div className="kicker">Recommendation</div>
                <h2 style={{ marginTop: 0 }}>{monetization.recommendation}</h2>
                <ul className="list">
                  {monetization.coreOffer.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div className="sectionCard">
                <div className="kicker">Why this model fits</div>
                <ul className="list">
                  {monetization.why.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>

            <div className="grid2">
              <div className="sectionCard">
                <div className="kicker">Optional upsells</div>
                <ul className="list">
                  {monetization.upsells.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div className="sectionCard">
                <div className="kicker">Launch sequence</div>
                <ul className="list">
                  {launchSequence.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'backlog' && (
          <section className="sectionStack contentCard tableLike">
            <div className="rowItem rowHead backlogGrid">
              <div>Item</div>
              <div>Area</div>
              <div>Priority</div>
              <div>Owner</div>
              <div>Timeline</div>
              <div>Outcome</div>
            </div>
            {mvpBacklog.map((item) => (
              <div className="rowItem backlogGrid" key={item.title}>
                <div>
                  <strong>{item.title}</strong>
                  <div className="subtle" style={{ marginTop: 8 }}>Dependency: {item.dependency}</div>
                </div>
                <div>{item.area}</div>
                <div><span className={toneClass(priorityTone(item.priority))}>{item.priority}</span></div>
                <div>{item.owner}</div>
                <div>
                  <div>{item.timeline}</div>
                  <div className="subtle" style={{ marginTop: 8 }}>{item.status}</div>
                </div>
                <div className="subtle">{item.outcome}</div>
              </div>
            ))}
          </section>
        )}

        {activeTab === 'kanban' && (
          <section className="sectionStack">
            <div className="sectionCard kanbanIntro">
              <div>
                <div className="kicker">Execution board</div>
                <h3 className="kanbanTitle">Small work items that directly support launch</h3>
                <p className="subtle kanbanCopy">
                  Every card here is intentionally narrow. The goal is to move from internal planning to a page, a price, a checkout link, and finished toolkit content as fast as possible.
                </p>
              </div>
              <div className="badgeRow">
                <span className="badge warn">Launch only</span>
                <span className="badge info">Small executable tasks</span>
                <span className="badge good">No dashboard theater</span>
              </div>
            </div>

            <div className="kanbanBoard">
              {kanbanColumns.map((column) => {
                const tasks = kanbanTasks.filter((task) => task.status === column.key);

                return (
                  <section className="kanbanColumn" key={column.key}>
                    <div className="kanbanColumnHeader">
                      <div>
                        <div className="kanbanColumnTitleRow">
                          <h3 className="kanbanColumnTitle">{column.title}</h3>
                          <span className={toneClass(columnTone(column.key))}>{tasks.length} cards</span>
                        </div>
                        <p className="subtle kanbanColumnCopy">{column.description}</p>
                      </div>
                    </div>

                    <div className="kanbanTaskStack">
                      {tasks.map((task) => (
                        <article className="kanbanTaskCard" key={task.id}>
                          <div className="kanbanTaskTop">
                            <span className={toneClass(priorityTone(task.priority))}>{task.priority}</span>
                            <span className="badge">{task.track}</span>
                          </div>

                          <h4 className="kanbanTaskTitle">{task.title}</h4>
                          <p className="subtle kanbanTaskDetail">{task.detail}</p>

                          <div className="kanbanMetaGrid">
                            <div>
                              <div className="kanbanMetaLabel">Owner</div>
                              <div>{task.owner}</div>
                            </div>
                            <div>
                              <div className="kanbanMetaLabel">Area</div>
                              <div>{task.area}</div>
                            </div>
                          </div>

                          <div className="callout kanbanCallout">
                            <strong>Next step:</strong> {task.nextStep}
                          </div>

                          <div className="subtle" style={{ marginTop: 10, marginBottom: 12 }}>
                            Source backlog item: {task.sourceBacklogTitle}
                          </div>

                          <div className="kanbanTaskActions">
                            <button
                              className="kanbanMoveButton"
                              disabled={task.status === 'pending'}
                              onClick={() => moveTask(task.id, 'left')}
                              type="button"
                            >
                              Move left
                            </button>
                            <button
                              className="kanbanMoveButton"
                              disabled={task.status === 'done'}
                              onClick={() => moveTask(task.id, 'right')}
                              type="button"
                            >
                              Move right
                            </button>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </section>
        )}

        {activeTab === 'docs' && (
          <section className="sectionStack grid3">
            {toolkitDocs.map((doc) => (
              <div className="sectionCard" key={doc.slug}>
                <div className="kicker">{doc.name}</div>
                <p className="subtle">{doc.outcome}</p>
                <div className="fileBlock">docs/toolkits/{doc.slug}.md</div>
                <ul className="list" style={{ marginTop: 16 }}>
                  {doc.placeholderSections.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}

        <div className="footer">Built for Steve — sell the toolkit, collect feedback, then deepen the product.</div>
      </section>
    </main>
  );
}
