import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Personas from '@/models/persona';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const personas= await Personas.findById(id);

        if(!personas){
            return NextResponse({
                mensaje:"persona no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            personas
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
        const personas= await Personas.deleteOne({'_id':id});
        
        if(!personas){
            return NextResponse({
                mensaje:"persona eliminada"
            },{status:400})
        }

        return NextResponse.json({
            personas
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
        const personaUpdated=await Personas.findByIdAndUpdate(id,data,{new:true});
        
        if(!personaUpdated){
            return NextResponse({

                mensaje:"persona no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            personaUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}