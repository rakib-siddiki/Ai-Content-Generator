import React from 'react';

const Templates = () => {
    return (
        <main className='flex flex-1 flex-col gap-3 p-4 lg:gap-6 lg:p-6'>
            <div className='flex items-center'>
                <h1 className='text-lg font-bold md:text-3xl'>Templates</h1>
            </div>
            <div
                className='flex flex-1 items-center justify-center rounded-lg border border-dashed border-primary shadow-sm'
                x-chunk='dashboard-02-chunk-1'
            >
                <div className='flex flex-col items-center gap-1 text-center'>
                    <h3 className='text-2xl font-bold tracking-tight'>You have no Templates</h3>
                </div>
            </div>
        </main>
    );
};

export default Templates;
