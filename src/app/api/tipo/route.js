import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Tipos from '@/models/tipo';

export async function GET(){
    try {
        await connectDB();
        const tipos= await Tipos.find();
        return NextResponse.json({
        tipos
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
        const newTipo = new Tipos(data); 
        const respuesta = await newTipo.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}