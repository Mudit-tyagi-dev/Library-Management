import { pgTable, serial, integer, date } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { users } from "../user/user.schema.js";
import { books } from "../book/book.schema.js";

export const issuedate = pgTable("issuedate", {
  issueId: serial("issue_id").primaryKey(),

  userId: integer("users_id")
    .references(() => users.users_id)
    .notNull(),

  bookId: integer("book_id")
    .references(() => books.id)
    .notNull(),

  issueDate: date("issue_date")
    .default(sql`CURRENT_DATE`)
    .notNull(),

  returnDate: date("return_date")
    .default(sql`CURRENT_DATE + INTERVAL '7 days'`)
});
