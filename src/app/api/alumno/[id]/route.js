import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Alumnos from '@/models/alumno';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const alumnos= await Alumnos.findById(id);

        if(!alumnos){
            return NextResponse({
                mensaje:"Alumno no encontrada"
            },{status:400})
        }

        return NextResponse.json({
        alumnos
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
        const alumnos= await Alumnos.deleteOne({'_id':id});
        
        if(!alumnos){
            return NextResponse({
                mensaje:"Alumno no encontrada"
            },{status:400})
        }

        return NextResponse.json({
        alumnos
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
        const alumnoUpdated=await Alumnos.findByIdAndUpdate(id,data,{new:true});
        
        if(!alumnoUpdated){
            return NextResponse({

                mensaje:"Alumno no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            alumnoUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}