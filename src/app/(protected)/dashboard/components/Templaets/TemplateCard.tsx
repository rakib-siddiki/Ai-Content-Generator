'use client';

import React, { FC } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/core';
import { ITemplates } from '@/app/static/templaets';

interface IProps extends ITemplates {}
const TemplateCard: FC<IProps> = ({ title, icon, description }) => {
    return (
        <article className='grid h-full grid-cols-subgrid overflow-clip'>
            <Card className='size-full border-violet-100 bg-violet-50/50 shadow backdrop-blur-md dark:border-border dark:bg-card'>
                <CardHeader className='pb-2'>
                    <CardTitle>{title}</CardTitle>
                    <Avatar className='rounded-none'>
                        <AvatarImage src={icon} alt={title} />
                        <AvatarFallback>
                            <Icons.Loader className='h-4 w-4 animate-spin' />
                        </AvatarFallback>
                    </Avatar>
                </CardHeader>
                <CardContent>
                    <CardDescription className='line-clamp-3'>{description}</CardDescription>
                </CardContent>
            </Card>
        </article>
    );
};

export default TemplateCard;
