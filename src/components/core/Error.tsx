import React, { FC, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    error: string;
}
export const Error: FC<IProps> = ({ error, className }) => {
    return (
        <div
            className={cn(
                'text-red-500 text-2xl font-bold md:text-5xl grid place-items-center p-10',
                className,
            )}
        >
            {error}
        </div>
    );
};
