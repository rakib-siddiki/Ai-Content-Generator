import { Metadata } from 'next';
import React from 'react';
import { HistoryContainer } from './components';
export const metadata: Metadata = {
    title: 'History',
};
const HistoryPage = () => {
    return <HistoryContainer />;
};

export default HistoryPage;
