import mongoose from "mongoose";
const {MONGO_DB} = process.env;

if(!MONGO_DB){
    throw new Error("La cadena de conexion es requerida");
}

export const connectDB = async()=>{
    try{
        const {connection} = await mongoose.connect(MONGO_DB);
        if(connection.readyState===1){
            console.log("Mongo DB conectado");
            return Promise.resolve(true);
        }
    }catch(error){
        console.log(error);
        return Promise.reject(false);
    }
}