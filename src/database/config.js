import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config()

const dbConnection = async () => {

    try {

        await mongoose.connect(process.env.DB_CNN);

        console.log('DB Online');

    } catch (error) {

        console.log(error);
        throw new Error('Error al inicializar BD')

    }

}

export default dbConnection