import mongoose from 'mongoose';
const { Schema,model,models,ObjectId } = mongoose;

const inscripcionSchema=new Schema({
    alumno:{
        type:ObjectId,
        ref:'Alumno'
    },
    cronograma:{
        type:ObjectId,
        ref:'Cronograma'
    }
},{
    timestamps: true
})
export default models.Inscripcion || model('Inscripcion',inscripcionSchema);