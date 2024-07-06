import { TEMPLATES_DATA } from '@/app/static/templaets';
import { Metadata } from 'next';
import React, { FC } from 'react';
import { TemplateForm } from './components';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/core';
import { notFound } from 'next/navigation';
interface IProps {
    params: { slug: string };
}
export const generateMetadata = ({ params: { slug } }: IProps): Metadata => {
    return { title: slug };
};
const SingleTemplatePage: FC<IProps> = ({ params: { slug } }) => {
    const template = TEMPLATES_DATA.find((template) => {
        return template.slug === slug;
    });
    if (!template) notFound();
    return (
        <main className='position-without-header size-full'>
            <Link href='/dashboard' className='m-3 inline-block'>
                <Button variant={'grediant'} className='inline-flex items-center gap-1 pl-2'>
                    <Icons.ChevronRight className='h-4 w-4 rotate-180' /> Back
                </Button>
            </Link>
            <div className='*:no-scrollbar grid h-full w-full grid-cols-1 overflow-hidden md:h-dvh md:grid-cols-12'>
                <div className='col-span-4 overflow-y-auto'>
                    <TemplateForm {...template} />
                </div>
                <div className='col-span-8 size-full overflow-y-auto'>
                    <h1>Rich Editor</h1>
                </div>
            </div>
        </main>
    );
};

export default SingleTemplatePage;
