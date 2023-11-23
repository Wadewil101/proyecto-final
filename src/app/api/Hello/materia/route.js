import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose'
import materias from '@/models/materia';

export async function GET(){
    try {
        await connectDB ();
        const Materias= await Materias.find();
        return NextResponse.json({
        materias,
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}
export async function POST(request){
    try {
        await connectDB ();
        const data= await request.json
        const newMateria = new Materias(data);
        const respuesta= await newMateria.save(data);
        console.log(data);
        const Materias= await Materias.find();
        return NextResponse.json({
        materias,
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}