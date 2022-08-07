import {Router} from 'express';
const router = Router();
import {postPayables, getPayables, getPayableByBarcode , getPayable, putPayable, deletePayable, getPayableByTipoServicio, getPayableByPaymentStatus} from '../controller/payables';
import {check, body} from 'express-validator';
import payables from '../models/payables';

router.post('/payables', postPayables);
router.get('/payables', getPayables);
router.get('/payables/:id', getPayable);
router.get('/payables/filter/:typeservice', getPayableByTipoServicio)
router.get('/payables/barcode/:barcode', getPayableByBarcode);
router.get('/payables/status/:paymentstatus', getPayableByPaymentStatus);

export default router;