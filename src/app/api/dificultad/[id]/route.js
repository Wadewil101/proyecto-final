import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Dificultades from '@/models/dificultad';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const dificultades= await Dificultades.findById(id);

        if(!dificultades){
            return NextResponse({
                mensaje:"Dificultad no encontrada"
            },{status:400})
        }

        return NextResponse.json({
        dificultades
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
        const dificultades= await Dificultades.deleteOne({'_id':id});
        
        if(!dificultades){
            return NextResponse({
                mensaje:"Dificultad no encontrada"
            },{status:400})
        }

        return NextResponse.json({
        dificultades
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
        const dificultadUpdated=await Dificultades.findByIdAndUpdate(id,data,{new:true});
        
        if(!dificultadUpdated){
            return NextResponse({

                mensaje:"Dificultad no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            dificultadUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}