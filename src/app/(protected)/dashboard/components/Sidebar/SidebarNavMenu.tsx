'use client';
import { SIDEBAR_NAV_MENUS } from '@/app/static';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const SidebarNavMenu = () => {
    const pathname = usePathname();
    return SIDEBAR_NAV_MENUS.map(({ name, icon, href }) => (
        <Link
            key={name}
            href={href}
            className={cn(
                'flex items-center gap-4 rounded-xl px-3 py-2 text-sm text-muted-foreground transition hover:text-primary',
                pathname === href && 'bg-muted text-violet-500',
            )}
        >
            {icon}
            {name}
        </Link>
    ));
};

export default SidebarNavMenu;
