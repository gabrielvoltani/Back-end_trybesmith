import { Order } from '../interfaces/order.interface';
import ordersModel from '../models/orders.model';

const getAllOrders = async (): Promise<Order[]> => {
  const orders: Order[] = await ordersModel.getAllOrders();
  return orders;
};

export default { getAllOrders };