// COSIGNA 7

import { mkdirSync, writeFileSync } from "node:fs";
import zodToJsonSchema from "zod-to-json-schema";
import { inputSchema, outputSchema } from "./sumar.schema";

//Evaluando existencia de una carpeta para crearla.  
// EL MKDIR CREA UNA CARPETA
mkdirSync("contracts", { recursive: true });

const archivos = [
    { ruta: "contracts/sumar.input.schema.json", schema: inputSchema },
    { ruta: "contracts/sumar.output.schema.json", schema: outputSchema },
];

for (const archivo of archivos) {
    const jsonSchema = zodToJsonSchema(archivo.schema);
    writeFileSync(archivo.ruta, JSON.stringify(jsonSchema));
    console.log("Generado:", archivo.ruta);
}
