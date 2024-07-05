import { ClerkProvider } from '@clerk/nextjs';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <ClerkProvider>{children}</ClerkProvider>
        </main>
    );
};

export default AuthLayout;
