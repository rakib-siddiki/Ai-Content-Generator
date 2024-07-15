'use server';

import { db } from '@/db';
import { ai_output } from '@/db/schema';
import { desc, eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { getUser } from './getUser';

export const getData = async () => {
    try {
        const { primaryEmailAddress } = await getUser();
        const user = primaryEmailAddress?.emailAddress;
        if (!user) return { error: 'Something went wrong. Please try again later.' };
        const res = await db.query.ai_output.findMany({
            where: eq(ai_output.created_by, user),
            orderBy: [desc(ai_output.created_at)],
        });
        revalidatePath('/dashboard/history');
        return res;
    } catch (error) {
        return { error: 'Something went wrong. Please try again later.' };
    }
};

export const getDataById = async (id: string) => {
    try {
        const res = await db.query.ai_output.findFirst({
            where: eq(ai_output.id, id),
        });
        return res;
    } catch (error) {
        return { error: 'Something went wrong. Please try again later.' };
    }
};

export const deleteData = async (id: string) => {
    try {
        const res = await db.delete(ai_output).where(eq(ai_output.id, id));
        if (!res) throw new Error('Failed to delete data');
        revalidatePath('/dashboard/history');
        return { message: 'Data deleted successfully' };
    } catch (error) {
        return { error: 'Something went wrong. Please try again later.' };
    }
};
