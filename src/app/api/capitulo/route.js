import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Capitulos from '@/models/capitulo';

export async function GET(){
    try {
        await connectDB();
        const capitulos= await Capitulos.find();
        return NextResponse.json({
            capitulos
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
        const newCapitulo = new Capitulos(data); 
        const respuesta = await newCapitulo.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}