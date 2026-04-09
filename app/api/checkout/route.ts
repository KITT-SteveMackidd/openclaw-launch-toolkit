import { NextResponse } from 'next/server';
import { getBaseUrl, requireEnv } from '@/lib/env';
import { createPendingPurchase } from '@/lib/purchases';
import { getStripe } from '@/lib/stripe';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const email = String(formData.get('email') || '').trim() || undefined;
    const stripe = getStripe();
    const baseUrl = getBaseUrl();

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: requireEnv('STRIPE_PRICE_ID'),
          quantity: 1,
        },
      ],
      customer_email: email,
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout?canceled=1`,
      billing_address_collection: 'auto',
      allow_promotion_codes: false,
      metadata: {
        product: 'openclaw-launch-toolkit',
      },
    });

    await createPendingPurchase({
      email,
      stripeSessionId: session.id,
      amountTotal: session.amount_total,
      currency: session.currency,
      metadata: { mode: 'stripe-checkout-test' },
    });

    return NextResponse.redirect(session.url!, { status: 303 });
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(`${getBaseUrl()}/checkout?error=1`, { status: 303 });
  }
}
