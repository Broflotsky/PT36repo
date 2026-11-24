// Consigna 3, definir el schema de mi tool de sumar.

import { z } from 'zod';

export const inputSchema = z.object({
    a: z.number(),
    b: z.number()
})

export const outputSchema = z.object({
    a: z.number(),
    b: z.number(),
    resultado: z.number()
})

export type SumarInput = z.infer<typeof inputSchema>
export type SumarOutput = z.infer<typeof outputSchema>