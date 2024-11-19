import * as Clerk from '@clerk/elements/common';
import React, { FC, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Icons } from '@/components/core';

interface IProps {
    title: string;
    description: string;
    isGlobalLoading: boolean;
    email: 'emailAddress' | 'identifier';
    children: ReactNode;
}
const Form: FC<IProps> = ({ title, description, isGlobalLoading, email, children }) => {
    return (
        <Card className='w-full dark:from-zinc-950 dark:to-slate-950 sm:w-96'>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className='grid gap-y-4'>
                <div className='grid grid-cols-2 gap-x-4'>
                    <Clerk.Connection name='github' asChild>
                        <Button
                            size='sm'
                            variant='outline'
                            type='button'
                            disabled={isGlobalLoading}
                        >
                            <Clerk.Loading scope='provider:github'>
                                {(isLoading) =>
                                    isLoading ? (
                                        <Icons.Loader className='size-4 animate-spin' />
                                    ) : (
                                        <>
                                            <Icons.GitHub className='mr-2 size-4' />
                                            GitHub
                                        </>
                                    )
                                }
                            </Clerk.Loading>
                        </Button>
                    </Clerk.Connection>
                    <Clerk.Connection name='google' asChild>
                        <Button
                            size='sm'
                            variant='outline'
                            type='button'
                            disabled={isGlobalLoading}
                        >
                            <Clerk.Loading scope='provider:google'>
                                {(isLoading) =>
                                    isLoading ? (
                                        <Icons.Loader className='size-4 animate-spin' />
                                    ) : (
                                        <>
                                            <Icons.Google className='mr-2 size-4' />
                                            Google
                                        </>
                                    )
                                }
                            </Clerk.Loading>
                        </Button>
                    </Clerk.Connection>
                </div>
                <p className='flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border'>
                    or
                </p>
                <Clerk.Field name={email} className='space-y-2'>
                    <Clerk.Label asChild>
                        <Label>Email address</Label>
                    </Clerk.Label>
                    <Clerk.Input type='email' required asChild>
                        <Input />
                    </Clerk.Input>
                    <Clerk.FieldError className='block text-sm text-red-500' />
                </Clerk.Field>
            </CardContent>
            <CardFooter>{children}</CardFooter>
        </Card>
    );
};

export default Form;
