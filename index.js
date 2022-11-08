import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';

import dbConnection from './src/database/config.js';
import taskRouter from './src/routes/task.js';

dotenv.config()

// Crear el servidor de express
const app = express();

// base de datos
dbConnection();

// CORS
app.use(cors());

//direcrorio publico
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

// rutas
app.use('/api/task', taskRouter);

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})