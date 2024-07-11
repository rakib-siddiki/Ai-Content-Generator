import { ITemplates } from '@/app/static/templaets';
import { z, ZodObject, ZodRawShape } from 'zod';

export const createSchema = (fields: ITemplates['fromFields']): ZodObject<ZodRawShape> => {
    const shape = fields.reduce((acc, field) => {
        acc[field.name] = field.rquired
            ? z.string().min(1, `${field.label} is required`)
            : z.string().optional();
        return acc;
    }, {} as ZodRawShape);
    return z.object(shape);
};

export type TTemplateFromSchema = ReturnType<typeof createSchema>['_type'];
