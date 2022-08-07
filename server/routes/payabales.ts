import {Router} from 'express';
const router = Router();
import {postPayables, getPayables, getPayable, putPayable, deletePayable, getPayableByTipoServicio} from '../controller/payables';
import {check, body} from 'express-validator';
import payables from '../models/payables';

router.post('/payables', [
    check('barcode').isLength({min: 13}).withMessage('El código de barras debe contener mínimo 13 caracteres')
    .isLength({max: 13}).withMessage('El código de barras debe contener máximo 13 caracteres')
    .custom(
        async(value: string, {req}: any) => {
            const payable = await payables.findOne({barcode: value});
            if (payable) {
                throw new Error('El código de barras ya existe');
            }
        }
    )
], postPayables);
router.get('/payables', getPayables);
router.get('/payables/:id', getPayable);
router.get('/payables/filter/typeservice', getPayableByTipoServicio)

export default router;