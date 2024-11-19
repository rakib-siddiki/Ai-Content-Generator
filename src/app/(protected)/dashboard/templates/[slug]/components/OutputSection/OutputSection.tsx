/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import { FC, RefObject } from 'react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/core';
import { useEditor } from '@/app/(protected)/dashboard/hooks';

interface IProps {
    aiOutput: string;
    handleSaveData: (data?: string) => Promise<void>;
    isSaving: boolean;
}
const OutputSection: FC<IProps> = ({ aiOutput, handleSaveData, isSaving }) => {
    const { editorRef, isEditedContent } = useEditor(aiOutput);

    return (
        <div className='rounded-xl bg-gray-900/5 p-5 shadow-xl backdrop-blur-sm dark:bg-card'>
            <div className='flex justify-between items-center mb-3'>
                <h2 className=' text-lg font-medium'>Your Result</h2>
                <Button onClick={() => handleSaveData(isEditedContent)}>
                    {isSaving ? (
                        <>
                            <Icons.Loader className='mr-1 size-4 animate-spin' /> Saveing...
                        </>
                    ) : (
                        'Save'
                    )}
                </Button>
            </div>
            <div ref={editorRef as RefObject<HTMLDivElement>} />
        </div>
    );
};

export default OutputSection;
