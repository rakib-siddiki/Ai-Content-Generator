import { SITE_TITLE_TEMPLATE_DEFAULT } from '@/configs';
import { Metadata } from 'next';
import React from 'react';
import { Templates } from './components';

export const metadata: Metadata = {
    title: {
        default: 'Dashboard',
        template: SITE_TITLE_TEMPLATE_DEFAULT,
    },
};
const DashboardPage = () => {
    return (
        <main>
            <Templates />
        </main>
    );
};
export default DashboardPage;
