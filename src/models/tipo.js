import mongoose from 'mongoose';
const { Schema,model,models } = mongoose;
const tipoSchema = new Schema({
  nombre:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"El nombre es obligatorio"]
  },
  horas_reales:{
    type:Number,
    default:0
  }
  
},
{
    timestamps:true
}
);

export default models.Tipo || model('Tipo',tipoSchema);
