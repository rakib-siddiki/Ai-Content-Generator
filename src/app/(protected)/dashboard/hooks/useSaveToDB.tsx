import { useState } from 'react';
import { toast } from 'sonner';
import { saveAiResponse } from '@/app/action/aiResponse';

interface IProps {
    aiResponseData: {
        ai_response: string;
        form_data: string;
        template_slug: string;
    };
}

const useSaveToDB = ({ aiResponseData }: IProps) => {
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const handleSaveData = async (isEditedContent?: string) => {
        const { ai_response, form_data, template_slug } = aiResponseData;
        const aiResponseModifiedData = isEditedContent || ai_response;
        if (!aiResponseModifiedData || !form_data || !template_slug) {
            toast('No data to save', {
                style: {
                    background: 'red',
                    color: 'white',
                },
            });
            return;
        }
        try {
            setIsSaving(true);
            const savedData = await saveAiResponse({
                ...aiResponseData,
                ai_response: aiResponseModifiedData,
            });
            if (savedData && 'command' in savedData && savedData.command === 'INSERT') {
                toast('AI Response saved successfully', {
                    style: {
                        background: 'green',
                        color: 'white',
                    },
                });
            } else {
                toast('Failed to save AI response', {
                    style: {
                        background: 'red',
                        color: 'white',
                    },
                });
            }
        } catch (error) {
            console.log('🚀 > file: useTemplateForm.tsx:104 > handleSaveData > error:', error);
            toast('An error occurred while saving AI response', {
                style: {
                    background: 'red',
                    color: 'white',
                },
            });
        } finally {
            setIsSaving(false);
        }
    };
    return { handleSaveData, isSaving };
};

export default useSaveToDB;
