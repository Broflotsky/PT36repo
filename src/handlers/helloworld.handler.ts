export async function hellowWorldHandler() {
    return {
        content: [
            {
                type: 'text' as const,
                text: 'Hola usuario como estas, te saludo'
            }
        ]
    }
}