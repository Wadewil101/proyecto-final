import mongoose from 'mongoose';
const { Schema,model,models } = mongoose;
const areaSchema = new Schema({
  nombre:{
    type:String,
    trim:true,
    required:[true,"El nombre es obligatorio"]
  }
  
},
{
    timestamps:true
}
);

export default models.Area || model('Area',areaSchema);
