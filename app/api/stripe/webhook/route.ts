import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { requireEnv } from '@/lib/env';
import { getPurchaseBySessionId, markPurchasePaid } from '@/lib/purchases';
import { getStripe } from '@/lib/stripe';

export async function POST(request: Request) {
  const signature = request.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 });
  }

  const body = await request.text();
  let event: Stripe.Event;

  try {
    event = getStripe().webhooks.constructEvent(body, signature, requireEnv('STRIPE_WEBHOOK_SECRET'));
  } catch (error) {
    console.error('Webhook signature verification failed', error);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const existing = await getPurchaseBySessionId(session.id);

    if (existing) {
      await markPurchasePaid({
        stripeSessionId: session.id,
        stripePaymentIntentId: typeof session.payment_intent === 'string' ? session.payment_intent : session.payment_intent?.id,
        email: session.customer_details?.email ?? session.customer_email ?? null,
        amountTotal: session.amount_total,
        currency: session.currency,
      });
    }
  }

  return NextResponse.json({ received: true });
}
