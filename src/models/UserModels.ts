import { ResultSetHeader } from 'mysql2';
import Users from '../interfaces/UsersInterface';
import connection from './connection';

export default class ProductsModel {
  public create =
  async (username: string, classe: string, level: number, password: string): Promise<Users> => {
    const [user] = await connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
      [username, classe, level, password],
    );

    return { id: user.insertId, username, classe, level, password };
  };
}