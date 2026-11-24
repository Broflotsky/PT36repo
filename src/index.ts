import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createServer } from "./server";

async function main(): Promise<void> {
    const server = createServer()
    const transport = new StdioServerTransport()

    await server.connect(transport)
    console.error('Servidor MCP L2 funcionando')
}

main().catch((error: unknown) => {
    console.error('Fallo crítico del servidor:', error)
    process.exit(1)
})