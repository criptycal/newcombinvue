import {connect} from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const startConnection = async () => {
    try {
        const db = await connect(`mongodb+srv://criptycal:${process.env.PASS}@sandbox.c52iz.mongodb.net/?retryWrites=true&w=majority`)        
        console.log('DB is connected');
    } catch (error) {
        console.log(error);
    }
        
    }
