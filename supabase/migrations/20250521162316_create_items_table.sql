create table if not exists public.items (
  id uuid primary key default gen_random_uuid(),

  created_at timestamp with time zone not null default now(),
  completed_at timestamp with time zone default null,
  completed_by uuid references auth.users(id) on delete set null,
  created_by uuid references auth.users(id) on delete set null,
  name text not null,

  list_id uuid references public.lists(id) on delete cascade
);

