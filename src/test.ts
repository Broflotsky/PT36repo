// PASO 6.

import { sumar } from "./tools/sumar.tool";

const casos: Array<{ titulo: string; input: unknown }> = [
    { titulo: "Valido - 2 + 3", input: { a: 2, b: 3 } },
    { titulo: "Invalido - a es un texto", input: { a: "dos", b: 3 } },
];

for (const caso of casos) {
    console.log(caso.titulo);
    console.log("Input:", JSON.stringify(caso.input));
    console.log("Output:", JSON.stringify(sumar(caso.input)));
}
