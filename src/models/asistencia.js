import mongoose from "mongoose";
const { Schema,model,models,ObjectId } = mongoose;
const asistenciaSchema=new Schema({
    observacion:{
        type:String,
        trim:true,
        required:[true,"se requiere una observacion"]
    },
    estado:{
        type:Number,
        trim:true,
        required:[true,"se requiere un estado"]
    },
    cronograma:{
        type:ObjectId,
        ref:'Cronograma'
    },
    alumno:{
        type:ObjectId,
        ref:'Alumno'
    }
})
export default models.Asistencia || model('Asistencia',asistenciaSchema);