import Product from '../interfaces/product.interface';
import productsModel from '../models/products.model';

const newProduct = async (prodInfo: Product): Promise<Product> => {
  const newP: Product = await productsModel.newProduct(prodInfo);
  return newP;
};

export default { newProduct };