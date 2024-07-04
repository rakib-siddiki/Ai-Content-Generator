import BackgroundShape from '@/components/core/Background';
import React from 'react';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='relative min-h-screen'>
            {' '}
            <BackgroundShape />
            {children}
        </main>
    );
};

export default PublicLayout;
