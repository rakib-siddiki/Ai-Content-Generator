'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React, { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Icons } from '@/components/core';
import { TEMPLATES_DATA } from '@/app/static/templaets';
import { TemplateForm } from '.';
import { useTemplateForm } from '../../../hooks';
import useSaveToDB from '../../../hooks/useSaveToDB';

const OutputSection = dynamic(() => import('.').then((m) => m.OutputSection), {
    ssr: false,
    loading: () => (
        <Skeleton className='h-[500px] animate-pulse rounded-xl bg-gray-100 dark:bg-zinc-700' />
    ),
});
interface IProps {
    slug: string;
    savedAiResponse?: string;
    storedFormData?: string;
}
const TemplateContainer: FC<IProps> = ({ slug, savedAiResponse, storedFormData }) => {
    const [aiOutput, setAiOutput] = useState<string>(savedAiResponse ?? '');
    const template = TEMPLATES_DATA.find((template) => {
        return template.slug === slug;
    });
    if (!template) notFound();
    const handleOutput = (output: string) => {
        setAiOutput(output);
    };

    const { aiResponeData, ...rest } = useTemplateForm({
        ...template,
        getOutput: handleOutput,
        storedFormData,
        savedAiResponse: aiOutput,
    });
    const { handleSaveData, isSaveing } = useSaveToDB({ aiResponeData });

    return (
        <main className='p-4'>
            <Link href='/dashboard' className='m-3 inline-block'>
                <Button variant={'grediant'} className='inline-flex items-center gap-1 pl-2'>
                    <Icons.ChevronRight className='h-4 w-4 rotate-180' /> Back
                </Button>
            </Link>
            <div className='flex flex-col gap-5 lg:flex-row'>
                <div className='w-full lg:w-2/5'>
                    <TemplateForm {...rest} {...template} />
                </div>
                <div className='size-full w-full shadow-lg lg:w-3/5'>
                    <OutputSection
                        isSaveing={isSaveing}
                        handleSaveData={handleSaveData}
                        aiOutput={aiOutput}
                    />
                </div>
            </div>
        </main>
    );
};

export default TemplateContainer;
