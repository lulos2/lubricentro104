import { get } from 'http';

export interface Product {
  id?: number;
  type?: string;
  brand: null;
  price: null;
  stock: null;

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