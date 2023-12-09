import { Router } from 'express';
import authRoute from './auth.js';
import photoRoute from './photo.js';
import customerRoute from './customer.js';

const router = new Router();

router.use(authRoute);
router.use('/photos', photoRoute);
router.use('/customers', customerRoute);

export default router;
