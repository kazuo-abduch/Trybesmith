import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';
import ProductsMiddleware from '../middlewares/ProductsMiddleware';

const router = Router();
const productsMiddleware = new ProductsMiddleware();

const productsController = new ProductsController();

router.get('/', productsController.getAll);
router.post(
  '/',
  productsMiddleware.validateName,
  productsMiddleware.validateAmount,
  productsController.create,
);

export default router;