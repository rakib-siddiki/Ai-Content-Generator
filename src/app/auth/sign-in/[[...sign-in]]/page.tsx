'use client';
import * as Clerk from '@clerk/elements/common';
import * as SignIn from '@clerk/elements/sign-in';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { Icons } from '@/components/core';
import Form from '../../components/Form';
import { SigninVerification } from '../../components';

export default function SignUpPage() {
    return (
        <div className='grid h-dvh w-full grow place-items-center px-4 sm:justify-center'>
            <SignIn.Root>
                <Clerk.Loading>
                    {(isGlobalLoading) => (
                        <>
                            <SignIn.Step name='start'>
                                <Form
                                    isGlobalLoading={isGlobalLoading}
                                    email='identifier'
                                    title='Sign-in to your account'
                                    description='Welcome Back! Please fill in the details to get started.'
                                >
                                    <div className='grid w-full gap-y-4'>
                                        <SignIn.Action submit asChild>
                                            <Button disabled={isGlobalLoading}>
                                                <Clerk.Loading>
                                                    {(isLoading) => {
                                                        return isLoading ? (
                                                            <Icons.Loader className='size-4 animate-spin' />
                                                        ) : (
                                                            'Sign in'
                                                        );
                                                    }}
                                                </Clerk.Loading>
                                            </Button>
                                        </SignIn.Action>
                                        <Button variant='link' size='sm' asChild>
                                            <Link href='/auth/sign-up'>
                                                {" Don't"} have an account? Sign up
                                            </Link>
                                        </Button>
                                    </div>
                                </Form>
                            </SignIn.Step>
                            <SigninVerification isGlobalLoading={isGlobalLoading} />
                        </>
                    )}
                </Clerk.Loading>
            </SignIn.Root>
        </div>
    );
}
