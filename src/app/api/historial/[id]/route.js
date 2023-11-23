import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Historiales from '@/models/historial';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const historiales= await Historiales.findById(id);

        if(!historiales){
            return NextResponse({
                mensaje:"Profesiones no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            historiales
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
        const historiales= await Historiales.deleteOne({'_id':id});
        
        if(!historiales){
            return NextResponse({
                mensaje:"Profesiones no encontradas"
            },{status:400})
        }

        return NextResponse.json({
            historiales
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
        const historialesUpdated=await Historiales.findByIdAndUpdate(id,data,{new:true});
        
        if(!historialesUpdated){
            return NextResponse({

                mensaje:"profesion no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            historialesUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}