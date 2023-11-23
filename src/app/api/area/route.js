import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Areas from '@/models/area';

export async function GET(){
    try {
        await connectDB();
        const areas= await Areas.find();
        return NextResponse.json(
        areas)
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}
export async function POST(request){
    try {
        await connectDB();
        const data = await request.json();
        const newArea = new Areas(data); 
        const respuesta = await newArea.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}