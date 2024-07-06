'use client';
import React, { useEffect, useState } from 'react';
import { TemplateCard } from '.';
import { TEMPLATES_DATA } from '@/app/static/templaets';
import Link from 'next/link';
import { useOnSearch } from '@/providers/serch-result-Provider';
const Templates = () => {
    const [templatesList, setTemplatesList] = useState(TEMPLATES_DATA);
    const { value } = useOnSearch();
    useEffect(() => {
        const filteredList = TEMPLATES_DATA.filter(({ title }) => {
            if (value === '') return true;
            return title.toLowerCase().includes(value.toLowerCase());
        });
        setTemplatesList(filteredList);
    }, [value]);
    return (
        <main className='flex flex-1 flex-col gap-3 p-4 lg:gap-6 lg:p-6'>
            <div className='flex items-center'>
                <h1 className='text-lg font-bold md:text-3xl'>Templates</h1>
            </div>
            <div className='min-h-screen rounded-lg border border-dashed border-primary p-5 shadow-sm'>
                <div className='grid size-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                    {templatesList.map((template) => (
                        <Link
                            href={`/dashboard/templates/${template.slug}`}
                            className='inline-block h-44'
                            key={template.slug}
                        >
                            <TemplateCard {...template} />
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Templates;
