import { ResultSetHeader } from 'mysql2';
import Product from '../interfaces/product.interface';
import connection from './connection';

const newProduct = async (prodInfo: Product): Promise<Product> => {
  const { name, amount } = prodInfo;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  return { id: insertId, name, amount };
};

export default { newProduct };