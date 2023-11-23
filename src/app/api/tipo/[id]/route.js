import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Tipos from '@/models/tipo';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const tipos= await Tipos.findById(id);

        if(!tipos){
            return NextResponse({
                mensaje:"Tipo no encontrada"
            },{status:400})
        }

        return NextResponse.json({
        tipos
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
        const tipos= await Tipos.deleteOne({'_id':id});
        
        if(!tipos){
            return NextResponse({
                mensaje:"Tipo no encontrada"
            },{status:400})
        }

        return NextResponse.json({
        tipos
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
        const tipoUpdated=await Tipos.findByIdAndUpdate(id,data,{new:true});
        
        if(!tipoUpdated){
            return NextResponse({

                mensaje:"Tipo no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            tipoUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}