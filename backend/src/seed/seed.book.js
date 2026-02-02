import '@dotenvx/dotenvx/config'
import { db } from "../db/index.js";
import { books } from "../modules/book/book.schema.js";
import { drizzle } from 'drizzle-orm/neon-http';

const API_URL = "https://openlibrary.org/search.json?q=india&limit=100";

const seedbook = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error(`API failed: ${res.status}`);

  const data = await res.json();

  const bookData = data.docs.map((b) => ({
    title: b.title?.trim(),
    author: b.author_name?.[0]?.trim() ?? null,
    publish_year: b.first_publish_year ?? null,
  }));
  await db.insert(books).values(bookData);

  console.log("Books seeded successfully");
};

seedbook()
