import { NextResponse } from "next/server";


export async function POST( request ) {
    const responseData = await request.json()
    console.log(responseData)

    const response = await fetch(`http://127.0.0.1:8080/api/cliente/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(responseData),
    });
    const data = await response.json()
    return NextResponse.json(data)
}