import { get } from 'http';

export interface Product {
  id?: number;
  image?: string;
  type: string;
  code: string;
  brand: string;
  name: string;
  stock: number;
  purchasePrice: number;
  salePrice: number;
  profit: number;
}

/* class Oil extends Product {
  type: string;

  constructor(id: number, brand: string, price: number, stock: number, type: string) {
    super(id, brand, price, stock);
    this.type = type;
  }

}

class Filter extends Product {
  type: string;

  constructor(id: number, name: string, price: number, stock: number, type: string) {
    super(id, name, price, stock);
    this.type = type;
  }
}
*/