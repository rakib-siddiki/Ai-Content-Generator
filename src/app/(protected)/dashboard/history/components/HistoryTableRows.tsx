'use client';

import { SelectAIOutput } from '@/db/schema';
import { MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useMemo } from 'react';
import { toast } from 'sonner';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TableCell, TableRow } from '@/components/ui/table';
import { deleteData } from '@/app/action/aiOutput';
import { TEMPLATES_DATA } from '@/app/static/templaets';

interface IProps {
    data: SelectAIOutput[];
}
const HistoryTableRows: FC<IProps> = ({ data }) => {
    const handleDelete = async (id: string) => {
        const res = await deleteData(id);
        toast(res.message, { style: { background: 'green', color: 'white' } });
    };
    const tableRows = useMemo(
        () =>
            (data ?? []).map(({ id, form_data, ai_response, created_at, template_slug }) => {
                const Template = TEMPLATES_DATA.find(({ slug }) => slug === template_slug);
                const icon = Template?.icon ?? '';
                const title = Template?.title ?? '';
                const contentLength = ai_response?.length ?? 0;
                return (
                    <>
                        <TableRow key={id}>
                            <TableCell className='hidden sm:table-cell'>
                                <Image
                                    alt='Product image'
                                    className='aspect-square rounded-md object-cover'
                                    height='64'
                                    src={icon}
                                    width='64'
                                />
                            </TableCell>
                            <TableCell className='min-w-40 font-medium'>{title}</TableCell>
                            <TableCell>
                                <Badge variant='outline' className='max-w-xs'>
                                    {form_data}
                                </Badge>
                            </TableCell>
                            <TableCell className='table-cell'>{contentLength}</TableCell>
                            <TableCell className='table-cell'>
                                {formatDate(new Date(created_at!))}
                            </TableCell>
                            <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button aria-haspopup='true' size='icon' variant='ghost'>
                                            <MoreHorizontal className='h-4 w-4' />
                                            <span className='sr-only'>Toggle menu</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align='end'>
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <Link
                                            href={`/dashboard/history/${id}`}
                                            className='inline-block w-full'
                                        >
                                            <DropdownMenuItem className='cursor-pointer'>
                                                Edit
                                            </DropdownMenuItem>
                                        </Link>
                                        <DropdownMenuItem
                                            className='cursor-pointer'
                                            onClick={() => void handleDelete(id as string)}
                                        >
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    </>
                );
            }),
        [data],
    );
    return tableRows;
};

export default HistoryTableRows;
