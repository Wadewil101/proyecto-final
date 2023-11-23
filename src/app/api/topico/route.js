import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Topicos from '@/models/topico';

export async function GET(){
    try {
        await connectDB();
        const topicos= await Topicos.find();
        return NextResponse.json({
            topicos
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
        const newTopico = new Topicos(data); 
        const respuesta = await newTopico.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}