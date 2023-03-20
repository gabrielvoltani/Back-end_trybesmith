import { Router } from 'express';
import productsRoutes from './productsRoutes';
import usersRoutes from './usersRoutes';

const router = Router();

router.use('/products', productsRoutes);

router.use('/users', usersRoutes);

export default router;