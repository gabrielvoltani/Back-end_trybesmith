import { Request, Response } from 'express';
import productsService from '../services/products.service';

const newProduct = async (req: Request, res: Response) => {
  const newP = await productsService.newProduct(req.body);
  return res.status(201).json(newP);
};

export default { newProduct };