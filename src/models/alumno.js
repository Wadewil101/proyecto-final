import mongoose from 'mongoose';

const { Schema,model,models,ObjectId } = mongoose;

const alumnoSchema = new Schema({
    preinscripciones_incompletas:{
        type: Number,
        required:[true,'El preinscripciones es requerido'],
        trim:true,
    },
    
    persona:{
        type:ObjectId,
        ref:'Persona'
      }
      
      
    
    
    }, 
    {
        timestamps: true
    });

export default models.Alumno || model('Alumno',alumnoSchema);