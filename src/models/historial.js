import mongoose from "mongoose";
const { Schema,model,models,ObjectId } = mongoose;

const historialSchema =new Schema({
    fecha_finalizacion:{
        type:Date,
        trim:true,
        required:[true,"Fecha Finalizacion obligatoria"]

    },
    nota:{
        type:Number,
        trim:true,
        required:[true,"Lnota es obligatoria"]
    },
    observacion:{
        type:String,
        required:[true,"Requerimiento de observacion obligatoria"],
        trim:true
    },
    certificado:{
        type:Boolean,
        trim:true,
        required:[true,"aprobacion de Certificacion "]


    },
    
    inscripcion:{
        type:ObjectId,
        ref:'Inscripcion'
      }
    
},
{
    timestamps: true
})
export default models.Historial || model('Historial',historialSchema);