import { faqItems, pricingTiers } from '@/lib/data';

const buyHref = '/checkout';
const sampleHref = '/docs/get-started-vps-setup.pdf';

const paidToolkitGuides = [
  {
    name: 'Improve Memory PDF',
    description: 'Helps your OpenClaw assistant remember the useful stuff and stop hanging onto junk.',
    bullets: [
      'What to save and what to ignore',
      'How to keep daily notes simple',
      'How to turn scattered notes into useful long-term memory',
    ],
  },
  {
    name: 'Multi-Agent Routing PDF',
    description: 'Shows you how to decide which jobs your main assistant should do and which jobs should be handed off.',
    bullets: [
      'Simple delegation rules',
      'Clear handoff examples',
      'How to avoid agent confusion and wasted work',
    ],
  },
] as const;

const deliverySteps = [
  {
    title: 'Try the free setup guide first',
    detail: 'Open the Setup PDF and follow the beginner-friendly steps before you spend anything.',
  },
  {
    title: 'Buy the full toolkit for $29 one-time',
    detail: 'Use Stripe test checkout to unlock the other PDFs when you want help with memory, delegation, and safer day-to-day operation.',
  },
  {
    title: 'Open your gated download page',
    detail: 'After payment is confirmed, your private download page gives you access to the paid PDFs.',
  },
] as const;

const fitPoints = [
  'You want plain-English instructions instead of piecing things together from scattered chats and docs.',
  'You want a safer OpenClaw setup that keeps control private and reduces avoidable mistakes.',
  'You would rather buy one practical toolkit than pay for vague advice or ongoing hand-holding.',
] as const;

const signalPoints = [
  'Made for beginners who want clear instructions and a calmer setup path.',
  'The free Setup PDF lets you sample the teaching style before you buy.',
  'The paid toolkit focuses on private control, safer operation, and practical everyday use.',
] as const;

const securityPoints = [
  'Shows safer setup habits in plain language so beginners can protect their system without becoming security experts.',
  'Explains private-control basics like reducing public exposure, pairing carefully, and keeping access paths simple.',
  'Turns security into peace of mind: fewer risky shortcuts, fewer surprises, and more confidence using OpenClaw day to day.',
] as const;

export default function LaunchToolkitApp() {
  return (
    <main className="landingPage">
      <section className="heroSection">
        <div className="heroCopy">
          <div className="eyebrow">OpenClaw Launch Toolkit</div>
          <h1>Set up OpenClaw the safer, simpler way.</h1>
          <p className="heroLead">
            This PDF toolkit helps beginners get OpenClaw running, keep control private, and use it with more confidence.
          </p>
          <p className="heroSublead">
            Start with the free Setup PDF. When you want the full toolkit, unlock the paid PDFs for <strong>$29 one-time</strong>.
          </p>
          <div className="ctaRow">
            <a className="button primary" href={buyHref}>Buy the $29 toolkit</a>
            <a className="button secondary" href={sampleHref} target="_blank" rel="noreferrer">Open free Setup PDF</a>
          </div>
          <div className="heroMeta">
            <span>Free Setup PDF included</span>
            <span>$29 one-time paid toolkit</span>
            <span>Security-first beginner guidance</span>
          </div>
        </div>

        <div className="heroVisual card">
          <img src="/assets/launch-toolkit-hero.jpg" alt="OpenClaw Launch Toolkit hero illustration" className="heroArtwork heroPhoto" />
          <div className="visualCaption">
            <strong>What you are buying:</strong> a practical PDF toolkit for safer setup, better memory habits,
            and cleaner multi-agent delegation.
          </div>
        </div>
      </section>

      <section className="signalStrip card">
        {signalPoints.map((point) => (
          <div key={point} className="signalItem">
            <span className="signalDot" />
            <p>{point}</p>
          </div>
        ))}
      </section>

      <section className="sectionBlock" id="toolkit">
        <div className="sectionIntro">
          <div className="eyebrow">What you get</div>
          <h2>The complete toolkit, broken down clearly</h2>
          <p>
            Start with the free Setup PDF, then unlock the paid guides for memory and multi-agent workflows when you want the full toolkit.
          </p>
        </div>

        <div className="guideGrid">
          <article className="card guideCard">
            <div className="guideTag">Free sample</div>
            <h3>Setup PDF</h3>
            <p className="guideOutcome">A beginner-friendly guide that walks you through getting OpenClaw running step by step.</p>
            <p className="muted">Use this first to sample the toolkit before you buy anything.</p>
            <ul>
              <li>Written for people with limited computer experience</li>
              <li>Explains the setup path in plain English</li>
              <li>Introduces safer defaults without turning the guide into a security lecture</li>
            </ul>
            <div className="guideActions">
              <a className="textLink" href={sampleHref} target="_blank" rel="noreferrer">Open free PDF</a>
              <span className="guideStatus">Free</span>
            </div>
          </article>

          {paidToolkitGuides.map((doc) => (
            <article className="card guideCard" key={doc.name}>
              <div className="guideTag">Paid toolkit</div>
              <h3>{doc.name}</h3>
              <p className="guideOutcome">{doc.description}</p>
              <p className="muted">Included in the paid toolkit: $29 one-time.</p>
              <ul>
                {doc.bullets.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="guideActions">
                <a className="textLink" href={buyHref}>Buy to unlock</a>
                <span className="guideStatus">Paid</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sectionBlock bestFitSection">
        <div className="card fitCard">
          <div className="eyebrow">Best fit</div>
          <h2>Good for people who want help, not complexity</h2>
          <ul>
            {fitPoints.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="card bestFitVisual">
          <img src="/assets/launch-toolkit-best-fit.jpg" alt="OpenClaw Launch Toolkit best fit illustration" className="bestFitImage" />
        </div>
      </section>

      <section className="sectionBlock">
        <div className="sectionIntro narrow">
          <div className="eyebrow">Why the security angle matters</div>
          <h2>Safer setup should feel reassuring, not intimidating</h2>
          <p>
            The toolkit is written to help beginners make better choices without drowning in jargon. The goal is simple: keep OpenClaw useful while avoiding unnecessary exposure and confusion.
          </p>
        </div>
        <div className="stepsGrid">
          {securityPoints.map((point, index) => (
            <article className="card stepCard" key={point}>
              <div className="stepNumber">0{index + 1}</div>
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sectionBlock" id="how-it-works">
        <div className="sectionIntro narrow">
          <div className="eyebrow">How it works</div>
          <h2>Simple path: try the sample, then unlock the full toolkit</h2>
        </div>
        <div className="stepsGrid">
          {deliverySteps.map((step, index) => (
            <article className="card stepCard" key={step.title}>
              <div className="stepNumber">0{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sectionBlock" id="pricing">
        <div className="sectionIntro">
          <div className="eyebrow">Pricing</div>
          <h2>One clear offer: $29 one-time</h2>
          <p>
            The paid toolkit is a single one-time purchase. You get the two paid PDFs plus the free Setup PDF as your sample and starting point.
          </p>
        </div>

        <div className="pricingGrid">
          {pricingTiers.slice(0, 1).map((tier, index) => (
            <article className={`card pricingCard ${index === 0 ? 'featured' : ''}`} key={tier.name}>
              <div className="pricingBadge">One-time price</div>
              <h3>{tier.name}</h3>
              <div className="price">{tier.price}</div>
              <p className="muted">Simple, beginner-friendly pricing with no subscription and no confusing tiers.</p>
              <ul>
                <li>Includes the Improve Memory PDF</li>
                <li>Includes the Multi-Agent Routing PDF</li>
                <li>One-time purchase, no subscription</li>
              </ul>
              <a className="button primary" href={buyHref}>
                Continue to checkout
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="sectionBlock faqSection">
        <div className="sectionIntro narrow">
          <div className="eyebrow">FAQ</div>
          <h2>Plain answers before you buy</h2>
        </div>
        <div className="faqList">
          {faqItems.slice(0, 6).map((item) => (
            <article className="card faqCard" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="finalCta card">
        <div>
          <div className="eyebrow">Ready to start</div>
          <h2>Read the free Setup PDF now, then buy the toolkit when you want the rest.</h2>
          <p>
            Start with the free sample. If you want help with safer setup, better memory habits, and cleaner multi-agent work, the paid toolkit is ready as a simple one-time purchase.
          </p>
        </div>
        <div className="ctaRow">
          <a className="button primary" href={sampleHref} target="_blank" rel="noreferrer">Read the free Setup PDF</a>
          <a className="button secondary" href={buyHref}>Buy the $29 toolkit</a>
        </div>
      </section>
    </main>
  );
}
