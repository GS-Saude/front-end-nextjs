import { NextResponse } from "next/server";


export async function GET(request, { params }) {
    if (!params || !params.id) {
        return NextResponse.json({ message: "Erro na requisição", status: 400 });
    }

    const { id } = params;
    const response = await fetch(`http://127.0.0.1:8080/api/tipo-treino/treino/${id}`);
    const data = await response.json();
    return NextResponse.json(data);
}