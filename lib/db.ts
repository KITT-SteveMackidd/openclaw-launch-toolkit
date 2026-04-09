import { createClient } from '@supabase/supabase-js';

export type PurchaseRecord = {
  id: number;
  email: string | null;
  stripe_session_id: string;
  stripe_payment_intent_id: string | null;
  amount_total: number | null;
  currency: string | null;
  status: string;
  access_token: string;
  access_expires_at: string | null;
  created_at: string;
  paid_at: string | null;
  metadata_json: string | null;
};

let supabaseAdmin: ReturnType<typeof createClient> | null = null;

export function getDb() {
  if (!supabaseAdmin) {
    const url = process.env.SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !serviceRoleKey) {
      throw new Error('Missing Supabase configuration. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.');
    }

    supabaseAdmin = createClient(url, serviceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }

  return supabaseAdmin;
}
