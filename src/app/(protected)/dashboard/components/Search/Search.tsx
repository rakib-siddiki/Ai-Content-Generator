'use client';

import { useOnSearch } from '@/providers/serch-result-Provider';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/core';

const Search = () => {
    const { value, handleOnChange } = useOnSearch();
    return (
        <form>
            <div className='relative'>
                <Icons.Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
                <Input
                    value={value}
                    onChange={handleOnChange}
                    type='search'
                    placeholder='Search products...'
                    className='w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3'
                />
            </div>
        </form>
    );
};

export default Search;
