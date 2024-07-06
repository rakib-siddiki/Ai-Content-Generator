import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Icons, ThemeSwitcher } from '@/components/core';
import { SidebarNavMenu, UpgradeCard } from '.';
import { Search } from '..';
import { UserButton } from '@clerk/nextjs';

const MobileSidebar = () => {
    return (
        <header className='bg-zinc/10 sticky top-0 z-50 flex h-14 items-center gap-4 border-b px-4 backdrop-blur-sm lg:h-[60px] lg:px-6'>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant='outline' size='icon' className='shrink-0 md:hidden'>
                        <Icons.Menu className='h-5 w-5' />
                        <span className='sr-only'>Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side='left' className='flex flex-col'>
                    <nav className='grid gap-2 text-lg font-medium'>
                        <Link href='/' className='flex items-center gap-2 text-lg font-semibold'>
                            <Icons.Package2 className='h-6 w-6' />
                            <span className='sr-only'>Acme Inc</span>
                            <h1 className='max-xs:text-base'>Ai Content Generator</h1>
                        </Link>
                        <SidebarNavMenu />
                    </nav>
                    <div className='mt-auto'>
                        <UpgradeCard />
                    </div>
                </SheetContent>
            </Sheet>
            <div className='w-full flex-1'>
                <Search />
            </div>
            <div className='flex items-center gap-4 drop-shadow-xl'>
                <UserButton />
                <ThemeSwitcher />
            </div>
        </header>
    );
};

export default MobileSidebar;
