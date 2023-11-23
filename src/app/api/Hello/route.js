import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';

export async function GET(){
    await connectDB();
    return NextResponse.json({
        mensaje:"Hola Mundo"
    })
}