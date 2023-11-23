import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Grados from '@/models/grado';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const grados= await Grados.findById(id);

        if(!grados){
            return NextResponse({
                mensaje:"Grado no encontrada"
            },{status:400})
        }

        return NextResponse.json({
        grados
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
        const grados= await Grados.deleteOne({'_id':id});
        
        if(!grados){
            return NextResponse({
                mensaje:"Grado no encontrada"
            },{status:400})
        }

        return NextResponse.json({
        grados
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
        const gradoUpdated=await Grados.findByIdAndUpdate(id,data,{new:true});
        
        if(!gradoUpdated){
            return NextResponse({

                mensaje:"Grado no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            gradoUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}