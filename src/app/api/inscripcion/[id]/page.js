import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Inscripciones from '@/models/inscripcion';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const inscripciones= await Inscripciones.findById(id);

        if(!inscripciones){
            return NextResponse({
                mensaje:"Profesiones no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            inscripciones
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
        const inscripciones= await Inscripciones.deleteOne({'_id':id});
        
        if(!inscripciones){
            return NextResponse({
                mensaje:"Profesiones no encontradas"
            },{status:400})
        }

        return NextResponse.json({
            inscripciones
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
        const inscripcionesUpdated=await Inscripciones.findByIdAndUpdate(id,data,{new:true});
        
        if(!inscripcionesUpdated){
            return NextResponse({

                mensaje:"profesion no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            inscripcionesUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}