import type { APIRoute } from "astro"

export async function GET({ params }) {
    return new Response(
        JSON.stringify({msg: "Hello World!"}), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
}

export const POST: APIRoute = async({ params, request }) => {
    const body = await request.json()
    return new Response(
        JSON.stringify(body), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
}