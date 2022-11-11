import { Request, Response, NextFunction } from 'express';
import OrderService from '../services/OrdersService';

export default class ProductsController {
  constructor(private ordersService = new OrderService()) {}

  public getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const orders = await this.ordersService.getAll();
      res.status(200).json(orders);      
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      }
      next(error);
    }
  };
}