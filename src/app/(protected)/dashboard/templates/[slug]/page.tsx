import { TEMPLATES_DATA } from '@/app/static/templaets';
import React, { FC } from 'react';
interface IProps {
    params: { slug: string };
}
const SingleTemplatePage: FC<IProps> = ({ params: { slug } }) => {
    const template = TEMPLATES_DATA.find((template) => template.slug === slug);
    return (
        <div className='grid h-screen place-items-center'>
            {template && (
                <h1 className='text-6xl'>
                    {template.title} <br />
                    page is coming soon
                </h1>
            )}
        </div>
    );
};

export default SingleTemplatePage;
