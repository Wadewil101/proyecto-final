import mongoose from 'mongoose';

const { Schema,model,models,ObjectId } = mongoose;

const bancoSchema = new Schema({
  nombre:{
    type:String,
    trim:true,
    required:[true,"El nombre es obligatorio"]
  },
  icono:{
    type:String,
    trim:true,
    required:[true,"Icono Obligatorio"],
    default:'#'
  },
  visible:{
    type:Boolean,
    default:true
  },
  orden:{
    type:Number,
    default:0
  },
  materia:{
    type:ObjectId,
    ref:'Materia'
  }
},
{
    timestamps:true
}
);

export default models.BancoPregunta || model('BancoPregunta',bancoSchema);