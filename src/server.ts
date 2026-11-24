import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { hellowWorldTool } from "./tools/helloworld.tool";
import { registro, sumar } from "./tools/sumar.tool";
import { inputSchema } from "./schemas/sumar.schema";

export function createServer(): McpServer {
  const server = new McpServer({
    name: "PT35 Mcp server",
    version: "1.0.0",
  });

  //TODO: REGISTRAR NUESTRAS TOOLS
  server.registerTool(
    hellowWorldTool.name,
    { description: hellowWorldTool.description },
    hellowWorldTool.handler,
  );

  server.registerTool(
    registro.name,
    { description: registro.description, inputSchema: inputSchema.shape },
    async (args) => {
      const resultado = sumar(args);
      return {
        content: [{ type: "text", text: JSON.stringify(resultado) }],
        isError: !resultado.ok,
      };
    },
  )

  return server;
}
