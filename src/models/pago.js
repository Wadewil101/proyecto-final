import mongoose from 'mongoose';
const { Schema,model,models,ObjectId } = mongoose;
const pagoSchema = new Schema({
  monto:{
    type:Number,
    trim:true,
    required:[true,"El monto es obligatorio"]
  },
  concepto:{
    type: String,
    required:[true,'El concepto de pago es requerido'],
    trim:true,
  },
  observacion:{
    type: String,
    required:[true,'La observacion para el pago es requerido'],
    trim:true,
  },
  inscripcion:{
    type:ObjectId,
    ref:'Inscripcion'
  }
},
{
    timestamps:true
}
);

export default models.Pago || model('Pago',pagoSchema);