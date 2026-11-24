import { SumarInput, SumarOutput } from "../schemas/sumar.schema";

export function sumarHandler(input: SumarInput): SumarOutput {
    return {
        a: input.a,
        b: input.b,
        resultado: input.a + input.b
    }
}