'use server';

import { chatSession } from '@/lib/aiModel';

export const generateAiResponse = async (prompt: string) => {
    try {
        const result = await chatSession.sendMessage(prompt);
        return result.response.text();
    } catch (error) {
        if (error instanceof Error && error.message.includes('504')) {
            return { error: 'The AI service timed out. Please try again later.' };
        }
        return { error: 'Something went wrong with the AI. Please try again later.' };
    }
};
