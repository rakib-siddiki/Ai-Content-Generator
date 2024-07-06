import { ITemplates } from '@/app/static/templaets';
import { z, ZodObject, ZodRawShape } from 'zod';

export const createSchema = (fields: ITemplates['fromFields']): ZodObject<ZodRawShape> => {
    const shape: ZodRawShape = {};
    fields.forEach((field) => {
        if (field.type === 'input' || field.type === 'textarea') {
            shape[field.name] = z.string().min(1, `${field.label} is required`);
        } else if (field.type === 'select') {
            shape[field.name] = z.string().min(1, `${field.label} is required`);
        }
    });
    return z.object(shape);
};

export type TTemplateFromSchema = ReturnType<typeof createSchema>['_type'];
