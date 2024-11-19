import { z, ZodObject, ZodRawShape } from 'zod';
import { ITemplates } from '@/app/static/templaets';

export const createSchema = (fields: ITemplates['fromFields']): ZodObject<ZodRawShape> => {
    const shape = fields.reduce((acc, field) => {
        acc[field.name] = field.required
            ? z.string().min(1, `${field.label} is required`)
            : z.string().optional();
        return acc;
    }, {} as ZodRawShape);
    return z.object(shape);
};

export type TTemplateFromSchema = ReturnType<typeof createSchema>['_type'];
