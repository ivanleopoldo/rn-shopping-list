alter table public.lists enable row level security;

-- SELECT
create policy "Owner or collaborator can read"
  on public.lists
  for select
  using (
    auth.uid() = owner_id
    or exists (
      select 1 from public.list_collaborators
      where list_id = lists.id and user_id = auth.uid()
    )
  );


-- INSERT (only allow creating lists for oneself)
create policy "User can insert their own lists"
  on public.lists
  for insert
  with check (auth.uid() = owner_id);

-- UPDATE
create policy "Owner or collaborator can update"
  on public.lists
  for update
  using (
    auth.uid() = owner_id
    or exists (
      select 1 from public.list_collaborators
      where list_id = lists.id and user_id = auth.uid()
    )
  );

-- DELETE (only owner can delete)
create policy "Only owner can delete"
  on public.lists
  for delete
  using (auth.uid() = owner_id);
