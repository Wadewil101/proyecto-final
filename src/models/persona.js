import mongoose from 'mongoose';

const { Schema,model,models,ObjectId } = mongoose;

const personaSchema = new Schema({
    primer_apellido:{
        type: String,
        required:[true,'El nombre de carrera es requerido'],
        unique:true,
        trim:true,
    },
    segundo_apellido:{
        type: String,
        required:[true,'El logo es requerido'],
        trim:true,
    },    
    nombres:{
        type: String,
        required:[true,'El color es requerido'],
        trim:true,
    },    
    email:{
        type:String,
        required:[true,'El costo es requerido'],
        trim:true,
    },
    fecha_nacimiento:{
        type:String,
        required:[true,'El costo referencial es requerido'],
        trim:true,
    },
    numero_ci:{
        type: Number,
        required:[true,'El eslogan es requerido'],
        trim:true,
    },
    expedido_ci:{
        type: String,
        required:[true,'La descripcion es requerida'],
        trim:true,
    },
    genero:{
        type: String,
        required:[true,'Las horas son requeridas'],
        trim:true,
    },
    direccion:{
        type: String,
        required:[true,'Las horas reales son requeridas'],
        trim:true,
    },
    telefono_1:{
        type: Number,
        required:[true,'Las horas reales son requeridas'],
        trim:true,
    },
    telefono_2:{
        type: Number,
        required:[true,'Las horas reales son requeridas'],
        trim:true,
    },
    profesion:{
        type:ObjectId,
        ref:'Profesion'
      }
      
      
    
    
    }, 
    {
        timestamps: true
    });

export default models.Persona || model('Persona',personaSchema);