"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registro = void 0;
exports.sumar = sumar;
const zod_to_json_schema_1 = __importDefault(require("zod-to-json-schema"));
const sumar_handler_1 = require("../handlers/sumar.handler");
const sumar_schema_1 = require("../schemas/sumar.schema");
const errors_1 = require("../utils/errors");
function sumar(rawInput) {
    //  Vamos a evaluar el primer caso, que seria el input con el safeParse
    const input = sumar_schema_1.inputSchema.safeParse(rawInput);
    if (!input.success) {
        return (0, errors_1.fail)("INPUT_INVALIDO", 'El input no cumple con el contrato de la tool', input.error.flatten().fieldErrors);
    }
    const data = (0, sumar_handler_1.sumarHandler)(input.data);
    //  Vamos a evaluar el 2do caso, que es la salida o output
    const output = sumar_schema_1.outputSchema.safeParse(data);
    if (!output.success) {
        return (0, errors_1.fail)("OUTPUT_INVALIDO", 'El output no cumple con el contrato de la tool', output.error.flatten().fieldErrors);
    }
    return (0, errors_1.ok)(output.data);
}
exports.registro = {
    name: 'sumar',
    description: 'Suma dos numeros',
    endpoint: '/tools/sumar',
    inputSchema: (0, zod_to_json_schema_1.default)(sumar_schema_1.inputSchema),
    outputSchema: (0, zod_to_json_schema_1.default)(sumar_schema_1.outputSchema)
};
//# sourceMappingURL=sumar.tool.js.map