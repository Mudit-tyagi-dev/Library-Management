import { pgTable, serial, varchar, integer, text } from "drizzle-orm/pg-core";

export const books = pgTable("books", {
  id: serial("id").primaryKey(),
  // Core book info
  title: varchar("title", { length: 500 }).notNull(),
  author: varchar("author", { length: 255 }),
  publish_year: integer("publish_year"),
  copies: integer("copies").default(0).notNull(),
});
