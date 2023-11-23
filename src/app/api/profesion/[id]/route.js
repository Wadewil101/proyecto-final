import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Profesiones from '@/models/profesion';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const profesiones= await Profesiones.findById(id);

        if(!profesiones){
            return NextResponse({
                mensaje:"Profesiones no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            profesiones
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
        const profesiones= await Profesiones.deleteOne({'_id':id});
        
        if(!profesiones){
            return NextResponse({
                mensaje:"Profesiones no encontradas"
            },{status:400})
        }

        return NextResponse.json({
            profesiones
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
        const profesionUpdated=await Profesiones.findByIdAndUpdate(id,data,{new:true});
        
        if(!profesionUpdated){
            return NextResponse({

                mensaje:"profesion no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            profesionUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}