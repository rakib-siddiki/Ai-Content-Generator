import BackgroundShape from '@/components/core/Background';
import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { MobileSidebar, Sidebar } from './dashboard/components';
import OnChangeProvider from '@/providers/serch-result-Provider';
import { Toaster } from '@/components/ui/sonner';

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
