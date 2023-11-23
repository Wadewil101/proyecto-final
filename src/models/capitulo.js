import mongoose from 'mongoose';

const { Schema,model,models,ObjectId } = mongoose;

const capituloSchema = new Schema({
    titulo:{
        type: String,
        required:[true,'El titulo es requerido'],
        unique:true,
        trim:true,
    },
    curso:{
        type:ObjectId,
        ref:'Curso'
      }
    
    }, 
    {
        timestamps: true
    });

export default models.Capitulo || model('Capitulo',capituloSchema);