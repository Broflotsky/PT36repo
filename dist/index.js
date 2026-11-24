"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const server_1 = require("./server");
async function main() {
    const server = (0, server_1.createServer)();
    const transport = new stdio_js_1.StdioServerTransport();
    await server.connect(transport);
    console.error('Servidor MCP L2 funcionando');
}
main().catch((error) => {
    console.error('Fallo crítico del servidor:', error);
    process.exit(1);
});
//# sourceMappingURL=index.js.map