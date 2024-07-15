/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import { FC } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Icons } from '@/components/core';
import { ITemplates } from '@/app/static/templaets';
import { FormHeader } from '.';

type FromType = {
    fromFields: ITemplates['fromFields'];
    handleSubmit: ReturnType<typeof useForm>['handleSubmit'];
    form: ReturnType<typeof useForm>;
    isSubmitting: boolean;
    onSubmit: SubmitHandler<FieldValues>;
    control: ReturnType<typeof useForm>['control'];
};
interface IProps extends FromType, ITemplates {}

const TemplateForm: FC<IProps> = (props) => {
    const { handleSubmit, form, control, isSubmitting, onSubmit, fromFields, ...rest } = props;
    return (
        <section className='overflow-y-auto rounded-xl bg-gray-900/5 p-5 shadow-xl backdrop-blur-sm dark:bg-card'>
            <FormHeader fromFields={fromFields} {...rest} />
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
