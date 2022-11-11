import { ResultSetHeader } from 'mysql2';
import Products from '../interfaces/ProductsInterface';
import connection from './connection';

export default class ProductsModel {
  public getAll = async (): Promise<Products[]> => {
    const [products] = await connection
      .execute('SELECT * FROM Trybesmith.Products');
    return products as Products[];
  };

  public create = async (name: string, amount: string): Promise<Products> => {
    const [product] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);',
      [name, amount],
    );

    return { id: product.insertId, name, amount };
  };
}