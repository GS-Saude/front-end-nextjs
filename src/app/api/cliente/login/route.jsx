import { NextResponse } from "next/server";


export async function POST({ request }) {
    const response = await fetch(`http://127.0.0.1:8080/api/cliente/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request.body),
    });
    const data = await response.json()
    return NextResponse.json(data)
}