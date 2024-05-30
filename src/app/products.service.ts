import { Injectable } from '@angular/core';
import { Product } from './Product';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const URL = 'https://66422c253d66a67b343683a2.mockapi.io/api/get/product';
//const lubeManagerAPI = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _products :Product[] = [];
  products: BehaviorSubject<Product[]> = new BehaviorSubject(this._products);

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  getProducts() {
      this.http.get<Product[]>(URL).subscribe(products => {
      this._products = products;
      this.products.next(this._products);
    });
  }

  delete(product: Product) {
      return this.http.delete(URL + `/${product.id}`).subscribe(() => {
      this._products = this._products.filter(p => p.id !== product.id);
      this.products.next(this._products);
    });
  }

  async save(product: Product): Promise<number> {
    try {
      let productCopy = { ...product, salePrice: this.getSalePrice(product) };
      let response = await fetch(URL, {
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
      console.error(error);
      throw error;
    }
  }

  async getProductBy(id :number) {
    let response = await fetch(URL+`/${id}`);
    let product = await response.json();
  }

  getSalePrice(product: Product): number {
    return (product.purchasePrice * (1+product.profit / 100));
  }

  searchProduct(term: string) {
    let products = this._products.filter(p =>
      p.name.toLowerCase().includes(term.toLowerCase()) ||
      p.type.toLowerCase().includes(term.toLowerCase()) ||
      p.brand.toLowerCase().includes(term.toLowerCase()) ||
      p.code.toLowerCase().includes(term.toLowerCase()) ||
      p.salePrice.toString().includes(term) ||
      p.stock.toString().includes(term)
    );
    this.products.next(products);
  }
}
