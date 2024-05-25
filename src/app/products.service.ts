import { Injectable } from '@angular/core';
import { Product } from './Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = 'https://66422c253d66a67b343683a2.mockapi.io/api/get/product';
  private lubeManagerAPI = 'http://localhost:8080';
  private _products :Product[] = [];
  products: BehaviorSubject<Product[]> = new BehaviorSubject(this._products);

  constructor() {
    this.getProducts();
  }

  async getProducts() {
    let response = await fetch(this.url);
    this._products = await response.json();
    this.products.next(this._products);
  }

  async delete(product :Product) {
    let response = await fetch(this.url + `/${product.id}`, {
      method: 'DELETE'
    });
    this._products = this._products.filter(p => p.id !== product.id);
    this.products.next(this._products);
  }

  async save(product: Product): Promise<number> {
    try {
      let productCopy = { ...product, salePrice: this.getSalePrice(product) };
      let response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productCopy)
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let savedProduct = await response.json();
      this._products.push(savedProduct);
      this.products.next(this._products);
      return response.status;
    } catch (error) {
      console.error('There was a problem with the save operattion', error);
      throw error;
    }
  }

  async getProductBy(id :number) {
    let response = await fetch(this.url+`/${id}`);
    let product = await response.json();
  }

  async updateProduct(id? :number, product? :Product) {
    let response = await fetch(this.url+`/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
    let updatedProduct = await response.json();
  }

  getSalePrice(product: Product): number {
    return (product.purchasePrice * (1+product.profit / 100));
  }

  async searchProducts(query: string): Promise<Product[]>{
    return fetch(this.url + `?search=${query}`).then(response => response.json());
  }
}
