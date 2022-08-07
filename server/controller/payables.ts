//model
import Payables from '../models/payables';
import { validationResult } from 'express-validator';

/*
    @route   POST api/payables
*/
export const postPayables = async (req: any, res: any, next: any) => {
    try {
        const {tipoServicio, description, fechavencimiento, importeServicio, paymentStatus, barcode} = req.body;
        const payable = new Payables({tipoServicio, description, fechavencimiento, importeServicio, paymentStatus, barcode});
        const savedPayable = await payable.save();
        console.log('balota guardada en la base de datos');
        return res.status(201).json(savedPayable);
    } catch (error) {
        console.log(error);
    }

}

/*
    @route   GET api/payables
*/
export const getPayables = async (req: any, res: any, next: any) => {
    try {
        const payables = await Payables.find();
        res.json(payables);
    } catch (error) {
        console.log(error);
    }
}

/*
    @route   GET api/payables/:id
*/

export const getPayable = async (req: any, res: any, next: any) => {
    try {
        const payable = await Payables.findById(req.params.id);
        return res.json(payable);
    } catch (error) {
        console.log(error);
    }
}

/*
    @route   PUT api/payables/:id
*/
export const putPayable = async (req: any, res: any, next: any) => {
    try {
        const payable = await Payables.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.json(payable);
    } catch (error) {
        console.log(error);
    }
}

/*
    @route   DELETE api/payables/:id
*/
export const deletePayable = async (req: any, res: any, next: any) => {
    try {
        const payable = await Payables.findByIdAndDelete(req.params.id);
        res.json(payable);
    } catch (error) {
        console.log(error);
    }
}

export const getPayableByTipoServicio = async (req: any, res: any, next: any) => {
    try {
        const {typeservice} = req.params;
        const payable = await Payables.find({tipoServicio: typeservice});
        res.json(payable);
    } catch (error) {
        console.log(error);
    }
}

export const getPayableByBarcode = async (req: any, res: any, next: any) => {
    try {
        const {barcode} = req.params;
        const payable = await Payables.find({barcode: barcode});
        res.json(payable);
    } catch (error) {
        console.log(error);
    }
} 

export const getPayableByPaymentStatus = async (req: any, res: any, next: any) => {
    try {
        const {paymentstatus} = req.params;
        const payable = await Payables.find({paymentStatus: paymentstatus});
        res.json(payable);
    } catch (error) {
        console.log(error);
    }
}




