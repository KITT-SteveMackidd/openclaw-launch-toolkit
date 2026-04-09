import './globals.css';
import type { Metadata } from 'next';

const siteTitle = 'OpenClaw Launch Toolkit | Practical AI Help for Beginners';
const siteDescription = 'OpenClaw Launch Toolkit helps beginners use OpenClaw for outreach, summaries, content, and repeatable workflows without technical overwhelm.';
const siteUrl = 'https://openclaw-launch-toolkit.vercel.app';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    'OpenClaw Launch Toolkit',
    'OpenClaw toolkit',
    'OpenClaw guide',
    'beginner OpenClaw guide',
    'OpenClaw for non-technical users',
    'AI help for marketers',
    'AI help for sales teams',
    'AI workflow toolkit',
    'AI assistant setup',
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: 'OpenClaw Launch Toolkit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
