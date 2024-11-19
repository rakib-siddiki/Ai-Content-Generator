import * as Clerk from '@clerk/elements/common';
import * as SignIn from '@clerk/elements/sign-in';
import React, { FC } from 'react';
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
const SigninVerification: FC<IProps> = ({ isGlobalLoading }) => {
    return (
        <>
            <SignIn.Step name='verifications'>
                <SignIn.Strategy name='email_code'>
                    <Card className='w-full dark:from-zinc-950 dark:to-slate-950 sm:w-96'>
                        <CardHeader>
                            <CardTitle>Check your email</CardTitle>
                            <CardDescription>
                                Enter the verification code sent to your email
                            </CardDescription>
                            <p className='text-sm text-muted-foreground'>
                                Welcome back <SignIn.SafeIdentifier />
                            </p>
                        </CardHeader>
                        <CardContent className='grid gap-y-4'>
                            <Clerk.Field name='code'>
                                <Clerk.Label className='sr-only'>
                                    Email verification code
                                </Clerk.Label>
                                <div className='grid items-center justify-center gap-y-2'>
                                    <div className='flex justify-center text-center'>
                                        <Clerk.Input
                                            type='otp'
                                            autoSubmit
                                            className='flex justify-center has-[:disabled]:opacity-50'
                                            render={({ value, status }) => {
                                                return (
                                                    <div
                                                        data-status={status}
                                                        className='relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md data-[status=cursor]:ring-1 data-[status=selected]:ring-1 data-[status=cursor]:ring-ring data-[status=selected]:ring-ring'
                                                    >
                                                        {value}
                                                    </div>
                                                );
                                            }}
                                        />
                                    </div>
                                    <Clerk.FieldError className='block text-center text-sm text-red-500' />
                                    <SignIn.Action
                                        asChild
                                        resend
                                        className='text-violet-500'
                                        fallback={({ resendableAfter }) => (
                                            <Button
                                                variant='link'
                                                size='sm'
                                                disabled
                                                className='text-violet-200'
                                            >
                                                Didn&apos;t recieve a code? Resend (
                                                <span className='tabular-nums'>
                                                    {resendableAfter}
                                                </span>
                                                )
                                            </Button>
                                        )}
                                    >
                                        <Button
                                            variant='link'
                                            size='sm'
                                            className='text-violet-500'
                                        >
                                            Didn&apos;t recieve a code? Resend
                                        </Button>
                                    </SignIn.Action>
                                </div>
                            </Clerk.Field>
                        </CardContent>
                        <CardFooter>
                            <div className='grid w-full gap-y-4'>
                                <SignIn.Action submit asChild>
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
                                </SignIn.Action>
                            </div>
                        </CardFooter>
                    </Card>
                </SignIn.Strategy>
            </SignIn.Step>
        </>
    );
};

export default SigninVerification;
