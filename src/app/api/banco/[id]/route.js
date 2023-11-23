import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import BancoPreguntas from '@/models/bancopregunta';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const bancopreguntas= await BancoPreguntas.findById(id);

        if(!bancopreguntas){
            return NextResponse({
                mensaje:"banco de preguntas no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            bancopreguntas
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
        const bancopreguntas= await BancoPreguntas.deleteOne({'_id':id});
        
        if(!bancopreguntas){
            return NextResponse({
                mensaje:"banco depreguntas no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            bancopreguntas
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
        const bancoUpdated=await BancoPreguntas.findByIdAndUpdate(id,data,{new:true});
        
        if(!bancoUpdated){
            return NextResponse({

                mensaje:"banco de preguntas no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            bancoUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}