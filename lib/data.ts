export type BacklogItem = {
  title: string;
  priority: 'P0' | 'P1' | 'P2';
  owner: string;
  timeline: string;
  status: 'Now' | 'Next' | 'Later';
  dependency: string;
  outcome: string;
  area: string;
};

export type KanbanColumnKey = 'pending' | 'in-progress' | 'done';

export type KanbanTask = {
  id: string;
  title: string;
  status: KanbanColumnKey;
  priority: 'P0' | 'P1' | 'P2';
  owner: string;
  track: 'Offer' | 'Product' | 'Docs' | 'GTM' | 'Build' | 'Ops';
  sourceBacklogTitle: string;
  detail: string;
  nextStep: string;
  area: string;
};

export type ToolkitDoc = {
  slug: string;
  name: string;
  positioning: string;
  outcome: string;
  status: string;
  placeholderSections: string[];
  highlights?: string[];
  filePath?: string;
  body?: string;
};

export type ImproveMemoryPhilosophyItem = {
  title: string;
  detail: string;
  rule: string;
};

export type ImproveMemoryLongTermRule = {
  title: string;
  keep: string;
  avoid: string;
};

export type ImproveMemoryPromotionSignal = {
  title: string;
  detail: string;
};

export type ImproveMemoryCleanupRhythm = {
  cadence: string;
  title: string;
  detail: string;
  steps: string[];
};

export type ImproveMemoryExample = {
  label: string;
  tone: 'good' | 'warn' | 'danger' | 'info';
  title: string;
  detail: string;
  example: string;
};

export type MultiAgentRoutingPrinciple = {
  title: string;
  detail: string;
  rule: string;
};

export type MultiAgentRoleCard = {
  title: string;
  bestFor: string;
  avoid: string;
};

export type MultiAgentTriageAxis = {
  title: string;
  detail: string;
};

export type MultiAgentHandoffField = {
  key: 'task' | 'success' | 'constraints' | 'artifacts';
  label: string;
};

export type MultiAgentPlaybook = {
  label: string;
  tone: 'good' | 'warn' | 'danger' | 'info';
  title: string;
  detail: string;
  steps: string[];
};

export type MultiAgentFailureMode = {
  title: string;
  detail: string;
  recovery: string;
};

export const heroStats = [
  {
    label: 'Launch target',
    value: 'First paid buyers',
    note: 'This page is designed to turn OpenClaw curiosity into a concrete one-time purchase.',
    tone: 'good',
  },
  {
    label: 'Core deliverables',
    value: '3 practical docs',
    note: 'Buyers get three focused implementation guides instead of a vague promise of future help.',
    tone: 'info',
  },
  {
    label: 'Pricing path',
    value: '$79 → $129',
    note: 'Anchor an early-buyer price, then step up once the docs and proof are stronger.',
    tone: 'warn',
  },
  {
    label: 'Build rule',
    value: 'Ship the useful version',
    note: 'A clear offer, checkout, and credible deliverables beat another round of internal planning.',
    tone: 'danger',
  },
] as const;

export const audienceSegments = [
  {
    title: 'Best fit',
    points: [
      'You already care about OpenClaw and want a faster path from setup to useful workflows.',
      'You prefer practical docs, examples, and templates over exploratory consulting calls.',
      'You want a bundle you can buy once, use immediately, and adapt to your own workspace.',
    ],
  },
  {
    title: 'Not for',
    points: [
      'People looking for done-for-you agency work or a generic “AI transformation” package.',
      'Anyone who expects a polished SaaS dashboard instead of tactical operator guides.',
      'Teams that need live implementation support before they can get value from written guidance.',
    ],
  },
] as const;

export const launchPrinciples = [
  'Sell a concrete toolkit, not “AI consulting” or a vague transformation promise.',
  'Optimize for speed to first sale: checkout link, crisp copy, and visible deliverables.',
  'Treat the three documents as the product foundation, even before the full content is written.',
  'Use a one-time purchase to reduce friction, then layer an optional upsell for updates or implementation help.',
];

export const proofPoints = [
  'Built around real OpenClaw workflows instead of generic AI productivity advice.',
  'Structured so Steve can drop in source material fast without rethinking the offer.',
  'Focused on launch readiness now: offer, pricing, objections, and buyer-facing deliverables.',
] as const;

export const launchSequence = [
  'Day 1: finalize offer, page structure, pricing, and document placeholders.',
  'Day 2: add checkout link, tighten buyer-facing copy, and prepare one proof asset or screenshot.',
  'Day 3: draft the first version of Get Started and package delivery assets.',
  'Day 4: publish, send the page to warm prospects, and capture objections from real conversations.',
  'Day 5+: finish the other two docs, refine pricing, and test a light upsell.',
];

export const toolkitDocs: ToolkitDoc[] = [
  {
    slug: 'get-started',
    name: 'Get Started',
    positioning: 'Fast-track a new OpenClaw user from “installed” to “actually useful.”',
    outcome: 'A guided setup path, default files, first workflows, and a faster time-to-value path.',
    status: 'First implementation pass complete — real draft now available.',
    filePath: 'docs/toolkits/get-started-vps-setup.md',
    placeholderSections: [
      'Who this is for',
      'Setup checklist',
      'Recommended workspace files',
      'First 3 high-value workflows',
      'Common setup mistakes',
      'Quick win checklist',
      'Next step after initial setup',
    ],
    highlights: [
      'Defines a practical ready-to-continue checkpoint instead of vague setup advice.',
      'Recommends using a VPS plus Telegram pairing as the cleanest always-on setup path.',
      'Covers a security-first baseline with Tailscale, loopback-style access, Fail2Ban, and cautious skill installs.',
    ],
    body: `# Set Up OpenClaw on a VPS (Step by Step)

If you are brand new to this, do not worry. This guide is written for someone who wants exact directions, not vague advice.

We are going to do this one step at a time.

By the end, you will have:
- an OpenClaw server running on a VPS
- a Telegram bot connected to it
- OpenAI Codex connected during setup
- a safer setup using Tailscale and Fail2Ban
- an OpenClaw assistant you can message from your phone

This guide is designed to walk you through the full setup in a clean, practical way.

---

## What you need before you start

Before you open any websites, make sure you have these ready:

- a **Hostinger** account
- a **Telegram** account on your phone or computer
- an **OpenAI account**
- a credit card or payment method for the VPS
- about **30 to 45 minutes**

Optional but strongly recommended:
- a **Tailscale** account
- a password manager

---

## Step 1: Buy the VPS in Hostinger

### 1.1 Go to Hostinger

Open your browser and go to:

**https://www.hostinger.com/**

If you already have an OpenClaw-specific deployment page, use that link instead. If not, start on Hostinger and navigate to the VPS section.

### 1.2 Navigate to the VPS page

On the Hostinger site:
1. Click **Hosting** or **VPS** in the top navigation.
2. Open the **VPS Hosting** section.
3. Look for the VPS plan list.

The recommended plan is:
- **KVM 2**

That is a strong starter option for this setup.

### 1.3 Choose the plan

Click the button for:
- **KVM 2**

Then click:
- **Choose plan**
- or **Get started**
- or **Deploy**

Hostinger changes button text occasionally, but it will be the button that continues to checkout.

### 1.4 Choose the billing term

When Hostinger shows the billing options:
1. Select the **24-month plan** if you want the lowest monthly price in this setup path.
2. Continue to the checkout/cart screen.

### 1.5 Choose the server location

When Hostinger asks you where to deploy the server:
1. Select **United States** if you want a simple default choice.
2. If you live far from the US and want lower latency for your own SSH access, choose a region closer to you.

For most beginners, just choose:
- **United States**

### 1.6 Finish checkout

Now:
1. Click **Continue**.
2. Complete payment.
3. Wait for Hostinger to provision the VPS.

Once the server is ready, Hostinger will take you to your VPS dashboard.

---

## Step 2: Open the VPS dashboard and set the root password

### 2.1 Go to the VPS dashboard

Inside Hostinger, open the page for the VPS you just bought.

You should see a dashboard with details about your server.

### 2.2 Set the root password

You may be prompted to set up a root password.

If Hostinger asks you automatically, do it there.
If not:
1. Look for a button such as **Set password**, **Change root password**, or **Manage server**.
2. Set a strong password.
3. Save it in your password manager.

Do not lose this password.

You will use this password to SSH into the VPS from your own computer.

### 2.3 Find your server IP address

Still in the Hostinger VPS dashboard:
1. Look for the section that shows your server details.
2. Find the **IP address** for the VPS.
3. Copy it somewhere safe for the next step.

You will need this IP address to connect from Windows Terminal.

### 2.4 If you get stuck, open the built-in guide

If you see a **Learn more** button or setup guide link in Hostinger, open it in a separate tab.

That guide can help if the exact screen layout changed.

---

## Step 3: Open Windows Terminal on your computer

This guide assumes you are running commands from your own Windows machine, not from the Hostinger browser terminal.

### 3.1 Open Windows Terminal

On your Windows computer:
1. Click the **Start menu**
2. Type:
   - \`Windows Terminal\`
3. Click **Windows Terminal** to open it

You should now see a terminal window on your own machine.

### 3.2 Install Tailscale on your Windows computer first

Before connecting to the VPS, install Tailscale on your own computer.

1. Open your browser.
2. Go to **https://tailscale.com/**.
3. Click **Get started**.
4. Download the Windows version.
5. Run the installer.
6. Open Tailscale after it installs.
7. Sign in to your Tailscale account.
8. Approve any Windows network or VPN prompts.

Leave Tailscale installed and signed in.

We will later install Tailscale on the VPS too, so both machines are on the same private network.

### 3.3 SSH into your VPS from Windows Terminal

Go back to Windows Terminal.

Now connect to your server using SSH.

Type this command, replacing \`YOUR_SERVER_IP\` with your real VPS IP address:

\`\`\`bash
ssh root@YOUR_SERVER_IP
\`\`\`

Example:

\`\`\`bash
ssh root@123.45.67.89
\`\`\`

Then press **Enter**.

### 3.4 Accept the SSH fingerprint

The first time you connect, Windows Terminal may show a message asking whether you want to continue connecting.

It may ask something like:
- Are you sure you want to continue connecting?

Type:

\`\`\`bash
yes
\`\`\`

Then press **Enter**.

### 3.5 Enter the root password

Now SSH will ask for the VPS password.

1. Paste or type the root password you created in Hostinger.
2. Press **Enter**.

Important:
- when you type or paste a password in the terminal, you may not see characters appear on screen
- that is normal

If the login is successful, you are now connected to your VPS from your own computer.

---

## Step 4: Install OpenClaw on the Linux VPS

Now that you are connected to the VPS through SSH, install OpenClaw.

### 4.1 Open the OpenClaw website

On your own computer, open a browser tab and go to:

**https://openclaw.ai/**

### 4.2 Find the Linux CLI install command

On the OpenClaw site:
1. Look for **Get Started**, **Install**, or **CLI**.
2. Find the install command for **Linux**.
3. Copy the Linux CLI install command exactly as shown.

### 4.3 Run the Linux install command on the VPS

Go back to your SSH session in Windows Terminal.

Then:
1. Paste the Linux install command into the terminal.
2. Press **Enter**.
3. Wait for the install to finish.

If the installer tells you to run another command after installation:
1. Copy that command
2. Paste it into the terminal
3. Press **Enter**

### 4.4 Start the OpenClaw onboarding flow

Once the install completes:
- if OpenClaw launches the setup automatically, continue
- if it does not, run the onboarding/setup command shown by the installer

Wait until the OpenClaw welcome/setup screen appears in your terminal.

---

## Step 5: Start the OpenClaw onboarding

When the OpenClaw setup screen appears:
1. Read the warning/security notice.
2. Choose **Quick Start**.
3. Press **Enter**.

From here, OpenClaw will guide you through provider setup and channels.

---

## Step 6: Connect OpenAI using Codex OAuth

This is one of the places the previous version was too vague, so here is the literal beginner flow.

### 5.1 Choose OpenAI as the provider

When OpenClaw asks you to choose a model provider:
1. Use the arrow keys on your keyboard.
2. Highlight **OpenAI**.
3. Press **Enter**.

### 5.2 Choose the OAuth option if it is offered

If the setup offers you two paths such as:
- API key
- OAuth / browser login

Choose:
- **OpenAI Codex OAuth**
- or **Sign in with OpenAI**
- or the OAuth/browser-auth option

This is the path you want for a simpler Codex-style login flow.

### 5.3 Complete the browser login

OpenClaw should give you one of these:
- a browser link
- a login URL
- a prompt to authenticate in browser

When that appears:
1. Copy the URL.
2. Open it in your browser.
3. Sign in to your **OpenAI account**.
4. Approve the authorization.
5. Wait until the browser says authentication is complete.
6. Go back to the terminal.

If the setup tells you to press **Enter** after login, do that.

### 5.4 If OAuth is not shown, use the API key path

Some setups may still show an API key flow instead of OAuth.
If that happens:
1. Go to **https://platform.openai.com/**
2. Sign in
3. Create or copy your API key
4. Paste it into the terminal when OpenClaw asks
5. Press **Enter**

### 5.5 Choose the model

Once OpenClaw asks which model you want to use, choose the best Codex/GPT model available in the list.

Choose the smartest model you can reasonably afford.

If the list includes a recent Codex/GPT option, choose that.

For example, if available, choose something like:
- the latest **Codex** model
- or the strongest GPT/Codex option shown in setup

Use the arrow keys, then press **Enter**.

Do not overthink this on day one. Pick the strongest available OpenAI coding/reasoning option shown in the onboarding screen.

---

## Step 7: Choose Telegram as your chat channel

After model setup, OpenClaw will ask how you want to communicate with your bot.

### 6.1 Choose Telegram

In the channel list:
1. Use the arrow keys.
2. Highlight **Telegram**.
3. Press **Enter**.

Now OpenClaw will ask you for a Telegram bot token.

We need to create that next.

---

## Step 8: Create your Telegram bot with BotFather

### 7.1 Open Telegram

Open the Telegram app on your phone or desktop.

### 7.2 Find BotFather

In Telegram search:
1. Search for **BotFather**
2. Open the official BotFather chat
3. Tap or click **Start**

### 7.3 Create a new bot

In the BotFather chat:
1. Type:
   - \`/newbot\`
2. Press send.

### 7.4 Choose the bot name

BotFather will ask for a display name.

Type any name you want people to see, for example:
- \`Jason\`
- \`My OpenClaw Assistant\`
- \`SteveBot\`

Then press send.

### 7.5 Choose the username

BotFather will now ask for a username.

Important:
- it must end in \`bot\`

Examples:
- \`steve_openclaw_bot\`
- \`jasonhelperbot\`
- \`myassistantbot\`

If Telegram says the name is taken, try another one.

### 7.6 Copy the bot token

BotFather will send you a message with a token.

It will look something like a long string of characters.

Copy that token.

Do not share it with anyone.

---

## Step 9: Paste the Telegram token into OpenClaw

Go back to the Hostinger browser terminal where OpenClaw is waiting.

### 8.1 Paste the token

1. Click in the terminal.
2. Paste the Telegram bot token.
3. Press **Enter**.

Now OpenClaw knows how to talk to your Telegram bot.

But your personal Telegram account still needs to be paired to the server.

We will do that after the install finishes.

---

## Step 10: Install the recommended extras during setup

OpenClaw may offer optional tools and skills during onboarding.

If OpenClaw asks about installing tools, use these choices:

### 9.1 Homebrew / package manager prompts

If it offers a Homebrew or package-manager install option, choose the default recommended option shown by setup.

### 9.2 Skills and tools to install

A solid starting set is:
- **ClawHub**
- **MCPorter**
- **OpenAI Whisper**

If these appear as checkboxes or selectable tools:
1. Select **ClawHub**
2. Select **MCPorter**
3. Select **OpenAI Whisper** if you want voice features
4. Continue

If the exact names or options differ in your version, do not panic. The key point is that OpenClaw may offer add-ons during onboarding, and you can skip some if needed and install them later.

### 9.3 Keys and service prompts

If OpenClaw asks for extra keys for optional tools and you do not have them yet:
- skip them for now
- continue setup

You can always come back later.

### 9.4 Session memory hook

If OpenClaw asks about hooks and includes **session memory**, choose:
- **session memory**

That gives your assistant a better continuity setup.

---

## Step 11: Let OpenClaw install the gateway service

At this point OpenClaw should install its gateway service.

You do not need to do anything fancy here.

Just let it finish.

The gateway is the service that keeps OpenClaw alive so you can message it later.

When it asks how to hatch your bot, choose:
- **Terminal UI**

Use the arrow keys if needed, then press **Enter**.

---

## Step 12: Wake the assistant in the terminal

After hatching, there is one important thing to know:
- sometimes the prompt does not show properly at first

So do this exactly:
1. Wait for the terminal UI to appear.
2. Press **Enter** once.
3. If needed, press **Enter** again.

You may see a shell completion prompt or a message that completion was installed.

If that happens:
1. Press **Ctrl + C** to exit that temporary prompt
2. return to the shell

Do not panic. The important thing is that OpenClaw and the gateway are installed.

---

## Step 13: Pair your Telegram account with the server

Now we do the handshake that proves **you** are allowed to talk to the bot.

### 12.1 Open your new bot in Telegram

In Telegram:
1. Find the bot you just created
2. Open the chat
3. Press **Start**

### 12.2 Look for the pairing message

Your bot should reply with a pairing message.

It may say something like:
- not configured
- pairing required
- use this code
- run this command in your server terminal

### 12.3 Copy the pairing command or code

In the bot chat:
1. Copy the bottom line or pairing command exactly as shown

### 12.4 Paste it into the VPS terminal

Go back to the Hostinger terminal:
1. Paste the pairing command
2. Press **Enter**

This connects:
- your VPS
- your Telegram bot
- your personal Telegram account

Without this step, your bot is not properly paired.

### 12.5 Test the chat

Now go back to Telegram and send:
- \`Hi\`

If everything worked, OpenClaw should reply.

Good beginner messages to send next:
- \`What should I call you?\`
- \`Your name is Jason.\`
- \`Help me set up my preferences.\`

---

## Step 14: Install Tailscale on the VPS and make the server private

Right now your server exists on the public internet.

That is normal for a new VPS, but we want to make it safer.

### 14.1 Ask OpenClaw to secure the server

In Telegram, message your new bot with a prompt like this:

\`Secure this server. Install Tailscale, configure OpenClaw to be accessible only through the private Tailscale network where possible, deny other unnecessary public ports, and install and enable Fail2Ban.\`

That gives you a strong security baseline.

### 14.2 Approve the Tailscale login

OpenClaw may respond with a login or authorization link for Tailscale.

When that happens:
1. Click the link
2. Sign in to your Tailscale account
3. Approve the device/server
4. Return to Telegram
5. Tell the bot you finished, for example:
   - \`done\`

### 14.3 Confirm Tailscale is already installed on your own computer

At this point, Tailscale should already be installed and signed in on your Windows computer from Step 3.2.

Now the goal is to make sure the VPS joins the same Tailscale network, so both:
- your VPS
- your Windows computer

are on the same private network.

---

## Step 15: Confirm OpenClaw is no longer casually exposed

Once this is configured properly, OpenClaw can remain reachable through outbound channels like Telegram while its direct service surface stays much more private.

What you want is:
- Tailscale installed and active
- OpenClaw not broadly exposed to the public internet
- only the minimum necessary access paths enabled

If the assistant reports that OpenClaw is in loopback mode or otherwise restricted to local/private access, that is a good sign.

That means the bot can still talk to you through Telegram while keeping the direct server exposure much smaller.

---

## Step 16: Make sure Fail2Ban is installed

Fail2Ban helps block repeated login attacks.

Ask your assistant to confirm it is installed and running.

Example message:

\`Check whether Fail2Ban is installed and active. If not, install and enable it.\`

What you want:
- Fail2Ban installed
- service enabled
- SSH protection active

This is not your only security layer, but it is a smart one.

---

## Step 17: Do your first real test

Now that the setup is done, make OpenClaw do something useful.

### 16.1 Test reminders

Send this in Telegram:

\`Remind me every day at 9:00 AM to review my priorities.\`

If OpenClaw asks for your timezone, answer it.

### 16.2 Test a content task

Then send something like:

\`Summarize this YouTube video and pull out the action items.\`

Or:

\`Help me write a setup checklist for my project.\`

The goal is simple: prove this is not just installed — it is useful.

---

## Step 18: Install skills carefully

Once everything works, you can add skills.

But slow down here.

Do **not** blindly install random skills from the internet.

A safe beginner habit:
1. Find the skill source
2. Ask OpenClaw to inspect it first
3. Then install it

Example:

\`Install this skill, but first scan it for malicious instructions, prompt injection, or anything suspicious.\`

That is the right mindset.

---

## Step 19: What not to do

Do **not** do these things:

### Do not add the bot to group chats right away
If other people can message a bot that has system access, you are increasing risk fast.

### Do not expose extra ports unless you understand why
More public access usually means more risk.

### Do not use the weakest model just to save a tiny amount of money
A weak model makes the whole setup feel worse.

### Do not skip the pairing step
That pairing step is how you prove your Telegram account is authorized.

### Do not treat security as something to fix later
Security is part of setup.

---

## Your exact beginner milestone

If you want one simple definition of success, this is it:

By the end of setup, all of these should be true:
- your VPS exists in Hostinger
- OpenClaw finished onboarding
- OpenAI Codex is connected through OAuth or OpenAI auth flow
- your Telegram bot replies to you
- your Telegram account is paired
- Tailscale is installed
- Fail2Ban is running
- OpenClaw can complete one real task

If all of that works, you are in good shape.

---

## Quick checklist

- [ ] Go to Hostinger
- [ ] Choose the **KVM 2** VPS plan
- [ ] Select the **24-month** term if you want the lowest price path
- [ ] Choose **United States** as the region if you want the simplest default path
- [ ] Finish checkout
- [ ] Open the VPS dashboard
- [ ] Set the root password
- [ ] Click **Terminal**
- [ ] Wait for the OpenClaw onboarding flow
- [ ] Choose **Quick Start**
- [ ] Choose **OpenAI**
- [ ] Choose **Codex OAuth / browser login** if offered
- [ ] Complete OpenAI login in the browser
- [ ] Choose the strongest Codex/GPT option available
- [ ] Choose **Telegram** as the channel
- [ ] Open Telegram and create a bot with **BotFather**
- [ ] Paste the Telegram token into the terminal
- [ ] Finish setup and hatch the assistant in **Terminal UI**
- [ ] Open your Telegram bot and complete the pairing handshake
- [ ] Ask OpenClaw to install **Tailscale** and **Fail2Ban**
- [ ] Install Tailscale on your own computer
- [ ] Test one reminder
- [ ] Test one real task

---

## Final word

The biggest mistake beginners make is thinking the goal is just to get OpenClaw installed.

That is not the goal.

The goal is to get OpenClaw:
- running
- reachable
- paired to you
- reasonably locked down
- and useful on day one

That is the difference between a fun demo and an assistant you actually keep using.
`,
  },
  {
    slug: 'improve-memory',
    name: 'Improve Memory',
    positioning: 'Help OpenClaw users make memory useful without drowning in logs.',
    outcome: 'A practical approach to capture, promotion, review habits, and memory hygiene.',
    status: 'First implementation pass complete — practical draft and interactive examples now available.',
    placeholderSections: [
      'Memory philosophy',
      'Daily logging habits',
      'What belongs in long-term memory',
      'Promotion rules',
      'Review and cleanup cadence',
      'Example memory patterns',
      'Implementation checklist',
    ],
    highlights: [
      'Adds a practical memory philosophy focused on future usefulness instead of raw accumulation.',
      'Includes an interactive daily-note builder and long-term memory promotion scorecard.',
      'Defines review cadences, example good/bad memory patterns, and a minimum viable memory checklist.',
    ],
  },
  {
    slug: 'multi-agent-routing',
    name: 'Multi-Agent Routing',
    positioning: 'Give power users a simple framework for deciding which agent does what.',
    outcome: 'Routing rules, handoff patterns, fallback logic, and a practical delegation model.',
    status: 'First implementation pass complete — practical routing draft and delegation planner now available.',
    placeholderSections: [
      'When to route vs do it directly',
      'Agent role definitions',
      'Task triage rules',
      'Escalation and fallback patterns',
      'Example routing playbooks',
      'Failure recovery notes',
      'Operational checklist',
    ],
    highlights: [
      'Defines a simple routing model for keeping user-facing judgment in the main session while delegating bounded specialist work.',
      'Adds an interactive delegation planner plus a structured handoff brief preview.',
      'Covers role definitions, playbooks, failure recovery, and an operator checklist for real subagent runs.',
    ],
  },
];

export const improveMemoryQuickWins = [
  'A practical memory philosophy that prevents over-capture.',
  'A lightweight daily note pattern you can actually keep up with.',
  'Clear promotion rules for moving durable context into long-term memory.',
  'A cleanup cadence that keeps memory readable instead of bloated.',
] as const;

export const improveMemoryPhilosophy: ImproveMemoryPhilosophyItem[] = [
  {
    title: 'Memory is for future leverage, not emotional reassurance',
    detail: 'The point of memory in OpenClaw is to make the next session smarter and faster. If a note will not help future execution, reduce repeated explanation, or preserve a real decision, it probably does not need to live long.',
    rule: 'Capture what changes future work. Let the rest stay ephemeral.',
  },
  {
    title: 'Raw capture and curated memory are different jobs',
    detail: 'Daily files can be messy and fast. Long-term memory should be selective, compressed, and durable. Mixing the two creates a junk drawer where important context gets buried under trivial activity.',
    rule: 'Use daily memory for logs; use MEMORY.md for stable truths and lessons.',
  },
  {
    title: 'Too much memory becomes anti-memory',
    detail: 'Over-capturing makes retrieval harder, review slower, and trust lower. A system that remembers everything usually helps less, because the useful signal is hidden inside noise.',
    rule: 'Bias toward fewer, higher-value entries that you will actually reread.',
  },
] as const;

export const improveMemorySampleEntries = {
  daily: [
    'Decision: Keep the launch toolkit focused on a paid bundle instead of drifting into a vague dashboard product.',
    'Changed: Improve Memory moved from placeholder to interactive first-pass draft.',
    'Follow-up: Add Steve’s preferred examples for promotion rules and cleanup cadence.',
    'Mistake: Do not treat every build/test run as worthy of long-term memory.',
  ],
  longTerm: [
    'Steve prefers concise delegated coding summaries with explicit build status.',
    'Doug should avoid memory-fix work unless explicitly reassigned.',
    'A useful daily memory entry is short, specific, and future-facing.',
  ],
} as const;

export const improveMemoryLongTermRules: ImproveMemoryLongTermRule[] = [
  {
    title: 'Durable preferences',
    keep: 'Stable user preferences, working style rules, and recurring communication expectations.',
    avoid: 'One-off moods, temporary whims, or things that matter for only a single session.',
  },
  {
    title: 'Project-level context',
    keep: 'Decisions that explain why a repo, workflow, or product direction changed.',
    avoid: 'Routine progress chatter that already lives in commits, docs, or issue boards.',
  },
  {
    title: 'Repeated mistakes and lessons',
    keep: 'Failures or friction patterns likely to repeat unless remembered.',
    avoid: 'Generic “be better next time” notes with no operational consequence.',
  },
  {
    title: 'Rules that shape future delegation',
    keep: 'Boundaries, redirections, or constraints that will matter every time a task is handed off.',
    avoid: 'Micro-instructions tied to a single task that is already complete.',
  },
] as const;

export const improveMemoryPromotionSignals: ImproveMemoryPromotionSignal[] = [
  {
    title: 'Repeat signal',
    detail: 'If you expect to explain it again, promote it. Repeated explanation is a strong sign that something belongs in durable memory.',
  },
  {
    title: 'Behavior signal',
    detail: 'If knowing it would change future recommendations, task routing, or implementation style, it probably deserves promotion.',
  },
  {
    title: 'Compression signal',
    detail: 'If five daily notes can be summarized into one clean rule, that summary belongs in long-term memory and the scattered raw details do not.',
  },
  {
    title: 'Anti-pattern',
    detail: 'Do not promote notes just because they were recent, emotionally vivid, or laborious to write. Promotion should serve future utility, not sunk cost.',
  },
] as const;

export const improveMemoryCleanupRhythms: ImproveMemoryCleanupRhythm[] = [
  {
    cadence: 'Daily',
    title: 'Close the loop without writing a novel',
    detail: 'At the end of the day, make sure the important decision, the meaningful change, and the next follow-up exist somewhere easy to find.',
    steps: [
      'Add the smallest useful note for what changed today.',
      'Capture at least one follow-up if work is still in motion.',
      'Skip vanity logging and routine chatter that does not help tomorrow.',
    ],
  },
  {
    cadence: 'Weekly',
    title: 'Promote the durable bits',
    detail: 'A weekly review is where raw notes become memory. Look for repeated friction, stable preferences, and decisions that would otherwise need to be rediscovered.',
    steps: [
      'Scan the last 5–7 daily notes for repeats or stable themes.',
      'Promote only the compressed rule, not the whole story.',
      'Delete or ignore stale reminders that no longer matter.',
    ],
  },
  {
    cadence: 'Periodic cleanup',
    title: 'Prune stale long-term memory',
    detail: 'Long-term memory should age well. If an entry is obsolete, misleading, or superseded, revise it before it silently poisons future work.',
    steps: [
      'Review MEMORY.md for outdated project assumptions or old preferences.',
      'Merge overlapping rules into a single stronger statement.',
      'Remove context that has stopped being true.',
    ],
  },
] as const;

export const improveMemoryExamples: ImproveMemoryExample[] = [
  {
    label: 'Good example',
    tone: 'good',
    title: 'Specific, durable, and future-facing',
    detail: 'This is the right shape for long-term memory because it changes future routing and prevents repeated mistakes.',
    example: '## Delegation boundary\n- Doug should not be assigned memory-fix tasks unless explicitly reassigned.\n- Reason: role clarity matters and this preference will affect future task routing.',
  },
  {
    label: 'Bad example',
    tone: 'danger',
    title: 'Verbose but operationally empty',
    detail: 'This feels thorough, but it mostly stores narrative noise and makes the real lesson harder to recover later.',
    example: 'Today we talked about memory again for a while. There were several points about memory philosophy, some feelings about the previous memory setup, and a lot of back-and-forth before the work moved on. It seemed important at the time.',
  },
  {
    label: 'Cleanup example',
    tone: 'info',
    title: 'Before vs after compression',
    detail: 'The review habit should turn repeated raw notes into one durable rule.',
    example: 'Before:\n- Steve prefers concise updates.\n- Steve wants explicit build status.\n- Steve does not want rambling completion summaries.\n\nAfter:\n- Delegated coding work should end with a concise completion summary plus explicit build/test status.',
  },
] as const;

export const improveMemoryChecklist = [
  'Create daily memory files and keep entries short enough to maintain under real workload.',
  'Reserve long-term memory for durable preferences, project context, and repeated lessons.',
  'Review recent daily notes on a weekly cadence and promote only compressed takeaways.',
  'Prune outdated memory before it starts steering work in the wrong direction.',
  'Judge the system by usefulness: faster context recovery, fewer repeated explanations, and less noise.',
] as const;

export const multiAgentQuickWins = [
  'A simple model for when to keep work in the main session versus delegate it.',
  'Clear role definitions for main, specialist, and support agents.',
  'A reusable handoff pattern that tells subagents exactly what to return.',
  'Fallback rules for stuck runs, noisy coordination, and partial progress.',
] as const;

export const multiAgentRoutingPrinciples: MultiAgentRoutingPrinciple[] = [
  {
    title: 'Keep judgment close to the user, push execution depth outward',
    detail: 'The main agent should own taste, user-facing communication, and ambiguous framing. Specialist agents should own bounded execution work like code changes, deeper research passes, or repetitive transforms.',
    rule: 'If the work needs judgment and user context, keep it central. If it needs depth and focus, delegate it.',
  },
  {
    title: 'Delegate outcomes, not vague aspirations',
    detail: 'Subagents do best with a concrete scope, a success condition, and a return format. They do worse when they are handed broad intent and forced to invent what done means.',
    rule: 'Every delegation should name the task, the boundary, the finish line, and the report-back format.',
  },
  {
    title: 'Coordination overhead is real work',
    detail: 'Routing is only worth it when the specialist return will save more time or improve quality more than the handoff and review cost. Too many tiny delegations create theater instead of leverage.',
    rule: 'Do not split work unless the handoff cost is lower than the focus you gain.',
  },
] as const;

export const multiAgentRoleCards: MultiAgentRoleCard[] = [
  {
    title: 'Main agent',
    bestFor: 'User-facing replies, scoping, prioritization, final synthesis, and decisions that need taste or judgment.',
    avoid: 'Deep file editing, long code implementation loops, or repetitive research that can be executed elsewhere.',
  },
  {
    title: 'Coding specialist',
    bestFor: 'Feature implementation, refactors, build/test loops, and repo-local execution where focus matters more than conversation.',
    avoid: 'Inventing product direction, making user-facing promises, or guessing unstated intent.',
  },
  {
    title: 'Research / support specialist',
    bestFor: 'Gathering options, checking docs, summarizing evidence, and preparing structured inputs for the main agent.',
    avoid: 'Owning the final recommendation when tradeoffs are mostly about user context or operator preference.',
  },
] as const;

export const multiAgentTriageAxes: MultiAgentTriageAxis[] = [
  {
    title: 'User-facing risk',
    detail: 'The more a task affects what the user sees directly, the more the main agent should keep final control over framing and polish.',
  },
  {
    title: 'Execution depth',
    detail: 'Tasks that require touching many files, running builds, or staying focused for a while are stronger delegation candidates.',
  },
  {
    title: 'Ambiguity',
    detail: 'If the task is still fuzzy, do not outsource the confusion. Clarify it first, then delegate the concrete part.',
  },
  {
    title: 'Specialist leverage',
    detail: 'Route work when a specialist can clearly do it faster or better than the main session can while staying conversational.',
  },
] as const;

export const multiAgentScoringGuidance = [
  'Raise the delegation score when file depth or specialist leverage is high.',
  'Lower the score when ambiguity, user-facing risk, or coordination cost is high.',
  'Use split execution when the main agent should frame the task but a specialist should perform the heavy lifting.',
] as const;

export const multiAgentHandoffFields: MultiAgentHandoffField[] = [
  { key: 'task', label: 'Task' },
  { key: 'success', label: 'Success condition' },
  { key: 'constraints', label: 'Constraints' },
  { key: 'artifacts', label: 'What to return' },
] as const;

export const multiAgentPlaybooks: MultiAgentPlaybook[] = [
  {
    label: 'Build task',
    tone: 'good',
    title: 'Main agent frames, coding agent executes, main agent reports',
    detail: 'Use this when the task is implementation-heavy but the final answer still belongs in the main session.',
    steps: [
      'Main agent defines scope, repo, success condition, and return format.',
      'Coding agent edits files, runs the build, and fixes breakage until it passes or hits a blocker.',
      'Main agent reviews the result, compresses the findings, and answers the user.',
    ],
  },
  {
    label: 'Research task',
    tone: 'info',
    title: 'Support agent gathers, main agent judges',
    detail: 'Use this when the work is mostly evidence gathering or option collection rather than making the final decision.',
    steps: [
      'Main agent names the question and what evidence matters.',
      'Research agent gathers sources, options, or comparisons in a compact form.',
      'Main agent interprets the evidence and gives the final recommendation.',
    ],
  },
  {
    label: 'Mixed task',
    tone: 'warn',
    title: 'Split the workflow at clean handoff boundaries',
    detail: 'For mixed work, route only the bounded middle, not the entire messy end-to-end flow.',
    steps: [
      'Main agent handles clarification and user-facing framing.',
      'Specialist agent handles the execution block with explicit scope.',
      'Main agent performs final synthesis, QA, and delivery.',
    ],
  },
] as const;

export const multiAgentFailureModes: MultiAgentFailureMode[] = [
  {
    title: 'The specialist asks too many questions',
    detail: 'This usually means the original handoff was under-scoped or the task was delegated before the ambiguity was removed.',
    recovery: 'Pull the task back, clarify the missing decisions in the main session, then re-delegate only the concrete remainder.',
  },
  {
    title: 'The specialist drifts outside scope',
    detail: 'Agents often wander when the boundary is implied instead of explicit, especially in broad project areas.',
    recovery: 'Restate the exact boundary, name what is out of scope, and ask for a concise completion report tied to the original goal.',
  },
  {
    title: 'The run produced partial progress but no clean finish',
    detail: 'Partial work is still useful if it is summarized clearly instead of treated like a failed all-or-nothing attempt.',
    recovery: 'Capture what changed, what passed, what failed, and the next best step so momentum is preserved.',
  },
] as const;

export const multiAgentChecklist = [
  'Clarify the task before delegating it; do not outsource ambiguity.',
  'Name the repo, files, or environment the specialist should work inside.',
  'Define success in a way that can be verified: build pass, answer shape, or artifact list.',
  'Require a concise return payload with changed files, validation status, and blockers.',
  'Review the specialist result before presenting it as the final answer.',
] as const;

export const monetization = {
  recommendation: 'Sell OpenClaw Launch Toolkit as a one-time paid bundle first.',
  coreOffer: [
    'Base offer: three focused toolkit guides plus templates, checklists, and minor future fixes.',
    'Delivery: a simple checkout link plus downloadable files / private delivery page.',
    'Message: buy the fastest path to getting OpenClaw useful, not another vague promise.',
  ],
  why: [
    'One-time pricing matches the current product shape: documents and templates, not ongoing software yet.',
    'It is much easier to explain and buy than a recurring subscription before continuous value exists.',
    'It avoids the trap of unpaid “help” disguised as consulting discovery.',
  ],
  upsells: [
    'Optional add-on: paid updates pack for future toolkit revisions and new examples.',
    'Optional higher-ticket upsell: implementation session or done-with-you setup.',
    'Optional later subscription: premium templates, new playbooks, and evolving workflow packs.',
  ],
};

export const pricingTiers = [
  {
    name: 'Starting offer',
    price: '$29',
    badge: 'Public launch price',
    tone: 'good',
    description: 'This is the simplest first offer: low friction, easy to understand, and good for getting the first buyers in.',
    bullets: [
      'Paid PDF toolkit at an easy entry price',
      'Strong fit for the first public launch',
      'Leaves room for higher prices later as more PDFs are added',
    ],
  },
  {
    name: 'Expanded pack',
    price: '$49+',
    badge: 'Later tier',
    tone: 'info',
    description: 'A natural next step once the toolkit grows with more PDFs, examples, or bonus materials.',
    bullets: [
      'Use when the pack has more depth and proof',
      'Good place for a fuller toolkit tier',
      'Can become the next standard offer after launch',
    ],
  },
  {
    name: 'Premium package',
    price: '$99+',
    badge: 'Future option',
    tone: 'warn',
    description: 'Reserved for a stronger bundle with more assets, deeper walkthroughs, or added implementation support.',
    bullets: [
      'Best saved for a more complete package',
      'Works once the toolkit has broader coverage',
      'Leaves space for tiered packaging without changing the starter offer',
    ],
  },
] as const;

export const ctaMoments = [
  'Buy the toolkit when you want a faster path from install to useful workflows.',
  'Wait if you need a fully built SaaS product instead of practical documentation and templates.',
  'Use the early-buyer price first, then raise it once objections are answered with proof.',
] as const;

export const productSections = [
  'Hero with direct paid offer and CTA',
  'What is included in the toolkit',
  'Who it is for / who it is not for',
  '3 toolkit document cards',
  'Pricing and delivery model',
  'Proof / credibility framing',
  'FAQ / objection handling',
];

export const mvpBacklog: BacklogItem[] = [
  {
    title: 'Lock positioning for OpenClaw Launch Toolkit as a paid bundle',
    priority: 'P0',
    owner: 'Steve',
    timeline: 'Today',
    status: 'Now',
    dependency: 'Simple product promise',
    outcome: 'Prevents the project from drifting back into consulting or a generic dashboard.',
    area: 'Offer',
  },
  {
    title: 'Set launch pricing and checkout path',
    priority: 'P0',
    owner: 'Steve',
    timeline: 'Today',
    status: 'Now',
    dependency: 'Preferred payment platform',
    outcome: 'Makes the page sellable instead of just informational.',
    area: 'Monetization',
  },
  {
    title: 'Write homepage copy for hero, offer, and FAQ',
    priority: 'P0',
    owner: 'Doug',
    timeline: 'Today',
    status: 'Now',
    dependency: 'Positioning direction confirmed',
    outcome: 'Creates the smallest launchable paid site skeleton.',
    area: 'Site',
  },
  {
    title: 'Create placeholders for the 3 toolkit documents',
    priority: 'P0',
    owner: 'Doug',
    timeline: 'Today',
    status: 'Now',
    dependency: 'Document names confirmed',
    outcome: 'Lets Steve drop source material into clear slots without rethinking structure.',
    area: 'Docs',
  },
  {
    title: 'Add buy button wiring once payment link exists',
    priority: 'P1',
    owner: 'Doug',
    timeline: 'Next',
    status: 'Next',
    dependency: 'Checkout URL',
    outcome: 'Turns placeholder CTA into a real purchase path.',
    area: 'Build',
  },
  {
    title: 'Draft Get Started toolkit from source material',
    priority: 'P1',
    owner: 'Steve + Doug',
    timeline: 'Next',
    status: 'Next',
    dependency: 'Steve’s notes / source docs',
    outcome: 'Creates the first finished asset in the paid bundle.',
    area: 'Docs',
  },
  {
    title: 'Draft Improve Memory toolkit from source material',
    priority: 'P1',
    owner: 'Steve + Doug',
    timeline: 'Next',
    status: 'Next',
    dependency: 'Steve’s notes / source docs',
    outcome: 'Completes the second core document.',
    area: 'Docs',
  },
  {
    title: 'Draft Multi-Agent Routing toolkit from source material',
    priority: 'P1',
    owner: 'Steve + Doug',
    timeline: 'Next',
    status: 'Next',
    dependency: 'Steve’s notes / source docs',
    outcome: 'Completes the third core document.',
    area: 'Docs',
  },
  {
    title: 'Collect 5 direct-message conversations with prospective buyers',
    priority: 'P1',
    owner: 'Steve',
    timeline: 'This week',
    status: 'Next',
    dependency: 'Shareable landing page',
    outcome: 'Tests willingness to pay and surfaces objections fast.',
    area: 'Validation',
  },
  {
    title: 'Add one small visual proof asset or screenshot section',
    priority: 'P2',
    owner: 'Doug',
    timeline: 'Later',
    status: 'Later',
    dependency: 'Actual toolkit visuals',
    outcome: 'Improves perceived value once product assets exist.',
    area: 'Site',
  },
];

export const kanbanColumns = [
  {
    key: 'pending',
    title: 'Pending',
    description: 'Queued items that matter, but should not slow the first paid launch.',
  },
  {
    key: 'in-progress',
    title: 'In Progress',
    description: 'Current work that directly creates a sellable offer, page, or deliverable slot.',
  },
  {
    key: 'done',
    title: 'Done',
    description: 'Finished moves that tightened focus and pushed the toolkit toward launch.',
  },
] as const satisfies ReadonlyArray<{
  key: KanbanColumnKey;
  title: string;
  description: string;
}>;

export const kanbanSeedTasks: KanbanTask[] = [
  {
    id: 'pivot-repo-direction',
    title: 'Reframe mission-control around a paid toolkit product',
    status: 'done',
    priority: 'P0',
    owner: 'Doug',
    track: 'Offer',
    sourceBacklogTitle: 'Lock positioning for OpenClaw Launch Toolkit as a paid bundle',
    detail: 'The repo now focuses on OpenClaw Launch Toolkit rather than a multi-idea founder dashboard.',
    nextStep: 'Keep all new work tied to the paid offer unless it directly supports launch.',
    area: 'Offer',
  },
  {
    id: 'homepage-skeleton',
    title: 'Build the smallest launchable paid site skeleton',
    status: 'done',
    priority: 'P0',
    owner: 'Doug',
    track: 'Build',
    sourceBacklogTitle: 'Write homepage copy for hero, offer, and FAQ',
    detail: 'Hero, audience fit, pricing, roadmap, FAQ, and document cards now point at a clearer paid offer.',
    nextStep: 'Swap placeholder buy links for the real checkout URL.',
    area: 'Site',
  },
  {
    id: 'doc-placeholders',
    title: 'Create content slots for all 3 toolkit documents',
    status: 'done',
    priority: 'P0',
    owner: 'Doug',
    track: 'Docs',
    sourceBacklogTitle: 'Create placeholders for the 3 toolkit documents',
    detail: 'Each toolkit now has a stronger placeholder scaffold for source notes, examples, deliverables, and gaps.',
    nextStep: 'Populate the placeholders from Steve’s source notes.',
    area: 'Docs',
  },
  {
    id: 'pricing-decision',
    title: 'Choose launch price and payment processor',
    status: 'pending',
    priority: 'P0',
    owner: 'Steve',
    track: 'Ops',
    sourceBacklogTitle: 'Set launch pricing and checkout path',
    detail: 'Recommendation is early buyer at $79, standard at $129, with a simple checkout link.',
    nextStep: 'Pick Gumroad, Lemon Squeezy, or Stripe Payment Link and insert the URL.',
    area: 'Monetization',
  },
  {
    id: 'faq-objections',
    title: 'Answer the top buyer objections in plain English',
    status: 'done',
    priority: 'P1',
    owner: 'Doug',
    track: 'GTM',
    sourceBacklogTitle: 'Write homepage copy for hero, offer, and FAQ',
    detail: 'FAQ now covers fit, software-vs-toolkit, payment timing, update expectations, and what buyers receive today.',
    nextStep: 'Revise answers once real buyer DMs start coming in.',
    area: 'Site',
  },
  {
    id: 'checkout-wireup',
    title: 'Replace placeholder CTA with real checkout link',
    status: 'pending',
    priority: 'P1',
    owner: 'Doug',
    track: 'Build',
    sourceBacklogTitle: 'Add buy button wiring once payment link exists',
    detail: 'The site should become shippable the moment a payment URL exists.',
    nextStep: 'Add the live URL to the CTA constant and redeploy.',
    area: 'Build',
  },
  {
    id: 'first-buyer-outreach',
    title: 'Send the page to 5 warm prospects and ask for buy / no-buy feedback',
    status: 'pending',
    priority: 'P1',
    owner: 'Steve',
    track: 'GTM',
    sourceBacklogTitle: 'Collect 5 direct-message conversations with prospective buyers',
    detail: 'Short, direct outreach beats more internal planning at this stage.',
    nextStep: 'Track objections and revise copy after each round.',
    area: 'Validation',
  },
];

export const faqItems = [
  {
    question: 'What am I buying?',
    answer: 'You are buying a PDF toolkit for OpenClaw. The paid pack gives you practical guides that help you use OpenClaw more successfully after the basic setup is done.',
  },
  {
    question: 'Is anything free?',
    answer: 'Yes. The Setup PDF is the free sample. You can read it first and see how the toolkit is written before deciding whether to buy the full pack.',
  },
  {
    question: 'Who is this best for?',
    answer: 'It is best for people who want plain-English help getting OpenClaw running and using it well, especially if they are not deeply technical.',
  },
  {
    question: 'What is in the paid pack?',
    answer: 'The paid pack includes the guides for improving memory and using multiple agents well, plus the rest of the toolkit materials that help you operate OpenClaw with less confusion.',
  },
  {
    question: 'Why charge once instead of monthly?',
    answer: 'Because this product is a guide pack, not a subscription service. A one-time price is simpler and easier for buyers to understand.',
  },
  {
    question: 'Should I buy it if I am brand new?',
    answer: 'Start with the free Setup PDF first. If you like the teaching style and want help beyond setup, the paid pack is the next step.',
  },
  {
    question: 'Will the toolkit be updated?',
    answer: 'Small fixes and practical improvements can be added over time. If a bigger update product is created later, that can be offered separately.',
  },
  {
    question: 'Do I need to know a lot about computers?',
    answer: 'No. The page and the toolkit are being written to help people with very little computer knowledge follow the process more confidently.',
  },
];
