import mongoose from 'mongoose';
const { Schema,model,models } = mongoose;
const gradoSchema = new Schema({
  nombre:{
    type:String,
    unique:true,
    trim:true,
    required:[true,"El grado es obligatorio"]
  }
  
},
{
    timestamps:true
}
);

export default models.Grado || model('Grado',gradoSchema);
