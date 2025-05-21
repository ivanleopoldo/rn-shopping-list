alter table public.list_collaborators enable row level security;

-- SELECT
create policy "Collaborators can see shared list collaborators"
  on public.list_collaborators
  for select
  using (
    exists (
      select 1 from public.lists
      where id = list_collaborators.list_id
      and (
        auth.uid() = owner_id
        or exists (
          select 1 from public.list_collaborators as lc2
          where lc2.list_id = list_collaborators.list_id and lc2.user_id = auth.uid()
        )
      )
    )
  );

-- INSERT
create policy "Only owner can add collaborators"
  on public.list_collaborators
  for insert
  with check (
    exists (
      select 1 from public.lists
      where id = list_collaborators.list_id and owner_id = auth.uid()
    )
  );

-- DELETE
create policy "Only owner can remove collaborators"
  on public.list_collaborators
  for delete
  using (
    exists (
      select 1 from public.lists
      where id = list_collaborators.list_id and owner_id = auth.uid()
    )
  );

