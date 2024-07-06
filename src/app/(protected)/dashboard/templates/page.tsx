import React from 'react';
import { Templates } from '../components';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Templates',
};
const TempletesPage = () => {
    return <Templates />;
};

export default TempletesPage;
