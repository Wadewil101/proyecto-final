import { NextResponse } from "next/server";
import {connectDB} from '@/libs/mongoose';
import Users from '@/models/user';

export async function GET(){
    try {
        await connectDB();
        const users= await Users.find();
        return NextResponse.json({
            users
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
        const newUsuario = new Users(data); 
        const respuesta = await newUsuario.save();
        console.log(data);
        return NextResponse.json({
        respuesta
        })
    } catch (error) {
        console.log(error)
        return NextResponse(error.mensaje,{status:400})
    }

}