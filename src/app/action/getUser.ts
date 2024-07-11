'use server';

import { currentUser } from '@clerk/nextjs/server';
import { cache } from 'react';

export const getUser = cache(async () => {
    const user = await currentUser();
    if (!user) {
        throw new Error('No user found');
    }
    return user;
});
