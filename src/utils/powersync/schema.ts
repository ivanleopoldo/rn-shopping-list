import { column, Schema, Table } from '@powersync/react-native';

const lists = new Table({
  name: column.text,
  created_at: column.text,
  owner_id: column.text,
});

const items = new Table({
  name: column.text,
  list_id: column.text,
  created_at: column.text,
  completed_at: column.text,
  completed_by: column.text,
  created_by: column.text,
});

const list_collaborators = new Table({
  list_id: column.text,
  user_id: column.text,
  added_at: column.text,
});

export const schema = new Schema({
  lists,
  items,
  list_collaborators,
});

export type Database = (typeof schema)['types'];
export type TItem = Database['items'];
export type TList = Database['lists'];
export type TListCollaborator = Database['list_collaborators'];
