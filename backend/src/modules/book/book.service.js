import {db} from '../../db/index.js';
import {books} from './book.schema.js'
import { eq } from 'drizzle-orm';
export const getAllBooks = async () => {
    return await db.select().from(books);
};
export const getBookbyId = async (id)=>{
    return await db.select().from(books).where(eq(books.id, id));

}
