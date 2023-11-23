import mongoose from 'mongoose';

const { Schema,model,models,ObjectId } = mongoose;

const cursoSchema = new Schema({
    nombre:{
        type: String,
        required:[true,'El nombre de carrera es requerido'],
        unique:false,
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
    costo_personalizado:{
        type:Number,
        required:[true,'El costo es requerido'],
        trim:true,
    },
    costo_referencial:{
        type:Number,
        required:[true,'El costo referencial es requerido'],
        trim:true,
    },
    eslogan:{
        type: String,
        required:[true,'El eslogan es requerido'],
        trim:true,
    },
    descripcion:{
        type: String,
        required:[true,'La descripcion es requerida'],
        trim:true,
    },
    horas_academicas:{
        type: Number,
        required:[true,'Las horas son requeridas'],
        trim:true,
    },
    horas_reales:{
        type: Number,
        required:[true,'Las horas reales son requeridas'],
        trim:true,
    },
    area:{
        type:ObjectId,
        ref:'Area'
      },
      
      
    dificultad:{
        type:ObjectId,
        ref:'Dificultad'
    }
    
    }, 
    {
        timestamps: true
    });

export default models.Curso || model('Curso',cursoSchema);