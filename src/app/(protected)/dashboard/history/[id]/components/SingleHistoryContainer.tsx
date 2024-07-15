import React, { FC } from 'react';
import TemplateContainer from '../../../templates/[slug]/components/TemplateContainer';

interface IProps {
    data: {
        id: string;
        form_data: string;
        ai_response: string;
        template_slug: string;
        created_by: string;
        created_at: string;
        updated_at: string | null;
    };
}
const SingleHistoryContainer: FC<IProps> = ({ data }) => {
    return (
        <>
            <TemplateContainer
                slug={data?.template_slug}
                savedAiResponse={data?.ai_response}
                storedFormData={data?.form_data}
            />
        </>
    );
};

export default SingleHistoryContainer;
