import { Metadata } from 'next';
import React, { FC } from 'react';
import TemplateContainer from './components/TemplateContainer';
interface IProps {
    params: { slug: string };
}
export const generateMetadata = ({ params: { slug } }: IProps): Metadata => {
    return { title: slug };
};
const SingleTemplatePage: FC<IProps> = ({ params: { slug } }) => {
    return <TemplateContainer slug={slug} />;
};

export default SingleTemplatePage;
