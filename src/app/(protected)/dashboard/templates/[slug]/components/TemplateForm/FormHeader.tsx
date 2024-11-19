import React, { FC } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ITemplates } from '@/app/static/templaets';

interface IProps extends ITemplates {}
const FormHeader: FC<IProps> = ({ title, icon, description }) => {
    return (
        <>
            <CardHeader className='px-0 pb-2'>
                <CardTitle className='text-xl'>{title}</CardTitle>
                <Avatar className='rounded'>
                    <AvatarImage src={icon} alt={title} />
                    <AvatarFallback>
                        <div className='size-14 animate-pulse bg-zinc-300 dark:bg-zinc-700' />
                    </AvatarFallback>
                </Avatar>
            </CardHeader>
            <CardContent className='px-0'>
                <CardDescription className='line-clamp-3'>{description}</CardDescription>
            </CardContent>
        </>
    );
};

export default FormHeader;
