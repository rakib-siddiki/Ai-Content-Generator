/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';
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
import { Textarea } from '@/components/ui/textarea';
import { Icons } from '@/components/core';
import { useTemplateForm } from '@/app/(protected)/dashboard/hooks';

interface IProps extends ITemplates {
    getOutput: (value: string) => void;
}

const TemplateForm: FC<IProps> = (props) => {
    const { handleSubmit, form, control, isSubmitting, onSubmit, fromFields } =
        useTemplateForm(props);
    return (
        <section className='overflow-y-auto rounded-xl bg-gray-900/5 p-5 shadow-xl backdrop-blur-sm dark:bg-card'>
            <FormHeader {...props} />
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                    {fromFields.map((field) => (
                        <FormField
                            key={field.name}
                            control={control}
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
                    <Button
                        type='submit'
                        variant='grediant'
                        className='w-full'
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <Icons.Loader className='mr-1 size-4 animate-spin' /> Generating...
                            </>
                        ) : (
                            'Generate'
                        )}
                    </Button>
                </form>
            </Form>
        </section>
    );
};

export default TemplateForm;
