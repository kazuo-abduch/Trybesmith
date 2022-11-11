import { Request, Response, NextFunction } from 'express';
import ProductsService from '../services/ProductsService';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  public getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await this.productsService.getAll();
      res.status(200).json(products);      
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      }
      next(error);
    }
  };

  public create = async (r: Request, rs: Response, next: NextFunction):Promise<Response | void> => {
    const { name, amount } = r.body;
    try {
      const product = await this.productsService.create(name, amount);
      return rs.status(201).json(product);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rs.status(400).json({ message: error.message });
      }
      next(error);
    }
  };
}