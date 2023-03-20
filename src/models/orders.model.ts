import { RowDataPacket } from 'mysql2';
import { Order } from '../interfaces/order.interface';
import connection from './connection';

const getAllOrders = async (): Promise<Order[]> => {
  const [orders] = await connection.execute<Order[] & RowDataPacket[]>(`
    SELECT orders.id, orders.user_id AS userId, JSON_ARRAYAGG(pro.id) AS productsIds
    FROM Trybesmith.orders AS orders
    INNER JOIN Trybesmith.products AS pro ON orders.id = pro.order_id
    GROUP BY orders.id;
  `);
  return orders;
};

export default { getAllOrders };
