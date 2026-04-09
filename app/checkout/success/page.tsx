import Link from 'next/link';
import { getPurchaseBySessionId, markPurchasePaid } from '@/lib/purchases';
import { getStripe } from '@/lib/stripe';

export default async function CheckoutSuccessPage({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id } = await searchParams;
  let purchase = session_id ? await getPurchaseBySessionId(session_id) : null;

  if (session_id && purchase?.status !== 'paid') {
    try {
      const session = await getStripe().checkout.sessions.retrieve(session_id);
      const isPaid = session.payment_status === 'paid' || session.status === 'complete';

      if (isPaid) {
        purchase = await markPurchasePaid({
          stripeSessionId: session.id,
          stripePaymentIntentId: typeof session.payment_intent === 'string' ? session.payment_intent : session.payment_intent?.id,
          email: session.customer_details?.email ?? session.customer_email ?? null,
          amountTotal: session.amount_total,
          currency: session.currency,
        }) ?? purchase;
      }
    } catch (error) {
      console.error('Failed to verify Stripe checkout session on success page', error);
    }
  }

  const paid = purchase?.status === 'paid';
  const downloadHref = purchase ? `/downloads/${purchase.access_token}` : null;

  return (
    <main className="landingPage simplePage">
      <section className="card simpleCard">
        <div className="eyebrow">Purchase status</div>
        <h1>{paid ? 'Payment confirmed' : 'Payment received — waiting for confirmation'}</h1>
        <p className="heroLead">
          {paid
            ? 'Your payment was confirmed and your gated download page is ready.'
            : 'Stripe sent you back successfully, but this page only unlocks after payment confirmation. Refresh in a few seconds if needed.'}
        </p>
        {downloadHref ? (
          <div className="ctaRow">
            <Link className="button primary" href={downloadHref}>Open my download page</Link>
            <Link className="button secondary" href="/checkout">Back to checkout</Link>
          </div>
        ) : (
          <div className="ctaRow">
            <Link className="button secondary" href="/checkout">Back to checkout</Link>
          </div>
        )}
      </section>
    </main>
  );
}
