import ProductsModel from '../models/ProductsModels';
import Products from '../interfaces/ProductsInterface';

export default class ProductsService {
  public model = new ProductsModel();

  public getAll = async (): Promise<Products[]> => {
    const products = await this.model.getAll();
    return products;
  };

  public create = async (name: string, amount: string): Promise<Products> => {
    const product = await this.model.create(name, amount);
    return product;
  };
}