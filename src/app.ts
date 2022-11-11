import express = require('express');
import { Request, Response } from 'express';

import ProductsRoutes from './routes/ProductsRoutes';
import UsersRoutes from './routes/UsersRoutes';
import OrdersRoutes from './routes/OrdersRoutes';

const app = express();

app.use(express.json());
app.use('/products', ProductsRoutes);
app.use('/users', UsersRoutes);
app.use('/orders', OrdersRoutes);

app.get('/', (_request: Request, response: Response) => {
  response.send({ status: 'Ok' });
});

export default app;
