import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Carreras from '@/models/carrera';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const carreras= await Carreras.findById(id);

        if(!carreras){
            return NextResponse({
                mensaje:"Carreras no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            carreras
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
        const carreras= await Carreras.deleteOne({'_id':id});
        
        if(!carreras){
            return NextResponse({
                mensaje:"Carreras no encontradas"
            },{status:400})
        }

        return NextResponse.json({
            carreras
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
        const carreraUpdated=await Carreras.findByIdAndUpdate(id,data,{new:true});
        
        if(!carreraUpdated){
            return NextResponse({

                mensaje:"carrera no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            carreraUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}