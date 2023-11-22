import { NextResponse } from "next/server";


export async function GET( request, { params } ) {
    const { id } = params;

    if (id) {
        const response = await fetch(`http://127.0.0.1:8080/api/dieta/${id}`)
        const data = await response.json()
        return NextResponse.json(data)
    }
}


// arrumado
export async function PUT( request, { params } ) {
    const { id } = params;
    const responseData = await request.json()

    const response = await fetch(`http://127.0.0.1:8080/api/cliente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(responseData),
    });
    const data = await response.json()
    return NextResponse.json(data)
}