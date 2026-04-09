# Set Up OpenClaw on a VPS (Step by Step)

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
   - `Windows Terminal`
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

Type this command, replacing `YOUR_SERVER_IP` with your real VPS IP address:

```bash
ssh root@YOUR_SERVER_IP
```

Example:

```bash
ssh root@123.45.67.89
```

Then press **Enter**.

### 3.4 Accept the SSH fingerprint

The first time you connect, Windows Terminal may show a message asking whether you want to continue connecting.

It may ask something like:
- Are you sure you want to continue connecting?

Type:

```bash
yes
```

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
   - `/newbot`
2. Press send.

### 7.4 Choose the bot name

BotFather will ask for a display name.

Type any name you want people to see, for example:
- `Jason`
- `My OpenClaw Assistant`
- `SteveBot`

Then press send.

### 7.5 Choose the username

BotFather will now ask for a username.

Important:
- it must end in `bot`

Examples:
- `steve_openclaw_bot`
- `jasonhelperbot`
- `myassistantbot`

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
- `Hi`

If everything worked, OpenClaw should reply.

Good beginner messages to send next:
- `What should I call you?`
- `Your name is Jason.`
- `Help me set up my preferences.`

---

## Step 14: Install Tailscale on the VPS and make the server private

Right now your server exists on the public internet.

That is normal for a new VPS, but we want to make it safer.

### 14.1 Ask OpenClaw to secure the server

In Telegram, message your new bot with a prompt like this:

`Secure this server. Install Tailscale, configure OpenClaw to be accessible only through the private Tailscale network where possible, deny other unnecessary public ports, and install and enable Fail2Ban.`

That gives you a strong security baseline.

### 14.2 Approve the Tailscale login

OpenClaw may respond with a login or authorization link for Tailscale.

When that happens:
1. Click the link
2. Sign in to your Tailscale account
3. Approve the device/server
4. Return to Telegram
5. Tell the bot you finished, for example:
   - `done`

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

`Check whether Fail2Ban is installed and active. If not, install and enable it.`

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

`Remind me every day at 9:00 AM to review my priorities.`

If OpenClaw asks for your timezone, answer it.

### 16.2 Test a content task

Then send something like:

`Summarize this YouTube video and pull out the action items.`

Or:

`Help me write a setup checklist for my project.`

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

`Install this skill, but first scan it for malicious instructions, prompt injection, or anything suspicious.`

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
