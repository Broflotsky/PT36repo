"use strict";
// Consigna 3, definir el schema de mi tool de sumar.
Object.defineProperty(exports, "__esModule", { value: true });
exports.outputSchema = exports.inputSchema = void 0;
const zod_1 = require("zod");
exports.inputSchema = zod_1.z.object({
    a: zod_1.z.number(),
    b: zod_1.z.number()
});
exports.outputSchema = zod_1.z.object({
    a: zod_1.z.number(),
    b: zod_1.z.number(),
    resultado: zod_1.z.number()
});
//# sourceMappingURL=sumar.schema.js.map