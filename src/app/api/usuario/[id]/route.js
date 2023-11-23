import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Usuarios from '@/models/usuario';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const usuarios= await Usuarios.findById(id);

        if(!usuarios){
            return NextResponse({
                mensaje:"Profesiones no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            usuarios
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
        const usuarios= await Usuarios.deleteOne({'_id':id});
        
        if(!usuarios){
            return NextResponse({
                mensaje:"Profesiones no encontradas"
            },{status:400})
        }

        return NextResponse.json({
            usuarios
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
        const usuariosUpdated=await Usuarios.findByIdAndUpdate(id,data,{new:true});
        
        if(!usuariosUpdated){
            return NextResponse({

                mensaje:"usuario no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            usuariosUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}