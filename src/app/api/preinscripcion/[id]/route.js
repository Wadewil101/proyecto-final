import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Preinscripciones from '@/models/preinscripcion';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const preinscripciones= await Preinscripciones.findById(id);

        if(!preinscripciones){
            return NextResponse({
                mensaje:"Profesiones no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            preinscripciones
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}


export async function DELETE(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        console.log(id);
        const preinscripciones= await Preinscripciones.deleteOne({'_id':id});
        
        if(!preinscripciones){
            return NextResponse({
                mensaje:"Profesiones no encontradas"
            },{status:400})
        }

        return NextResponse.json({
            preinscripciones
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}



export async function PUT(request,{params}){
    try {
        await connectDB();
        const data = await request.json();
        const id = params.id; 
        const preinscripcionesUpdated=await Preinscripciones.findByIdAndUpdate(id,data,{new:true});
        
        if(!preinscripcionesUpdated){
            return NextResponse({

                mensaje:"profesion no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            preinscripcionesUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}