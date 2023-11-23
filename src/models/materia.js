import mongoose from 'mongoose';
const { Schema,model,models } = mongoose;
const materiaSchema = new Schema({
  titulo:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"El nombre es obligatorio"]
  },
  imagen:{
    type:String,
    trim:true,
    required:[true,"Imagen Obligatoria"],
    default:'#'
  },
  visible:{
    type:Boolean,
    default:true
  },
  orden:{
    type:Number,
    default:0
  }
},
{
    timestamps:true
}
);

export default models.Materia || model('Materia',materiaSchema);