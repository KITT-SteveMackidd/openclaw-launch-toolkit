# OpenClaw Launch Toolkit

A Next.js landing page and checkout flow for the OpenClaw Launch Toolkit.

## What this build now includes

- Free public Setup PDF
- Stripe Checkout in test mode
- Stripe webhook with signature verification
- SQLite purchase storage
- Webhook-confirmed unlocks only
- Gated download page for the two paid PDFs
- Protected PDF download route

## Environment setup

Copy `.env.example` to `.env.local` and fill in the Stripe test values.

```bash
cp .env.example .env.local
```

Required values:

- `NEXT_PUBLIC_SITE_URL` — base site URL, for local dev use `http://localhost:3001`
- `STRIPE_SECRET_KEY` — Stripe test secret key
- `STRIPE_PRICE_ID` — Stripe test-mode price ID for the $29 toolkit
- `STRIPE_WEBHOOK_SECRET` — webhook signing secret from `stripe listen`
- `ACCESS_TOKEN_EXPIRY_DAYS` — optional, defaults to `30`

## Run locally

```bash
npm install
npm run dev
```

Open:

- Landing page: `http://localhost:3001/`
- Checkout page: `http://localhost:3001/checkout`

## Stripe test-mode setup

### 1) Create a product + price in Stripe

In Stripe test mode:

1. Go to **Product catalog**.
2. Create a product called **OpenClaw Launch Toolkit**.
3. Add a **one-time** price of **$29.00 USD**.
4. Copy the resulting **Price ID** into `STRIPE_PRICE_ID`.

### 2) Get your test secret key

1. In Stripe, open **Developers → API keys**.
2. Copy the **Secret key** from **test mode**.
3. Put it into `STRIPE_SECRET_KEY`.

### 3) Start the Stripe webhook forwarder locally

Install the Stripe CLI if needed, then run:

```bash
stripe listen --forward-to localhost:3001/api/stripe/webhook
```

Stripe CLI will print a webhook signing secret that looks like `whsec_...`.
Copy that into `STRIPE_WEBHOOK_SECRET`.

### 4) Test a purchase

1. Start the Next app locally.
2. Visit `/checkout`.
3. Enter an email and continue to Stripe.
4. Use a Stripe test card such as `4242 4242 4242 4242`.
5. Complete checkout.
6. Return to `/checkout/success?session_id=...`.
7. If the webhook has been delivered, the page will show the gated download link.
8. Open the gated download page and download the paid PDFs.

## How the unlock works

- Checkout session is created by `/api/checkout`
- A pending purchase row is written to SQLite
- Stripe redirects the buyer to the success page
- **Nothing unlocks yet**
- The Stripe webhook posts to `/api/stripe/webhook`
- Only when the webhook verifies and `checkout.session.completed` is processed does the purchase move to `paid`
- The buyer’s download token then works on `/downloads/:token`

## Storage

SQLite database file is stored at:

```text
.data/launch-toolkit.sqlite
```

## Important note about the paid PDFs

The two paid PDFs are no longer served from `public/`.
They now live in:

```text
private/pdfs/
```

They are only streamed through the protected download route after a paid token is validated.
