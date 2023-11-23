import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Evaluaciones from '@/models/evaluacion';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const evaluaciones= await Evaluaciones.findById(id);

        if(!evaluaciones){
            return NextResponse({
                mensaje:"docente no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            evaluaciones
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
        const evaluaciones= await Evaluaciones.deleteOne({'_id':id});
        
        if(!evaluaciones){
            return NextResponse({
                mensaje:"evaluacion no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            evaluaciones
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
        const evaluacionesUpdated=await Evaluaciones.findByIdAndUpdate(id,data,{new:true});
        
        if(!evaluacionesUpdated){
            return NextResponse({

                mensaje:"decente no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            evaluacionesUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}