import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

const app = express()
 
// Middleware 
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Conexión a DB
const uri = 'mongodb://localhost:27017/udemy'
const options = {
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
}

mongoose.connect(uri, options).then(
    () => {
        console.log("Conectado a MongoDb")
    },
    err => { err }
)

// Rutas
// app.get('/', function(req, res){
//     res.send('Hola mundo')
// })

app.use('/api', require('./routes/nota'))

// Path dinámico para indicar la carpeta estática del servidor y middleware para Vue.js router modo history
const history = require('connect-history-api-fallback')
app.use(history())
app.use(express.static(path.join(__dirname, 'public')))

// Puerto
app.set('puerto', process.env.PORT || 3000)

app.listen(app.get('puerto'), function(){
    console.log('Escuchando el puerto: ', app.get('puerto'))
})