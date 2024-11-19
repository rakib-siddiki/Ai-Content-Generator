import OnChangeProvider from '@/providers/serch-result-Provider';
import { ClerkProvider } from '@clerk/nextjs';
import React from 'react';
import { Toaster } from '@/components/ui/sonner';
import BackgroundShape from '@/components/core/Background';
import { MobileSidebar, Sidebar } from './dashboard/components';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className='relative min-h-screen'>
            <ClerkProvider>
                <BackgroundShape />
                <section className='grid h-full min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
                    <Sidebar />
                    <section className='grid h-full max-h-screen w-full grid-cols-1 overflow-y-auto [grid-template-rows:max-content]'>
                        <OnChangeProvider>
                            <MobileSidebar />
                            {children}
                        </OnChangeProvider>
                    </section>
                </section>
                <Toaster />
            </ClerkProvider>
        </section>
    );
};

export default PublicLayout;
