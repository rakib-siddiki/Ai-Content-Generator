import BackgroundShape from '@/components/core/Background';
import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='relative min-h-screen'>
            <ClerkProvider>
                <BackgroundShape />
                {children}
            </ClerkProvider>
        </main>
    );
};

export default PublicLayout;
