import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Pagos from '@/models/pago';

export async function GET(){
    try {
        await connectDB();
        const pagos= await Pagos.find();
        return NextResponse.json({
            pagos
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}
export async function POST(request){
    try {
        await connectDB();
        const data = await request.json();
        const newPago = new Pagos(data); 
        const respuesta = await newPago.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }
}