import { Router } from 'express';
import OrdersController from '../controllers/OrderControllers';

const router = Router();

const productsController = new OrdersController();

router.get('/', productsController.getAll);

export default router;