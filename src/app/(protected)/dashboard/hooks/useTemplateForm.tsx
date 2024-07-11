'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { generateAiResponse } from '@/app/action/generateAiResponse';
import { saveAiRespone } from '@/app/action/aiRespone';
import { TTemplateFromSchema, createSchema } from '../templates/[slug]/schema';
import { ITemplates } from '@/app/static/templaets';
import { toast } from 'sonner';
interface IProps extends ITemplates {
    getOutput: (value: string) => void;
}
const useTemplateForm = (template: IProps) => {
    const { fromFields, getOutput, slug, prompt } = template;
    const dynamicSchema = createSchema(fromFields);
    const form = useForm<TTemplateFromSchema>({
        resolver: zodResolver(dynamicSchema),
        defaultValues: fromFields.reduce(
            (acc, field) => {
                acc[field.name] = '';
                return acc;
            },
            {} as Record<string, string>,
        ),
    });
    const {
        handleSubmit,
        control,
        formState: { isSubmitting },
    } = form;
    const onSubmit = async (values: TTemplateFromSchema) => {
        const currentPrompt = prompt;
        const formData = JSON.stringify(values);
        const finalPrompt = `${formData},${currentPrompt}`;
        const aiResponse = await generateAiResponse(finalPrompt);

        const data = {
            ai_response: aiResponse,
            form_data: formData,
            template_slug: slug,
        };
        const savedData = await saveAiRespone(data);
        if (savedData && 'command' in savedData && savedData.command === 'INSERT') {
            toast('AI Response saved successfully', {
                style: {
                    background: 'green',
                    color: 'white',
                },
            });
        }

        getOutput(aiResponse);
    };
    return { form, handleSubmit, control, onSubmit, isSubmitting, fromFields };
};

export default useTemplateForm;
