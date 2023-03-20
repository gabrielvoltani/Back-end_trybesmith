import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Product } from '../interfaces/product.interface';
import connection from './connection';

const newProduct = async (prodInfo: Product): Promise<Product> => {
  const { name, amount } = prodInfo;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  return { id: insertId, name, amount };
};

const getAllProducts = async (): Promise<Product[]> => {
  const [allProducts] = await
  connection.execute<Product[] & RowDataPacket[]>('SELECT * FROM Trybesmith.products');
  return allProducts;
};

export default {
  newProduct,
  getAllProducts,
};