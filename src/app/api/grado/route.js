import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Grados from '@/models/grado';

export async function GET(){
    try {
        await connectDB();
        const grados= await Grados.find();
        return NextResponse.json({
        grados
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
        const newGrado = new Grados(data); 
        const respuesta = await newGrado.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}