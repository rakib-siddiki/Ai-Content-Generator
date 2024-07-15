import { useState } from 'react';
import { toast } from 'sonner';
import { saveAiRespone } from '@/app/action/aiRespone';

interface IProps {
    aiResponeData: {
        ai_response: string;
        form_data: string;
        template_slug: string;
    };
}

const useSaveToDB = ({ aiResponeData }: IProps) => {
    const [isSaveing, setIsSaveing] = useState<boolean>(false);
    const handleSaveData = async (isEditedContent?: string) => {
        const { ai_response, form_data, template_slug } = aiResponeData;
        const aiResponeModifiedData = isEditedContent ? isEditedContent : ai_response;
        if (!aiResponeModifiedData || !form_data || !template_slug) {
            toast('No data to save', {
                style: {
                    background: 'red',
                    color: 'white',
                },
            });
            return;
        }
        try {
            setIsSaveing(true);
            const savedData = await saveAiRespone({
                ...aiResponeData,
                ai_response: aiResponeModifiedData,
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
            setIsSaveing(false);
        }
    };
    return { handleSaveData, isSaveing };
};

export default useSaveToDB;
