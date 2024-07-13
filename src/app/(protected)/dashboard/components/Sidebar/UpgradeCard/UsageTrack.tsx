import React, { FC } from 'react';
interface IProps {
    data: {
        id: string;
        form_data: string;
        ai_response: string;
        template_slug: string;
        created_by: string;
        created_at: string;
        updated_at: string | null;
    }[];
}
const UsageTrack: FC<IProps> = ({ data }) => {
    const totalUsage = data.reduce((acc, item) => acc + item.ai_response.length, 0);
    const maxWords = 10000;
    return (
        <div className='h-2 w-full rounded-full bg-purple-400'>
            <div
                className='h-full rounded-full bg-zinc-100'
                style={{
                    width:
                        totalUsage / maxWords > 1 ? 100 + '%' : (totalUsage / maxWords) * 100 + '%',
                }}
            />
        </div>
    );
};

export default UsageTrack;
