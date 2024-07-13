import { Icons } from '@/components/core';
import Link from 'next/link';
import React from 'react';
import { UpgradeCard } from '.';
import { SidebarNavMenu } from '.';

const Sidebar = () => {
    return (
        <aside className='bg-zinc/10 hidden border-r backdrop-blur-sm md:block'>
            <div className='flex h-full max-h-screen flex-col gap-2'>
                <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
                    <Link href='/' className='flex items-center gap-2 font-semibold'>
                        <Icons.Package2 className='h-6 w-6' />
                        <h1 className=''>Ai Content Generator</h1>
                    </Link>
                </div>
                <div className='flex-1'>
                    <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
                        <SidebarNavMenu />
                    </nav>
                </div>
                <div className='mt-auto p-4'>
                    <UpgradeCard />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
