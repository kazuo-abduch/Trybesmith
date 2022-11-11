import UsersModels from '../models/UserModels';
import Users from '../interfaces/UsersInterface';

export default class UsersServices {
  public model = new UsersModels();

  public create =
  async (username: string, classe: string, level: number, password: string): Promise<Users> => {
    const user = await this.model.create(username, classe, level, password);
    return user;
  };
}