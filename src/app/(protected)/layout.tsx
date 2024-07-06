import BackgroundShape from '@/components/core/Background';
import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { MobileSidebar, Sidebar } from './dashboard/components';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='relative min-h-screen'>
            <ClerkProvider>
                <BackgroundShape />
                <section className='grid h-full min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
                    <Sidebar />
                    <div className='no-scrollbar grid h-full max-h-screen w-full grid-cols-1 overflow-y-auto'>
                        <MobileSidebar />
                        {children}
                    </div>
                </section>
            </ClerkProvider>
        </main>
    );
};

export default PublicLayout;
