import Orders from '../interfaces/OrdersInterface';
import connection from './connection';

export default class OrdersModel {
  public getAll = async (): Promise<Orders[]> => {
    const [orders] = await connection
      .execute('SELECT * FROM Trybesmith.Orders');
    return orders as Orders[];
  };
}