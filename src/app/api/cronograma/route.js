import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Cronogramas from '@/models/cronograma';

export async function GET(){
    try {
        await connectDB();
        const cronogramas= await Cronogramas.find();
        return NextResponse.json({
            cronogramas
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
        const newCronograma = new Cronogramas(data); 
        const respuesta = await newCronograma.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}