import { Product } from '../interfaces/product.interface';
import productsModel from '../models/products.model';

const newProduct = async (prodInfo: Product): Promise<Product> => {
  const newP: Product = await productsModel.newProduct(prodInfo);
  return newP;
};

const getAllProducts = async (): Promise<Product[]> => {
  const allProducts: Product[] = await productsModel.getAllProducts();
  return allProducts;
};

export default {
  newProduct,
  getAllProducts,
};