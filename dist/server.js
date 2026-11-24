"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = createServer;
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const helloworld_tool_1 = require("./tools/helloworld.tool");
const sumar_tool_1 = require("./tools/sumar.tool");
const sumar_schema_1 = require("./schemas/sumar.schema");
function createServer() {
    const server = new mcp_js_1.McpServer({
        name: "PT35 Mcp server",
        version: "1.0.0",
    });
    //TODO: REGISTRAR NUESTRAS TOOLS
    server.registerTool(helloworld_tool_1.hellowWorldTool.name, { description: helloworld_tool_1.hellowWorldTool.description }, helloworld_tool_1.hellowWorldTool.handler);
    server.registerTool(sumar_tool_1.registro.name, { description: sumar_tool_1.registro.description, inputSchema: sumar_schema_1.inputSchema.shape }, async (args) => {
        const resultado = (0, sumar_tool_1.sumar)(args);
        return {
            content: [{ type: "text", text: JSON.stringify(resultado) }],
            isError: !resultado.ok,
        };
    });
    return server;
}
//# sourceMappingURL=server.js.map