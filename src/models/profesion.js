import mongoose from 'mongoose';

const { Schema,model,models,ObjectId } = mongoose;

const profesionSchema = new Schema({
    nombre:{
        type: String,
        required:[true,'El nombre es requerido'],
        
        trim:true,
    },
    
    grado:{
        type:ObjectId,
        ref:'Grado'
      },
      
      
    
    
    }, 
    {
        timestamps: true
    });

export default models.Profesion || model('Profesion',profesionSchema);