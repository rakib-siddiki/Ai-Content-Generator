'use client';
import { useEditor } from '@/app/(protected)/dashboard/hooks';
import { FC, RefObject } from 'react';
interface IProps {
    aiOutput: string;
}
const OutputSection: FC<IProps> = ({ aiOutput }) => {
    const { editorRef } = useEditor(aiOutput);
    return (
        <div className='rounded-xl bg-gray-900/5 p-5 shadow-xl backdrop-blur-sm dark:bg-card'>
            <h2 className='mb-3 text-lg font-medium'>Your Result</h2>
            <div ref={editorRef as RefObject<HTMLDivElement>} />
        </div>
    );
};

export default OutputSection;
