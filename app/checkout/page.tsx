import { isStripeConfigured } from '@/lib/env';

export default async function CheckoutPage({ searchParams }: { searchParams: Promise<{ canceled?: string; error?: string }> }) {
  const params = await searchParams;
  const stripeReady = isStripeConfigured();

  return (
    <main className="landingPage simplePage">
      <section className="card simpleCard">
        <div className="eyebrow">Checkout</div>
        <h1>Buy the OpenClaw Launch Toolkit</h1>
        <p className="heroLead">
          This checkout unlocks the two paid PDFs after Stripe confirms payment.
        </p>
        <ul className="checkoutList">
          <li>Improve Memory PDF</li>
          <li>Multi-Agent Routing PDF</li>
          <li>Free Setup PDF stays public either way</li>
        </ul>

        {params.canceled ? <p className="statusNote warn">Checkout was canceled. Nothing was charged.</p> : null}
        {params.error ? <p className="statusNote warn">Checkout could not start. Check Stripe env vars and try again.</p> : null}
        {!stripeReady ? <p className="statusNote warn">Stripe is not fully configured yet. Steve needs to set the Stripe env vars before checkout can work.</p> : null}

        <form action="/api/checkout" method="post" className="checkoutForm">
          <label>
            <span>Email for delivery</span>
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <button className="button primary" type="submit" disabled={!stripeReady}>Continue to checkout</button>
        </form>
      </section>
    </main>
  );
}
