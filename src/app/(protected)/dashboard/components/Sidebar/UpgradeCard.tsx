import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const UpgradeCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                    Unlock all features and get unlimited access to our support team.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button size='sm' className='w-full' variant='grediant'>
                    Upgrade
                </Button>
            </CardContent>
        </Card>
    );
};

export default UpgradeCard;
