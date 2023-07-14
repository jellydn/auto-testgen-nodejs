import { sqliteTable, index, uniqueIndex, text, integer } from "drizzle-orm/sqlite-core"

export const users = sqliteTable("users", {
  id: text("id").primaryKey().notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  createdAt: integer("createdAt"),
  updatedAt: integer("updatedAt"),
},
  (table) => {
    return {
      nameIdx: index("name_index").on(table.name),
      emailIdx: index("email_index").on(table.email),
      idUnique: uniqueIndex("users_id_unique").on(table.id),
      sqliteAutoindexUsers1: uniqueIndex("sqlite_autoindex_users_1").on(table.id),
    }
  });

