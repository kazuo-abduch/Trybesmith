import { Request, Response, NextFunction } from 'express';

export default class ProductsMiddleware {
  public validateName =
  async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const { name } = req.body;
    if (name === undefined || name === '') {
      return res.status(400).json({ message: '"name" is required' });
    }
    if (typeof name !== 'string') {
      return res.status(422).json({ message: '"name" must be a string' });
    }
    if (name.length < 3) {
      return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
    }
    next();
  };

  public validateAmount = 
  async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const { amount } = req.body;
    if (amount === undefined || amount === '') {
      return res.status(400).json({ message: '"amount" is required' });
    }
    if (typeof amount !== 'string') {
      return res.status(422).json({ message: '"amount" must be a string' });
    }
    if (amount.length < 3) {
      return res.status(422).json({
        message: '"amount" length must be at least 3 characters long',
      });
    }
    next();
  };
}