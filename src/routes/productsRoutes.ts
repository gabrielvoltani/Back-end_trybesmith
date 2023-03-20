import { Router } from 'express';
import productsController from '../controllers/products.controller';

const productsRoutes = Router();

productsRoutes.post('/', productsController.newProduct);

productsRoutes.get('/', productsController.getAllProducts);

export default productsRoutes;