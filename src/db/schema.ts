import { InferInsertModel } from 'drizzle-orm';
import { pgTable, uuid, varchar, text, timestamp } from 'drizzle-orm/pg-core';

export const ai_output = pgTable('ai_output', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    form_data: varchar('form_data').notNull(),
    ai_response: text('ai_response').notNull(),
    template_slug: varchar('template_slug').notNull(),
    created_by: varchar('created_by', { length: 100 }).notNull(),
    created_at: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
    updated_at: timestamp('updated_at', { mode: 'string' }),
});

export type InsertAIOutput = InferInsertModel<typeof ai_output>;
export type SelectAIOutput = InferInsertModel<typeof ai_output>;
