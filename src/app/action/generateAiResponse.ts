'use server';

import { chatSession } from '@/lib/aiModel';

export const generateAiResponse = async (prompt: string) => {
    const result = await chatSession.sendMessage(prompt);
    return result.response.text();
};
