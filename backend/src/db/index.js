import '@dotenvx/dotenvx/config'
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// 1. Import all your schemas
import * as bookschema from '../modules/book/book.schema.js';

import * as userschema from "../modules/user/user.schema.js";
import * as issueschema from "../modules/issueDate/issue.schema.js";

console.log("DB URL:", process.env.DATABASE_URL);
const sql = neon(process.env.DATABASE_URL);
export const db = drizzle({ client: sql });

// 2. Pass the combined schema to the drizzle function
// export const db = drizzle(sql, { 
//   schema: { 
//     ...bookschema, 
//     ...userschema, 
//     ...issueschema 
//   } 
// });