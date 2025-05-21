create table if not exists public.list_collaborators (
  list_id uuid references public.lists(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  added_at timestamp with time zone default now(),
  primary key (list_id, user_id)
);
