import * as Clerk from '@clerk/elements/common';
import * as SignUp from '@clerk/elements/sign-up';
import React, { FC } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Icons } from '@/components/core';

interface IProps {
    isGlobalLoading: boolean;
}
const signupVerification: FC<IProps> = ({ isGlobalLoading }) => {
    return (
        <div>
            <SignUp.Step name='verifications'>
                <SignUp.Strategy name='email_code'>
                    <Card className='w-full dark:from-zinc-950 dark:to-slate-950 sm:w-96'>
                        <CardHeader>
                            <CardTitle>Verify your email</CardTitle>
                            <CardDescription>
                                Use the verification link sent to your email address
                            </CardDescription>
                        </CardHeader>
                        <CardContent className='grid gap-y-4'>
                            <div className='grid items-center justify-center gap-y-2'>
                                <Clerk.Field name='code' className='space-y-2'>
                                    <Clerk.Label className='sr-only'>Email address</Clerk.Label>
                                    <div className='flex justify-center text-center'>
                                        <Clerk.Input
                                            type='otp'
                                            className='flex justify-center has-[:disabled]:opacity-50'
                                            autoSubmit
                                            render={({ value, status }) => {
                                                return (
                                                    <div
                                                        data-status={status}
                                                        className={cn(
                                                            'relative flex size-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
                                                            {
                                                                'z-10 ring-2 ring-ring ring-offset-background':
                                                                    status === 'cursor' ||
                                                                    status === 'selected',
                                                            },
                                                        )}
                                                    >
                                                        {value}
                                                        {status === 'cursor' && (
                                                            <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
                                                                <div className='h-4 w-px animate-caret-blink bg-foreground duration-1000' />
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            }}
                                        />
                                    </div>
                                    <Clerk.FieldError className='block text-center text-sm text-red-500' />
                                </Clerk.Field>
                                <SignUp.Action
                                    asChild
                                    resend
                                    className='text-violet-500'
                                    fallback={({ resendableAfter }) => (
                                        <Button
                                            className='text-violet-200'
                                            variant='link'
                                            size='sm'
                                            disabled
                                        >
                                            Didn&apos;t recieve a code? Resend (
                                            <span className='tabular-nums'>{resendableAfter}</span>)
                                        </Button>
                                    )}
                                >
                                    <Button type='button' variant='link' size='sm'>
                                        Didn&apos;t recieve a code? Resend
                                    </Button>
                                </SignUp.Action>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <div className='grid w-full gap-y-4'>
                                <SignUp.Action submit asChild>
                                    <Button disabled={isGlobalLoading}>
                                        <Clerk.Loading>
                                            {(isLoading) => {
                                                return isLoading ? (
                                                    <Icons.Loader className='size-4 animate-spin' />
                                                ) : (
                                                    'Continue'
                                                );
                                            }}
                                        </Clerk.Loading>
                                    </Button>
                                </SignUp.Action>
                            </div>
                        </CardFooter>
                    </Card>
                </SignUp.Strategy>
            </SignUp.Step>
        </div>
    );
};

export default signupVerification;
