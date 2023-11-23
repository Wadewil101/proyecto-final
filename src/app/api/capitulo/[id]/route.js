import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Capitulos from '@/models/capitulo';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const capitulos= await Capitulos.findById(id);

        if(!capitulos){
            return NextResponse({
                mensaje:"Capitulos no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            capitulos
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
        const capitulos= await Capitulos.deleteOne({'_id':id});
        
        if(!capitulos){
            return NextResponse({
                mensaje:"capitulos no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            capitulos
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
        const capituloUpdated=await Capitulos.findByIdAndUpdate(id,data,{new:true});
        
        if(!capituloUpdated){
            return NextResponse({

                mensaje:"capitulo no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            capituloUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}