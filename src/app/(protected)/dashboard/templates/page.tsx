import { Metadata } from 'next';
import React from 'react';
import { Templates } from '../components';

export const metadata: Metadata = {
    title: 'Templates',
};
const TempletesPage = () => {
    return <Templates />;
};

export default TempletesPage;
