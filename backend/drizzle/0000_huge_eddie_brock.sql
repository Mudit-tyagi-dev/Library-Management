CREATE TABLE "books" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"authors" text[],
	"publish_year" integer,
	"edition_count" integer
);
