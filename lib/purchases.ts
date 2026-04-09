import { nanoid } from 'nanoid';
import { getDb, type PurchaseRecord } from './db';

function accessExpiryIso() {
  const days = Number(process.env.ACCESS_TOKEN_EXPIRY_DAYS || '30');
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000);
  return expires.toISOString();
}

export async function createPendingPurchase(params: {
  email?: string | null;
  stripeSessionId: string;
  amountTotal?: number | null;
  currency?: string | null;
  metadata?: Record<string, unknown>;
}) {
  const db = getDb();
  const accessToken = nanoid(32);
  const now = new Date().toISOString();

  const { error } = await db.from('purchases').insert({
    email: params.email ?? null,
    stripe_session_id: params.stripeSessionId,
    amount_total: params.amountTotal ?? null,
    currency: params.currency ?? null,
    status: 'pending',
    access_token: accessToken,
    access_expires_at: accessExpiryIso(),
    created_at: now,
    metadata_json: params.metadata ? JSON.stringify(params.metadata) : null,
  });

  if (error) throw error;

  return getPurchaseBySessionId(params.stripeSessionId);
}

export async function markPurchasePaid(params: {
  stripeSessionId: string;
  stripePaymentIntentId?: string | null;
  email?: string | null;
  amountTotal?: number | null;
  currency?: string | null;
}) {
  const db = getDb();
  const now = new Date().toISOString();

  const { error } = await db
    .from('purchases')
    .update({
      status: 'paid',
      stripe_payment_intent_id: params.stripePaymentIntentId ?? null,
      email: params.email ?? null,
      amount_total: params.amountTotal ?? null,
      currency: params.currency ?? null,
      paid_at: now,
    })
    .eq('stripe_session_id', params.stripeSessionId);

  if (error) throw error;

  return getPurchaseBySessionId(params.stripeSessionId);
}

export async function getPurchaseBySessionId(sessionId: string) {
  const db = getDb();
  const { data, error } = await db.from('purchases').select('*').eq('stripe_session_id', sessionId).maybeSingle();
  if (error) throw error;
  return data as PurchaseRecord | null;
}

export async function getPurchaseByAccessToken(token: string) {
  const db = getDb();
  const { data, error } = await db.from('purchases').select('*').eq('access_token', token).maybeSingle();
  if (error) throw error;
  return data as PurchaseRecord | null;
}

export async function hasActivePaidAccess(token: string) {
  const purchase = await getPurchaseByAccessToken(token);
  if (!purchase) return null;
  if (purchase.status !== 'paid') return purchase;
  if (purchase.access_expires_at && new Date(purchase.access_expires_at).getTime() < Date.now()) return purchase;
  return purchase;
}
