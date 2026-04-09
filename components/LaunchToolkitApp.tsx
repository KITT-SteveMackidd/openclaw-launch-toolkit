const buyHref = '/checkout';
const sampleHref = '/docs/get-started-vps-setup.pdf';
const toolkitPrice = '$29';
const siteUrl = 'https://openclaw-launch-toolkit.vercel.app';
const productImage = '/assets/launch-toolkit-hero.jpg';

const signalPoints = [
  'Built for marketers, sales operators, founders, assistants, and solo business users who want results, not setup chaos.',
  'Shows you how to use OpenClaw for practical work, even if you are not confident with computers.',
  'Gives you a clearer path from setup confusion to useful day-to-day results.',
] as const;

const painPoints = [
  'Too many tools, too much jargon',
  'No clear starting point',
  'Too much setup, not enough useful output',
  'Results feel inconsistent or random',
  'One small issue can make the whole thing feel intimidating',
] as const;

const useCases = [
  {
    title: 'Draft outreach and follow-ups faster',
    detail: 'Turn rough points into clearer emails, messages, and follow-ups.',
  },
  {
    title: 'Summarize calls, notes, and research',
    detail: 'Get clean summaries you can reuse in updates, briefs, or next steps.',
  },
  {
    title: 'Repurpose ideas into content',
    detail: 'Take one idea and turn it into posts, emails, outlines, or campaign drafts.',
  },
  {
    title: 'Organize repeated work into a simple workflow',
    detail: 'Stop starting from scratch every time you need help with the same kind of task.',
  },
  {
    title: 'Get more consistent output',
    detail: 'Learn how to make your AI help feel more useful, reliable, and less random.',
  },
] as const;

const toolkitSections = [
  {
    title: 'Get Started Guide for OpenClaw',
    description: 'Set things up clearly and simply.',
    bullets: [
      'Guided help for getting started with OpenClaw',
      'Plain-language basics without feeling lost',
      'A path to your first useful result faster',
    ],
  },
  {
    title: 'Improve Memory Guide for OpenClaw',
    description: 'Make your AI help more consistent and useful.',
    bullets: [
      'Reduce confusion and dead ends',
      'Improve output quality for everyday work',
      'Make your setup feel more dependable',
    ],
  },
  {
    title: 'Multi-Agent Routing Guide for OpenClaw',
    description: 'Use the right kind of help for the right kind of task.',
    bullets: [
      'Practical guidance for handling different kinds of work',
      'A clearer way to think about repeated tasks',
      'Less mess, more purpose in how you use OpenClaw',
    ],
  },
] as const;

const deliverySteps = [
  {
    title: 'Follow the guided setup',
    detail: 'Start with a clear path instead of trying to figure everything out from scattered advice.',
  },
  {
    title: 'Use the examples and walkthroughs',
    detail: 'Apply the toolkit to practical work like outreach, notes, summaries, and content tasks.',
  },
  {
    title: 'Build your first useful workflow',
    detail: 'Go from “I think this could help” to a working setup you can actually use again.',
  },
] as const;

const fitPoints = [
  'A marketer who wants help with content, outreach, research, or campaign prep.',
  'A sales operator who wants clearer follow-ups, summaries, and lead research help.',
  'A founder or solo business owner who wants AI leverage without deep technical setup.',
  'An assistant or operator who wants faster, more repeatable work.',
  'A consultant or technical enabler helping less technical people use AI productively.',
] as const;

const notForPoints = [
  'You want a purely developer-first reference guide.',
  'You already have an advanced OpenClaw workflow and do not need guided setup.',
  'You want a done-for-you service instead of a toolkit you can follow yourself.',
] as const;

const faqItems = [
  {
    question: 'Do I need to be technical to use this?',
    answer: 'No. This toolkit is written for people who want useful results without needing deep technical knowledge.',
  },
  {
    question: 'Is this only for marketers?',
    answer: 'No. It is especially well-suited to marketers, sales operators, founders, assistants, and solo business users, but the guidance is useful for anyone who wants a more practical way to use OpenClaw.',
  },
  {
    question: 'What do I actually get?',
    answer: 'You get the paid toolkit materials, organized to help you get started, improve your results, and use OpenClaw more effectively for real work.',
  },
  {
    question: 'Will this help if I am not confident with computers?',
    answer: 'Yes. The toolkit is designed to make the process clearer, less intimidating, and more useful.',
  },
  {
    question: 'Is this for OpenClaw only?',
    answer: 'Yes. This toolkit is specifically designed to help you get more value out of OpenClaw.',
  },
  {
    question: 'Will this help me with marketing and sales workflows?',
    answer: 'Yes. That is one of the strongest use cases for this beginner-focused version of the toolkit.',
  },
  {
    question: 'How long will it take to get value from it?',
    answer: 'The goal is to help you reach a real first win quickly, without wasting time on confusing setup.',
  },
  {
    question: 'Will I get updates?',
    answer: 'Small fixes and practical improvements can be added over time as the toolkit evolves.',
  },
  {
    question: 'Is support included if I get stuck?',
    answer: 'The toolkit is built to be self-serve and beginner-friendly. If support options expand later, they can be added separately.',
  },
] as const;

export default function LaunchToolkitApp() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'OpenClaw Launch Toolkit',
    description:
      'A paid OpenClaw toolkit with beginner-friendly guides for setup, better AI results, and practical workflow routing for real business work.',
    brand: {
      '@type': 'Brand',
      name: 'OpenClaw',
    },
    image: `${siteUrl}${productImage}`,
    url: siteUrl,
    offers: {
      '@type': 'Offer',
      price: '29',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${siteUrl}${buyHref}`,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <main className="landingPage">
      <section className="heroSection">
        <div className="heroCopy">
          <div className="eyebrow">OpenClaw Launch Toolkit</div>
          <h1>Get practical AI help with OpenClaw.</h1>
          <p className="heroLead">
            OpenClaw Launch Toolkit is a guided, paid toolkit that shows you how to set up and use OpenClaw for real business tasks like drafting outreach, summarizing calls, turning notes into follow-ups, and creating content faster, even if you are not confident with computers.
          </p>
          <p className="heroSublead">
            This beginner OpenClaw guide helps non-technical users get useful work done with less setup confusion, more confidence, and a clearer path to repeatable workflows.
          </p>
          <div className="ctaRow">
            <a className="button primary" href={buyHref}>Get the toolkit</a>
            <a className="button secondary" href={sampleHref} target="_blank" rel="noreferrer">See what&apos;s inside</a>
          </div>
          <div className="heroMeta">
            <span>Beginner-first guidance</span>
            <span>{toolkitPrice} one-time</span>
            <span>Built for real business tasks</span>
          </div>
        </div>

        <div className="heroVisual card">
          <img src="/assets/launch-toolkit-hero.jpg" alt="OpenClaw Launch Toolkit hero illustration" className="heroArtwork heroPhoto" />
          <div className="visualCaption">
            <strong>What you get:</strong> a guided toolkit for getting OpenClaw useful faster, with examples, walkthroughs, and practical workflows for real business work.
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

      <section className="sectionBlock">
        <div className="sectionIntro narrow">
          <div className="eyebrow">Why this exists</div>
          <h2>AI sounds useful, until you try to set it up.</h2>
          <p>
            Most people do not need more AI hype. They need something that actually helps with day-to-day work. This toolkit is built for people who have thought, “This probably could help me, but I do not know where to begin.”
          </p>
        </div>
        <div className="stepsGrid">
          {painPoints.map((point, index) => (
            <article className="card stepCard" key={point}>
              <div className="stepNumber">0{index + 1}</div>
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sectionBlock">
        <div className="sectionIntro">
          <div className="eyebrow">Practical outcomes</div>
          <h2>What you can do with OpenClaw</h2>
          <p>
            This toolkit is designed to help you turn OpenClaw into something useful for real work, not just something interesting to experiment with.
          </p>
        </div>
        <div className="guideGrid">
          {useCases.map((item) => (
            <article className="card guideCard" key={item.title}>
              <h3>{item.title}</h3>
              <p className="guideOutcome">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sectionBlock">
        <div className="sectionIntro">
          <div className="eyebrow">What&apos;s inside</div>
          <h2>What&apos;s inside the OpenClaw Launch Toolkit</h2>
          <p>
            You are not buying theory. You are getting guided help that makes OpenClaw easier to use and easier to trust in everyday work. The toolkit includes three step-by-step guides: a Get Started guide for setting up OpenClaw, an Improve Memory guide for getting more consistent results, and a Multi-Agent Routing guide for choosing the right workflow for different tasks.
          </p>
        </div>
        <div className="guideGrid">
          {toolkitSections.map((section) => (
            <article className="card guideCard" key={section.title}>
              <div className="guideTag">Included</div>
              <h3>{section.title}</h3>
              <p className="guideOutcome">{section.description}</p>
              <ul>
                {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="sectionIntro narrow">
          <p>
            Under the hood, the toolkit is grounded in the real setup and workflow decisions that make AI systems useful over time, but the material stays clear and usable for beginners.
          </p>
        </div>
      </section>

      <section className="sectionBlock" id="how-it-works">
        <div className="sectionIntro narrow">
          <div className="eyebrow">How it works</div>
          <h2>How the OpenClaw toolkit helps beginners get started</h2>
          <p>The goal is not to make you technical. The goal is to make OpenClaw useful.</p>
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

      <section className="sectionBlock bestFitSection">
        <div className="card fitCard">
          <div className="eyebrow">Who it&apos;s for</div>
          <h2>Who this OpenClaw toolkit is for</h2>
          <ul>
            {fitPoints.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="muted"><strong>This is probably not for you if:</strong></p>
          <ul>
            {notForPoints.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="card bestFitVisual">
          <img src="/assets/launch-toolkit-best-fit.jpg" alt="OpenClaw Launch Toolkit best fit illustration" className="bestFitImage" />
        </div>
      </section>

      <section className="sectionBlock" id="pricing">
        <div className="sectionIntro">
          <div className="eyebrow">Get the toolkit</div>
          <h2>A practical, guided path to using OpenClaw for real work</h2>
          <p>
            Buy OpenClaw Launch Toolkit and get beginner-friendly guidance, practical examples, and the full toolkit documents in one simple purchase.
          </p>
        </div>

        <div className="pricingGrid">
          <article className="card pricingCard">
            <div className="pricingBadge">Free sample</div>
            <h3>Try the free Setup Guide first</h3>
            <div className="price">Free</div>
            <p className="muted">A low-risk way to see the teaching style and structure before you buy.</p>
            <ul>
              <li>Beginner-friendly sample guide</li>
              <li>See how the toolkit explains setup in plain English</li>
              <li>Good first step if you want to check fit before purchasing</li>
            </ul>
            <a className="button secondary" href={sampleHref} target="_blank" rel="noreferrer">
              View sample
            </a>
          </article>

          <article className="card pricingCard featured">
            <div className="pricingBadge">One-time price</div>
            <h3>OpenClaw Launch Toolkit</h3>
            <div className="price">{toolkitPrice}</div>
            <p className="muted">Simple pricing with no subscription and no confusing tiers.</p>
            <ul>
              <li>Get Started Guide for OpenClaw</li>
              <li>Improve Memory Guide for OpenClaw</li>
              <li>Multi-Agent Routing Guide for OpenClaw</li>
              <li>Beginner-friendly guidance and structure</li>
              <li>Practical examples for real tasks</li>
              <li>Small fixes and practical improvements over time</li>
            </ul>
            <a className="button primary" href={buyHref}>
              Get the toolkit
            </a>
          </article>
        </div>
      </section>

      <section className="sectionBlock faqSection">
        <div className="sectionIntro narrow">
          <div className="eyebrow">Frequently asked questions</div>
          <h2>Frequently asked questions about OpenClaw Launch Toolkit</h2>
        </div>
        <div className="faqList">
          {faqItems.map((item) => (
            <article className="card faqCard" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="finalCta card">
        <div>
          <div className="eyebrow">Ready to start</div>
          <h2>If you want AI help without the technical headache, start here.</h2>
          <p>
            OpenClaw Launch Toolkit gives you a clearer, more practical path to using OpenClaw for real business work. Made for people who want results, not more complexity.
          </p>
        </div>
        <div className="ctaRow">
          <a className="button primary" href={buyHref}>Get the toolkit</a>
          <a className="button secondary" href={sampleHref} target="_blank" rel="noreferrer">See what&apos;s inside</a>
        </div>
      </section>
    </main>
  );
}
