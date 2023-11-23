import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Carreras from '@/models/carrera';

export async function GET(){
    try {
        await connectDB();
        const carreras= await Carreras.find();
        return NextResponse.json({
            carreras
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
        const newCarrera = new Carreras(data); 
        const respuesta = await newCarrera.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}