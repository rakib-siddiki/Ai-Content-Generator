import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React, { FC } from 'react';
import { Error } from '@/components/core/Error';
import { getDataById } from '@/app/action/aiOutput';
import { SingleHistoryContainer } from './components';

interface IProps {
    params: { id: string };
}
export const generateMetadata = ({ params: { id } }: IProps): Metadata => {
    return { title: 'History_' + id };
};
const SingleHistoryPage: FC<IProps> = async ({ params: { id } }) => {
    const data = await getDataById(id);
    if (!data) notFound();
    if ('error' in data) {
        return <Error error={data.error} />;
    }
    return <SingleHistoryContainer data={data} />;
};

export default SingleHistoryPage;
