'use client';

import * as Clerk from '@clerk/elements/common';
import * as SignUp from '@clerk/elements/sign-up';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/core';
import { SignupVerification } from '../../components';
import Form from '../../components/Form';

export default function SignUpPage() {
    return (
        <div className='grid h-dvh w-full grow place-items-center px-4 sm:justify-center'>
            <SignUp.Root>
                <Clerk.Loading>
                    {(isGlobalLoading) => (
                        <>
                            <SignUp.Step name='start'>
                                <Form
                                    title='Create your account'
                                    description='Welcome! Please fill in the details to get started.'
                                    isGlobalLoading={isGlobalLoading}
                                    email='emailAddress'
                                >
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
                                        <Button variant='link' size='sm' asChild>
                                            <Link href='/auth/sign-in'>
                                                Already have an account? Sign in
                                            </Link>
                                        </Button>
                                    </div>
                                </Form>
                            </SignUp.Step>

                            <SignUp.Step name='continue'>
                                <Card className='w-full dark:from-zinc-950 dark:to-slate-950 sm:w-96'>
                                    <CardHeader>
                                        <CardTitle>Continue registration</CardTitle>
                                    </CardHeader>
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
                            </SignUp.Step>

                            <SignupVerification isGlobalLoading={isGlobalLoading} />
                        </>
                    )}
                </Clerk.Loading>
            </SignUp.Root>
        </div>
    );
}
