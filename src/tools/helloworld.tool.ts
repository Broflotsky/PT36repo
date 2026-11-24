import { hellowWorldHandler } from "../handlers/helloworld.handler";

export const hellowWorldTool = {
    name: 'Saludar',
    description: 'Tool que saluda a un usuario',
    handler: hellowWorldHandler
}