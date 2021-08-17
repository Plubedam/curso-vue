import express from 'express'
const router = express.Router()
const errorTemplate = {
    mensaje: 'Ocurrió un error'
}

// Importar el modelo nota
import Nota from '../models/nota'

// Agregar una nota
router.post('/nueva-nota', async(req, res) => {
    const body = req.body

    try {

        // Se guarda en la base de datos
        const notaDb = await Nota.create(body)

        res.status(200).json(notaDb)

    } catch (error) {
        errorTemplate.error = error
        return res.status(500).json(errorTemplate)
    }
})

// Get con parámetros
router.get('/nota/:id', async(req, res) => {
    // Mongo genera un parametro "_id" por cada entrada de una colección. 
    const _id = req.params.id

    try {
        const notaDb = await Nota.findOne({_id})
        // El estado 200 es el defecto en express, se puede omitir
        res.json(notaDb)
    } catch (error) {
        errorTemplate.error = error
        return res.status(400).json(errorTemplate)
    }
})

// Get con todos los documentos
router.get('/nota', async(req, res) => {
     try {
        const notaDb = await Nota.find()

        res.json(notaDb)
     } catch (error) {
        errorTemplate.error = error
        return res.status(400).json(errorTemplate)
     }
})

// Delete eliminar una nota
router.delete('/nota/:id', async(req, res) => {
    const _id = req.params.id
    
    try {
        const notaDb = await Nota.findByIdAndDelete({_id}) 

        res.json(notaDb)
    } catch (error) {
        errorTemplate.error = error
        return res.status(400).json(errorTemplate)
    }
})

// Put actualizar una nota
router.put('/nota/:id', async(req, res) => {
    const _id = req.params.id
    const body = req.body

    try {
        const notaDb = await Nota.findByIdAndUpdate(_id, body, {new: true}) // new true para que devuelva como respuesta la nota actualizada y no la antigua
        res.json(notaDb)
    } catch (error) {
        errorTemplate.error = error
        return res.status(400).json(errorTemplate)
    }
})

// Exportación de router
module.exports = router