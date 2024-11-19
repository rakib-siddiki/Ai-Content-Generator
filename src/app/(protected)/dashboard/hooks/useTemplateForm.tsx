'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { generateAiResponse } from '@/app/action/generateAiResponse';
import { ITemplates } from '@/app/static/templaets';
import { createSchema, TTemplateFromSchema } from '../templates/[slug]/schema';

interface IProps extends ITemplates {
    getOutput: (value: string) => void;
    storedFormData?: string;
    savedAiResponse?: string;
}
const useTemplateForm = (props: IProps) => {
    const { fromFields, getOutput, slug, prompt, storedFormData, savedAiResponse } = props;
    const [aiResponseData, setAiResponseData] = useState({
        ai_response: savedAiResponse ?? '',
        form_data: storedFormData ?? '',
        template_slug: slug ?? '',
    });
    const dynamicSchema = createSchema(fromFields);

    const storedFormDataJson =
        !!storedFormData && (JSON.parse(storedFormData) as ITemplates['fromFields']);

    const dynamicFields = fromFields.reduce(
        (acc, field) => {
            acc[field.name] = '';
            return acc;
        },
        {} as Record<string, string>,
    );

    const defaultValues = storedFormDataJson || dynamicFields;

    const form = useForm<TTemplateFromSchema>({
        resolver: zodResolver(dynamicSchema),
        defaultValues,
    });
    const {
        handleSubmit,
        control,
        formState: { isSubmitting },
    } = form;
    const onSubmit = async (values: TTemplateFromSchema) => {
        try {
            const currentPrompt = prompt;
            const formData = JSON.stringify(values);
            const finalPrompt = `${formData},${currentPrompt}`;
            const aiResponse = await generateAiResponse(finalPrompt);
            if (typeof aiResponse === 'object' && 'error' in aiResponse) {
                toast(aiResponse.error, {
                    style: {
                        background: 'red',
                        color: 'white',
                    },
                });
                return;
            }

            setAiResponseData({
                ai_response: aiResponse,
                form_data: formData,
                template_slug: slug,
            });

            getOutput(aiResponse);
        } catch (error) {
            // Handle specific 504 Gateway Timeout error
            if (error instanceof Error && error.message.includes('504')) {
                toast('The AI service timed out. Please try again later.', {
                    style: {
                        background: 'orange',
                        color: 'white',
                    },
                });
            } else {
                // Generic error handling
                toast('An error occurred while generating AI response', {
                    style: {
                        background: 'red',
                        color: 'white',
                    },
                });
            }
        }
    };
    return { form, handleSubmit, control, onSubmit, isSubmitting, fromFields, aiResponseData };
};

export default useTemplateForm;
