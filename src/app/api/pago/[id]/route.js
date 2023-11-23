import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Pagos from '@/models/pago';

export async function GET(request,{params}){
    try {
        await connectDB();
        const id = params.id;
        const pagos= await Pagos.findById(id);

        if(!pagos){
            return NextResponse({
                mensaje:"Pagos no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            pagos
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
        const pagos= await Pagos.deleteOne({'_id':id});
        
        if(!pagos){
            return NextResponse({
                mensaje:"pagos no encontrada"
            },{status:400})
        }

        return NextResponse.json({
            pagos
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
        const pagoUpdated=await Pagos.findByIdAndUpdate(id,data,{new:true});
        
        if(!pagoUpdated){
            return NextResponse({

                mensaje:"pago no encontrado"
            },{status:400})
        }

        return NextResponse.json({
            pagoUpdated 
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}