import { Router } from 'express';
import productsRoutes from './productsRoutes';
import usersRoutes from './usersRoutes';
import ordersRoutes from './ordersRoutes';

const router = Router();

router.use('/products', productsRoutes);

router.use('/users', usersRoutes);

router.use('/orders', ordersRoutes);

export default router;