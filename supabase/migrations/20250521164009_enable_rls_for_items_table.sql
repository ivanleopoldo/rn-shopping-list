alter table public.items enable row level security;

-- SELECT
create policy "View items in accessible lists"
  on public.items for select using (
    exists (
      select 1 from public.lists
      where id = items.list_id
      and (
        owner_id = auth.uid()
        or exists (
          select 1 from public.list_collaborators
          where list_id = items.list_id and user_id = auth.uid()
        )
      )
    )
  );

-- INSERT
create policy "Insert items into accessible lists"
  on public.items for insert with check (
    created_by = auth.uid()
    and exists (
      select 1 from public.lists
      where id = items.list_id
      and (
        owner_id = auth.uid()
        or exists (
          select 1 from public.list_collaborators
          where list_id = items.list_id and user_id = auth.uid()
        )
      )
    )
  );

-- UPDATE
create policy "Update items in accessible lists"
  on public.items for update using (
    exists (
      select 1 from public.lists
      where id = items.list_id
      and (
        owner_id = auth.uid()
        or exists (
          select 1 from public.list_collaborators
          where list_id = items.list_id and user_id = auth.uid()
        )
      )
    )
  );

-- DELETE
create policy "Delete items in accessible lists"
  on public.items for delete using (
    exists (
      select 1 from public.lists
      where id = items.list_id
      and (
        owner_id = auth.uid()
        or exists (
          select 1 from public.list_collaborators
          where list_id = items.list_id and user_id = auth.uid()
        )
      )
    )
  );
