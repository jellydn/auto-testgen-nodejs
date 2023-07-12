import { index, sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id"),
  name: text("name").notNull(),
  email: text("email").notNull(),
  createdAt: integer("created_at_utc").notNull(),
},
  (table) => ({
    idx1: index("email_index").on(table.email),
    idx2: index("name_index").on(table.name),
  })
);
