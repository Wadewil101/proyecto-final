import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Asistencias from '@/models/asistencia';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const asistencias= await Asistencias.findById(id);

        if(!asistencias){
            return NextResponse({
                mensaje:"Asistencia no encontrada"
            },{status:400})
        }

        return NextResponse.json({
        asistencias
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
        const asistencias= await Asistencias.deleteOne({'_id':id});
        
        if(!asistencias){
            return NextResponse({
                mensaje:"Asistencia no encontrada"
            },{status:400})
        }

        return NextResponse.json({
        asistencias
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
        const asistenciaUpdated=await Asistencias.findByIdAndUpdate(id,data,{new:true});
        
        if(!asistenciaUpdated){
            return NextResponse({

                mensaje:"Asistencia no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            asistenciaUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}