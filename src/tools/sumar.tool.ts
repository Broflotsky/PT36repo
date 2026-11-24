import zodToJsonSchema from "zod-to-json-schema";
import { sumarHandler } from "../handlers/sumar.handler";
import { inputSchema, outputSchema } from "../schemas/sumar.schema";
import { fail, ok } from "../utils/errors";

export function sumar(rawInput: unknown) {
    //  Vamos a evaluar el primer caso, que seria el input con el safeParse
    const input = inputSchema.safeParse(rawInput);
    if (!input.success) {
        return fail(
            "INPUT_INVALIDO",
            'El input no cumple con el contrato de la tool',
            input.error.flatten().fieldErrors
        )
    }

    const data = sumarHandler(input.data)

    //  Vamos a evaluar el 2do caso, que es la salida o output
    const output = outputSchema.safeParse(data)
    if (!output.success) {
        return fail(
            "OUTPUT_INVALIDO",
            'El output no cumple con el contrato de la tool',
            output.error.flatten().fieldErrors
        )
    }

    return ok(output.data)

}

export const registro = {
    name: 'sumar',
    description: 'Suma dos numeros',
    endpoint: '/tools/sumar',
    inputSchema: zodToJsonSchema(inputSchema),
    outputSchema: zodToJsonSchema(outputSchema)
} 