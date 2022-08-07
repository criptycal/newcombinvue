import {Schema, model} from 'mongoose';


const payablesSchema = new Schema({
    tipoServicio: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fechavencimiento: {
        type: Date,
        required: true
    },
    importeServicio:{
        type: Number,
        required: true
    },
    paymentStatus: {
        type: String,
        required: true
    },
    barcode: {
        type: String,
        required: true,
        unique: true
    }
    
},
{versionKey: false}
);

export default model('Payables', payablesSchema);