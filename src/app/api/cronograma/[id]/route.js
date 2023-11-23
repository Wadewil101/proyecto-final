import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Cronogramas from '@/models/cronograma';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const cronogramas= await Cronogramas.findById(id);

        if(!cronogramas){
            return NextResponse({
                mensaje:"Profesiones no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            cronogramas
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
        const cronogramas= await Cronogramas.deleteOne({'_id':id});
        
        if(!cronogramas){
            return NextResponse({
                mensaje:"Profesiones no encontradas"
            },{status:400})
        }

        return NextResponse.json({
            cronogramas
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
        const cronogramasUpdated=await Cronogramas.findByIdAndUpdate(id,data,{new:true});
        
        if(!cronogramasUpdated){
            return NextResponse({

                mensaje:"profesion no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            cronogramasUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}