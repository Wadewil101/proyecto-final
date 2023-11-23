import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Cursos from '@/models/curso';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const cursos= await Cursos.findById(id);

        if(!cursos){
            return NextResponse({
                mensaje:"Cursos no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            cursos
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
        const cursos= await Cursos.deleteOne({'_id':id});
        
        if(!cursos){
            return NextResponse({
                mensaje:"cursos no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            cursos
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
        const cursoUpdated=await Cursos.findByIdAndUpdate(id,data,{new:true});
        
        if(!cursoUpdated){
            return NextResponse({

                mensaje:"curso no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            cursoUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}