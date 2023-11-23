import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Topicos from '@/models/topico';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const topicos= await Topicos.findById(id);

        if(!topicos){
            return NextResponse({
                mensaje:"Topicos no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            topicos
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
        const topicos= await Topicos.deleteOne({'_id':id});
        
        if(!topicos){
            return NextResponse({
                mensaje:"Topicos no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            topicos
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
        const topicoUpdated=await Topicos.findByIdAndUpdate(id,data,{new:true});
        
        if(!topicoUpdated){
            return NextResponse({

                mensaje:"topico no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            topicoUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}