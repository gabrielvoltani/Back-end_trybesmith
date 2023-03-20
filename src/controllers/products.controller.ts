import { Request, Response } from 'express';
import productsService from '../services/products.service';

const newProduct = async (req: Request, res: Response) => {
  const newP = await productsService.newProduct(req.body);
  return res.status(201).json(newP);
};

const getAllProducts = async (req: Request, res: Response) => {
  const allProducts = await productsService.getAllProducts();
  return res.status(200).json(allProducts);
};

export default {
  newProduct,
  getAllProducts,
};