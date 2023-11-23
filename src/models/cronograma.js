import mongoose from "mongoose";
const { Schema,model,models,ObjectId } = mongoose;

const cronogramaSchema = new Schema({
  inicio_carrera: {
    type: Boolean,
    trim: true,
    required: [true, "Se requiere inicio de carrera"],
  },
  fecha_inicio: {
    type: Date,
    trim: true,
    required: [true, "Se requiere la fecha de inicio"],
  },
  hora_inicio: {
    type: Number,
    trim: true,
    required: [true, "Se requiere la hora de inicio"],
  },
  duracion_clase: {
    type: Number,
    trim: true,
    required: [true, "La duración de clase es requerida"],
  },
  dias_clase: {
    type: String,
    trim: true,
    required: [true, "Se requieren los días de clases"],
  },
  costo: {
    type: Number,
    trim: true,
    required: [true, "El costo del curso es requerido"],
  },
  costo_mensual: {
    type: Number, // Corregido aquí
    trim: true,   // Puedes eliminar este trim ya que no es necesario
    required: [true, "Se requiere el costo mensual"],
  },
  matricula: {
    type: Number,
    trim: true,
    required: [true, "Se requiere la matrícula del estudiante"],
  },
  promocion: {
    type: Boolean,
    trim: true,
  },
  docente:{
    type:ObjectId,
    ref:'Docente'
  },
  curso:{
    type:ObjectId,
    ref:'Curso'
  },
  tipo:{
    type:ObjectId,
    ref:'Tipo'
}
}, {
  timestamps: true
});

export default models.Cronograma || model('Cronograma', cronogramaSchema);
