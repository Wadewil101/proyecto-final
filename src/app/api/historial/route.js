import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Historiales from '@/models/historial';

export async function GET(){
    try {
        await connectDB();
        const historiales= await Historiales.find();
        return NextResponse.json({
            historiales
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
        const newHistorial = new Historiales(data); 
        const respuesta = await newHistorial.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}