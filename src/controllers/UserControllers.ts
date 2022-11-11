import { Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import { sign } from 'jsonwebtoken';
import UsersService from '../services/UsersService';

dotenv.config();

const jwtConfig = {
  expiresIn: '60m',
};

export default class UsersControllers {
  constructor(private usersService = new UsersService()) {}

  public create = async (r: Request, rs: Response, next: NextFunction):Promise<Response | void> => {
    const { username, classe, level, password } = r.body;
    try {
      const user = await this.usersService.create(username, classe, level, password);
      const token = sign({ user }, String(process.env.JWT_SECRET), jwtConfig);
      return rs.status(201).json({ token });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rs.status(400).json({ message: error.message });
      }
      next(error);
    }
  };
}