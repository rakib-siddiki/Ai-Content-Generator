import React from 'react';
import { TemplateCard } from '.';
import { TEMPLATES_DATA } from '@/app/static/templaets';
import Link from 'next/link';
const Templates = () => {
    return (
        <main className='flex flex-1 flex-col gap-3 p-4 lg:gap-6 lg:p-6'>
            <div className='flex items-center'>
                <h1 className='text-lg font-bold md:text-3xl'>Templates</h1>
            </div>
            <div className='grid size-full grid-cols-1 gap-5 rounded-lg border border-dashed border-primary p-5 shadow-sm sm:grid-cols-2 lg:grid-cols-3'>
                {TEMPLATES_DATA.map((template) => (
                    <Link
                        href={`/dashboard/templates/${template.slug}`}
                        className='block'
                        key={template.slug}
                    >
                        <TemplateCard {...template} />
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default Templates;
