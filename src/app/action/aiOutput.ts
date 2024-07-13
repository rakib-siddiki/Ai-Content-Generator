'use server';

import { db } from '@/db';
import { ai_output } from '@/db/schema';
import { desc, eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
export const getData = async () => {
    const res = db.query.ai_output.findMany({
        orderBy: [desc(ai_output.created_at)],
    });
    revalidatePath('/dashboard/history');
    return res;
};

export const deleteData = async (id: string) => {
    const res = await db.delete(ai_output).where(eq(ai_output.id, id));
    if (!res) throw new Error('Failed to delete data');
    revalidatePath('/dashboard/history');
    return { message: 'Data deleted successfully' };
};
