import mongoose from 'mongoose';

const { Schema,model,models,ObjectId } = mongoose;

const topicoSchema = new Schema({
    subtitulo:{
        type: String,
        required:[true,'El subtitulo es requerido'],
        trim:true
    },
    archivo_url:{
        type: String,
        required:[true,'El archivo es requerido'],
        trim:true,
    },    
    capitulo:{
        type:ObjectId,
        ref:'Capitulo'
      },
      
      
    
    
    }, 
    {
        timestamps: true
    });

export default models.Topico || model('Topico',topicoSchema);