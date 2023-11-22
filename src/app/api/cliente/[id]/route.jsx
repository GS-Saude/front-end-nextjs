import { NextResponse } from "next/server";


// arrumado
export async function GET(request, { params }) {
    const { id } = params;
    if (id) {
        const response = await fetch(`http://127.0.0.1:8080/api/cliente/${id}`)
        const data = await response.json()
        return NextResponse.json(data)
    }
}


export async function POST({ request }) {
    const response = await fetch(`http://127.0.0.1:8080/api/cliente`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request.body),
    });
    const data = await response.json()
    return NextResponse.json(data)
}

// arrumado
export async function PUT( request, { params } ) {
    const responseData = await request.json()
    const { id } = params;

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