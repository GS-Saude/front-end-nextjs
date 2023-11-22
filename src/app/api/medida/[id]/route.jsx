import { NextResponse } from "next/server"


export async function GET({ params }){
    const { id } = params;

    if(id){
        const response = await fetch(`http://127.0.0.1:8080/api/medida/${id}`)
        const data = await response.json()
        return NextResponse.json(data)
    }

    const response = await fetch("http://127.0.0.1:8080/api/medida")
    const data = await response.json()
    return NextResponse.json(data)
}


export async function POST({ request }){
    const response = await fetch(`http://127.0.0.1:8080/api/medida`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request.body),
    });
    const data = await response.json()
    return NextResponse.json(data)
}


export async function PUT({ params, request }){
    const { id } = params;
    const response = await fetch(`http://127.0.0.1:8080/api/medida/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request.body),
    });
    const data = await response.json()
    return NextResponse.json(data)
}