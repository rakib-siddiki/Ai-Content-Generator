'use client';
import { TEMPLATES_DATA } from '@/app/static/templaets';
import React, { FC, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/core';
import { notFound } from 'next/navigation';
import { TemplateForm } from '.';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
const OutputSection = dynamic(() => import('.').then((m) => m.OutputSection), {
    ssr: false,
    loading: () => (
        <Skeleton className='h-[500px] animate-pulse rounded-xl bg-gray-100 dark:bg-zinc-700' />
    ),
});
interface IProps {
    slug: string;
}
const TemplateContainer: FC<IProps> = ({ slug }) => {
    const [aiOutput, setAiOutput] = useState<string>('');
    const template = TEMPLATES_DATA.find((template) => {
        return template.slug === slug;
    });
    if (!template) notFound();
    const handleOutput = (output: string) => {
        setAiOutput(output);
    };
    return (
        <main className='p-4'>
            <Link href='/dashboard' className='m-3 inline-block'>
                <Button variant={'grediant'} className='inline-flex items-center gap-1 pl-2'>
                    <Icons.ChevronRight className='h-4 w-4 rotate-180' /> Back
                </Button>
            </Link>
            <div className='flex flex-col gap-5 lg:flex-row'>
                <div className='w-full lg:w-2/5'>
                    <TemplateForm getOutput={handleOutput} {...template} />
                </div>
                <div className='size-full w-full shadow-lg lg:w-3/5'>
                    <OutputSection aiOutput={aiOutput} />
                </div>
            </div>
        </main>
    );
};

export default TemplateContainer;
