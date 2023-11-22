import { NextResponse } from "next/server";

export async function GET(request, { params }){
    const { id } = params;
    
    if(id){
        const response = await fetch(`http://127.0.0.1:8080/api/exercicio/${id}`);
        const data = await response.json();
        return NextResponse.json(data);
    }
}