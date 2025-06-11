const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
  nombre: { type: String, required: true }, 
  descripcion: { type: String, required: true }, 
  costo: { type: Number, required: true },
  disponible: { type: Boolean, default: true },
  categoria: { type: String, enum: ['Mantenimiento', 'Reparación', 'Instalación', 'Diagnóstico', 'Otro...'], required: true },     
  garantia_dias: { type: Number, required: false }  
});

module.exports = mongoose.model('servicios', servicioSchema); 