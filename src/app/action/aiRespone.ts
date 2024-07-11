'use server';

import { db } from '@/db';
import { InsertAIOutput, ai_output } from '@/db/schema';
import { getUser } from './getUser';

export const saveAiRespone = async (data: Omit<InsertAIOutput, 'created_by'>) => {
    const { ai_response, form_data, template_slug } = data;
    if (!ai_response || !form_data || !template_slug) {
        return { error: 'All fields are required' };
    }
    const { primaryEmailAddress } = await getUser();
    const user = primaryEmailAddress?.emailAddress;
    if (!user) {
        throw new Error('No user found');
    }
    const res = await db.insert(ai_output).values({
        ai_response,
        form_data,
        template_slug,
        created_by: user,
        updated_at: new Date().toISOString(),
    });
    return res;
};
