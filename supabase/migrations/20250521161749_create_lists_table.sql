create table if not exists public.lists (
  id uuid not null default gen_random_uuid(),
  primary key(id),

  owner_id uuid references auth.users(id) on delete cascade,
  name text not null,
  created_at timestamp with time zone not null default now()
);
