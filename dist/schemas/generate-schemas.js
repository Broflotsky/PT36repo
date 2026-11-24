"use strict";
// COSIGNA 7
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = require("node:fs");
const zod_to_json_schema_1 = __importDefault(require("zod-to-json-schema"));
const sumar_schema_1 = require("./sumar.schema");
//Evaluando existencia de una carpeta para crearla.  
// EL MKDIR CREA UNA CARPETA
(0, node_fs_1.mkdirSync)("contracts", { recursive: true });
const archivos = [
    { ruta: "contracts/sumar.input.schema.json", schema: sumar_schema_1.inputSchema },
    { ruta: "contracts/sumar.output.schema.json", schema: sumar_schema_1.outputSchema },
];
for (const archivo of archivos) {
    const jsonSchema = (0, zod_to_json_schema_1.default)(archivo.schema);
    (0, node_fs_1.writeFileSync)(archivo.ruta, JSON.stringify(jsonSchema));
    console.log("Generado:", archivo.ruta);
}
//# sourceMappingURL=generate-schemas.js.map