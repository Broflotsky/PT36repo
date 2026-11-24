"use strict";
// PASO 6.
Object.defineProperty(exports, "__esModule", { value: true });
const sumar_tool_1 = require("./tools/sumar.tool");
const casos = [
    { titulo: "Valido - 2 + 3", input: { a: 2, b: 3 } },
    { titulo: "Invalido - a es un texto", input: { a: "dos", b: 3 } },
];
for (const caso of casos) {
    console.log(caso.titulo);
    console.log("Input:", JSON.stringify(caso.input));
    console.log("Output:", JSON.stringify((0, sumar_tool_1.sumar)(caso.input)));
}
//# sourceMappingURL=test.js.map