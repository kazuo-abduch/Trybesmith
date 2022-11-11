import { Router } from 'express';
import UsersController from '../controllers/UserControllers';
import UsersMiddleware from '../middlewares/UsersMiddleware';

const router = Router();
const usersMiddleware = new UsersMiddleware();

const usersController = new UsersController();

router.post(
  '/',
  usersMiddleware.validateUsername,
  usersMiddleware.validateClasse,
  usersMiddleware.validateLevel,
  usersMiddleware.validatePassword,
  usersController.create,
);

export default router;