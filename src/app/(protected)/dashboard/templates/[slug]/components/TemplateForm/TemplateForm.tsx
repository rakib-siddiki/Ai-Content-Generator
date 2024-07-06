/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { ITemplates } from '@/app/static/templaets';
import { FC } from 'react';
import { FormHeader } from '.';
import { TTemplateFromSchema, createSchema } from '../../schema';
import { Textarea } from '@/components/ui/textarea';

interface IProps extends ITemplates {}

const TemplateForm: FC<IProps> = (template) => {
    const { fromFields } = template;
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
    function onSubmit(values: TTemplateFromSchema) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }
    return (
        <section className='mx-3 max-h-[80%] overflow-y-auto rounded-xl bg-zinc-200/50 p-5 shadow-xl backdrop-blur-md dark:bg-card'>
            <FormHeader {...template} />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                    {fromFields.map((field) => (
                        <FormField
                            key={field.name}
                            control={form.control}
                            name={field.name}
                            render={({ field: formField }) => (
                                <FormItem>
                                    <FormLabel>{field.label}</FormLabel>
                                    <FormControl>
                                        <>
                                            {field.type === 'input' && (
                                                <Input
                                                    className='border-gray-100 dark:border-border'
                                                    {...formField}
                                                />
                                            )}
                                            {field.type === 'textarea' && (
                                                <Textarea
                                                    className='h-32 resize-none border-gray-100 dark:border-border'
                                                    {...formField}
                                                />
                                            )}
                                            {field.type === 'select' && (
                                                <Select
                                                    {...formField}
                                                    onValueChange={formField.onChange}
                                                >
                                                    <SelectTrigger className='border-gray-100 dark:border-border'>
                                                        <SelectValue
                                                            placeholder={'Select an option'}
                                                        />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            {field.options?.map((option) => (
                                                                <SelectItem
                                                                    key={option}
                                                                    value={option}
                                                                >
                                                                    {option}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        </>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                    <Button type='submit' variant='grediant' className='w-full'>
                        Submit
                    </Button>
                </form>
            </Form>
        </section>
    );
};

export default TemplateForm;
