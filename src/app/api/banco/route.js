import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import BancoPreguntas from '@/models/bancopregunta';

export async function GET(){
    try {
        await connectDB();
        const bancopreguntas= await BancoPreguntas.find();
        return NextResponse.json({
            bancopreguntas
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}
export async function POST(request){
    try {
        await connectDB();
        const data = await request.json();
        const newBanco = new BancoPreguntas(data); 
        const respuesta = await newBanco.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}