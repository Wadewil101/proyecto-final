import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Docentes from '@/models/docente';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const docentes= await Docentes.findById(id);

        if(!docentes){
            return NextResponse({
                mensaje:"docente no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            docentes
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
        const docentes= await Docentes.deleteOne({'_id':id});
        
        if(!docentes){
            return NextResponse({
                mensaje:"decente no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            docentes
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
        const docentesUpdated=await Docentes.findByIdAndUpdate(id,data,{new:true});
        
        if(!docentesUpdated){
            return NextResponse({

                mensaje:"decente no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            docentesUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}