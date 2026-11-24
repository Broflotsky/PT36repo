// PASO 4
// ok: true con data o ok: false con error estructurado

export type ErrorCode =
    | "INPUT_INVALIDO"
    | "REGLA_NEGOCIO"
    | "OUTPUT_INVALIDO"
    | "INFORMACION INACCESIBLE";


export type ToolError = {
    code: ErrorCode;
    message: string;
    details?: unknown;
}

export type ToolResult<T> =
    | { ok: true; data: T }
    | { ok: false; error: ToolError };


export function ok<T>(data: T): { ok: true, data: T } {
    return { ok: true, data }
}

export function fail(code: ErrorCode, message: string, details?: unknown): { ok: false, error: ToolError } {
    return { ok: false, error: { code, message, details } }
}