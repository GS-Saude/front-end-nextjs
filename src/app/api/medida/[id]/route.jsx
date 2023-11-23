import { NextResponse } from "next/server"

//arrumado
export async function POST(request){
    const responseData = await request.json()
    const response = await fetch(`http://127.0.0.1:8080/api/medida`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(responseData),
    });
    const data = await response.json()
    return NextResponse.json(data)
}


//arrumado
export async function PUT( request, { params }){
    const { id } = params;
    const responseData = await request.json()
    const response = await fetch(`http://127.0.0.1:8080/api/medida/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(responseData),
    });
    const data = await response.json()
    return NextResponse.json(data)
}