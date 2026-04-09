import Stripe from 'stripe';
import { requireEnv } from './env';

let stripeClient: Stripe | null = null;

export function getStripe() {
  if (!stripeClient) {
    stripeClient = new Stripe(requireEnv('STRIPE_SECRET_KEY'), {
      apiVersion: '2026-03-25.dahlia',
    });
  }
  return stripeClient;
}

export const TOOLKIT_FILES = [
  {
    slug: 'improve-memory',
    title: 'Improve Memory PDF',
    fileName: 'improve-memory-master-guide.pdf',
  },
  {
    slug: 'multi-agent-routing',
    title: 'Multi-Agent Routing PDF',
    fileName: 'multi-agent-team-guide.pdf',
  },
] as const;
