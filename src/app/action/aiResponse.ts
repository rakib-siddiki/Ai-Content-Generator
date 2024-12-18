'use server';

import { db } from '@/db';
import { ai_output } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { getUser } from './getUser';

type TData = {
    ai_response:
        | string
        | {
              error: string;
          };
    form_data: string;
    template_slug: string;
};
export const saveAiResponse = async (data: TData) => {
    try {
        const { ai_response, form_data, template_slug } = data;
        if (typeof ai_response !== 'string') {
            return { error: 'Invalid AI response' };
        }
        const { primaryEmailAddress } = await getUser();
        const user = primaryEmailAddress?.emailAddress;
        if (!user) return { error: 'Something went wrong. Please try again later.' };
        const res = await db.insert(ai_output).values({
            ai_response,
            form_data,
            template_slug,
            created_by: user,
            updated_at: new Date().toISOString(),
        });
        revalidatePath('/dashboard/history');
        return res;
    } catch (error) {
        return { error: 'Something went wrong. Please try again later.' };
    }
};
export const updateApiResponse = async (data: TData) => {
    try {
        const { ai_response, form_data, template_slug } = data;
        if (typeof ai_response !== 'string') {
            return { error: 'Invalid AI response' };
        }
        const { primaryEmailAddress } = await getUser();
        const user = primaryEmailAddress?.emailAddress;
        if (!user) return { error: 'Something went wrong. Please try again later.' };
        const res = await db
            .update(ai_output)
            .set({ ai_response, form_data, template_slug, updated_at: new Date().toISOString() })
            .where(eq(ai_output.created_by, user));
        revalidatePath('/dashboard/history');
        return res;
    } catch (error) {
        return { error: 'Something went wrong. Please try again later.' };
    }
};
