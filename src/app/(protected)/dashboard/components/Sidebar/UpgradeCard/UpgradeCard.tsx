import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getData } from '@/app/action/aiOutput';
import { UsageTrack } from '.';

const UpgradeCard = async () => {
    const data = await getData();
    return (
        <Card className='bg-violet-700 text-white after:from-violet-500 after:to-violet-600 dark:bg-violet-900 dark:after:from-violet-700 dark:after:to-violet-800'>
            <CardHeader>
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription className='text-sm text-zinc-300'>
                    Unlock all features and get unlimited access to our support team.
                </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
                <UsageTrack data={data} />
                <Button
                    size='sm'
                    className='w-full font-bold dark:bg-zinc-50 dark:text-zinc-800'
                    variant='secondary'
                >
                    Upgrade
                </Button>
            </CardContent>
        </Card>
    );
};

export default UpgradeCard;
