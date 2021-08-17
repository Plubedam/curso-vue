import mongoose from 'mongoose'

const Schema = mongoose.Schema

const notasSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre obligatorio']
    },
    descripcion: String,
    usuarioId: String,
    fecha: {
        type: Date,
        default: Date.now
    },
    activo: {
        type: Boolean,
        defaul: true
    }
})

// Convertir a un model
const Nota = mongoose.model('Nota', notasSchema)

export default Nota