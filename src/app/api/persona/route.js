import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Personas from '@/models/persona';

export async function GET(){
    try {
        await connectDB();
        const personas= await Personas.find();
        return NextResponse.json({
            personas
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
        const newPersona = new Personas(data); 
        const respuesta = await newPersona.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}