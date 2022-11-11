import { Request, Response, NextFunction } from 'express';

export default class UsersMiddlewares {
  public validateUsername =
  async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const { username } = req.body;
    if (username === undefined || username === '') {
      return res.status(400).json({ message: '"username" is required' });
    }
    if (typeof username !== 'string') {
      return res.status(422).json({ message: '"username" must be a string' });
    }
    if (username.length < 3) {
      return res.status(422)
        .json({ message: '"username" length must be at least 3 characters long' });
    }
    next();
  };

  public validateClasse = 
  async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const { classe } = req.body;
    if (classe === undefined || classe === '') {
      return res.status(400).json({ message: '"classe" is required' });
    }
    if (typeof classe !== 'string') {
      return res.status(422).json({ message: '"classe" must be a string' });
    }
    if (classe.length < 3) {
      return res.status(422).json({
        message: '"classe" length must be at least 3 characters long',
      });
    }
    next();
  };

  public validateLevel = 
  async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const { level } = req.body;
    if (level === undefined || level === '') {
      return res.status(400).json({ message: '"level" is required' });
    }
    if (typeof level !== 'number') {
      return res.status(422).json({ message: '"level" must be a number' });
    }
    if (level < 1) {
      return res.status(422).json({
        message: '"level" must be greater than or equal to 1',
      });
    }
    next();
  };

  public validatePassword = 
  async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const { password } = req.body;
    if (password === undefined || password === '') {
      return res.status(400).json({ message: '"password" is required' });
    }
    if (typeof password !== 'string') {
      return res.status(422).json({ message: '"password" must be a string' });
    }
    if (password.length < 8) {
      return res.status(422).json({
        message: '"password" length must be at least 8 characters long',
      });
    }
    next();
  };
}