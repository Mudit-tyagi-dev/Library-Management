import { db } from '../../db/index.js'
import { users } from './user.schema.js'
import { eq } from 'drizzle-orm'
export const getusers = async()=>{
    const allusers = await db.select().from(users);
    return allusers;
}
export const createuser =async(userData)=>{
    const newUser = await db.insert(users).values(userData).returning();
    return newUser;
}
// export const deleteuser = async(userId)=>{
//     await db.delete(users).where(eq(users.users_id , userId));
//     return;
// }
export const getuserById = async (id)=>{
    return await db.select().from(users).where(eq(users.users_id, id));

}
