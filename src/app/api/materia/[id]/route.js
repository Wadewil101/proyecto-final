import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Materias from '@/models/materia';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const materias= await Materias.findById(id);

        if(!materias){
            return NextResponse({
                mensaje:"Materia no encontrada"
            },{status:400})
        }

        return NextResponse.json({
        materias
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
        const materias= await Materias.deleteOne({'_id':id});
        
        if(!materias){
            return NextResponse({
                mensaje:"Materia no encontrada"
            },{status:400})
        }

        return NextResponse.json({
        materias
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
        const materiaUpdated=await Materias.findByIdAndUpdate(id,data,{new:true});
        
        if(!materiaUpdated){
            return NextResponse({

                mensaje:"Materia no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            materiaUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}