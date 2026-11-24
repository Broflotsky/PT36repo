"use strict";
// PASO 4
// ok: true con data o ok: false con error estructurado
Object.defineProperty(exports, "__esModule", { value: true });
exports.ok = ok;
exports.fail = fail;
function ok(data) {
    return { ok: true, data };
}
function fail(code, message, details) {
    return { ok: false, error: { code, message, details } };
}
//# sourceMappingURL=errors.js.map