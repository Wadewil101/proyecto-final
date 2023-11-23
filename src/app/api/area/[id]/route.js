import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Areas from '@/models/area';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const areas= await Areas.findById(id);

        if(!areas){
            return NextResponse({
                mensaje:"Area no encontrada"
            },{status:400})
        }

        return NextResponse.json({
        areas
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
        const areas= await Areas.deleteOne({'_id':id});
        
        if(!areas){
            return NextResponse({
                mensaje:"Area no encontrada"
            },{status:400})
        }

        return NextResponse.json({
        areas
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
        const areaUpdated=await Areas.findByIdAndUpdate(id,data,{new:true});
        
        if(!areaUpdated){
            return NextResponse({

                mensaje:"Area no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            areaUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}