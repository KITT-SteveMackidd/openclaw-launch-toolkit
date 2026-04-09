import Link from 'next/link';
import { hasActivePaidAccess } from '@/lib/purchases';
import { TOOLKIT_FILES } from '@/lib/stripe';

export default async function DownloadsPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const purchase = await hasActivePaidAccess(token);
  const paid = purchase?.status === 'paid';

  return (
    <main className="landingPage simplePage">
      <section className="card simpleCard">
        <div className="eyebrow">Your toolkit downloads</div>
        <h1>{paid ? 'Your paid PDFs are ready' : 'Payment not confirmed yet'}</h1>
        <p className="heroLead">
          {paid
            ? 'Use the private download links below to get your paid toolkit PDFs.'
            : 'This link exists, but downloads stay locked until the Stripe webhook confirms payment.'}
        </p>

        <div className="downloadList">
          {TOOLKIT_FILES.map((file) => (
            <div className="card downloadCard" key={file.slug}>
              <h2>{file.title}</h2>
              <p className="muted">Protected download</p>
              {paid ? (
                <a className="button primary" href={`/api/download/${token}/${file.slug}`}>Download PDF</a>
              ) : (
                <button className="button secondary" disabled>Waiting for payment confirmation</button>
              )}
            </div>
          ))}
        </div>

        <div className="ctaRow">
          <Link className="button secondary" href="/docs/get-started-vps-setup.pdf">Open the free Setup PDF</Link>
        </div>
      </section>
    </main>
  );
}
