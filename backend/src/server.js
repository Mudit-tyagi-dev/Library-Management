import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { db } from "./db/index.js"; // drizzle db

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // optional DB check
    await db.execute("select 1");

    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error(" Server failed:", err);
    process.exit(1);
  }
};

startServer();
