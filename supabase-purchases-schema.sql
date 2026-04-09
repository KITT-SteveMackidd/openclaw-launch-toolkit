create table if not exists public.purchases (
  id bigserial primary key,
  email text,
  stripe_session_id text unique not null,
  stripe_payment_intent_id text,
  amount_total integer,
  currency text,
  status text not null default 'pending',
  access_token text unique not null,
  access_expires_at timestamptz,
  created_at timestamptz not null default now(),
  paid_at timestamptz,
  metadata_json jsonb
);

create index if not exists idx_purchases_access_token on public.purchases(access_token);
create index if not exists idx_purchases_status on public.purchases(status);
