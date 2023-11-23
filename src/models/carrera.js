import mongoose from 'mongoose';

const { Schema,model,models,ObjectId } = mongoose;

const carreraSchema = new Schema({
    nombre:{
        type: String,
        required:[true,'El nombre de carrera es requerido'],
        unique:true,
        trim:true,
    },
    logo:{
        type: String,
        required:[true,'El logo es requerido'],
        trim:true,
    },    
    color_hexa:{
        type: String,
        required:[true,'El color es requerido'],
        trim:true,
    },    
    costo_mensual:{
        type:Number,
        required:[true,'El costo es requerido'],
        trim:true,
    },
    
    cursos:{
        type:ObjectId,
        ref:'Curso'
      },
      
      
    
    
    }, 
    {
        timestamps: true
    });

export default models.Carrera || model('Carrera',carreraSchema);