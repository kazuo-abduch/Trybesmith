import OrdersModel from '../models/OrderModels';
import ProductsModel from '../models/ProductsModels';
import Order from '../interfaces/OrdersInterface';

export default class OrdersService {
  public model = new OrdersModel();

  public productModel = new ProductsModel();

  public getAll = async (): Promise<Order[]> => {
    const orders = await this.model.getAll();
    const newOrders = await Promise.all(orders.map(async (order) => {
      const allProducts = await this.productModel.getAll();
      const arrOfProductsIs:number[] = [];
      allProducts.map((product) => {
        if (product.orderId === order.id) {
          arrOfProductsIs.push(product.id);
        }
        return arrOfProductsIs;
      });
      return ({
        ...order,
        productsIds: arrOfProductsIs,
      });
    }));
    
    return newOrders;
  };
}