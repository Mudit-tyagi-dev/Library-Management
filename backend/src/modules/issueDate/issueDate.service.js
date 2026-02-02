import { db } from "../../db/index.js";
import { issuedate } from "./issue.schema.js";
import { eq } from "drizzle-orm";

export const issueBook = async ({ userId, bookId }) => {
  const activeIssue = await db
    .select()
    .from(issuedate)
    .where(eq(issuedate.bookId, bookId));

  if (activeIssue.length) {
    throw new Error("Book already issued");
  }

  return await db
    .insert(issuedate)
    .values({ userId, bookId })
    .returning();
};

export const getAllIssuedBooks = async () => {
  return await db.select().from(issuedate);
};


