import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OpenClaw Launch Toolkit',
  description: 'A focused OpenClaw toolkit bundle with practical guides for setup, memory, and multi-agent routing.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
