import { Component } from '@angular/core';
import { Product } from './Product';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})

export class CatalogueComponent {

  products: Product[] = [];

  constructor() {
    this.getProducts();
  }

  product: Product = {
    type: "indefinido",
    brand: "indefinido",
    code: "indefinido",
    name: "indefinido",
    purchasePrice: 0,
    salePrice:0,
    profit: 66,
    stock: 0,
  };

  async getProducts() {
    let response = await fetch(`https://66422c253d66a67b343683a2.mockapi.io/api/get/product`);
    this.products = await response.json();
    console.log(this.products);
  }

  async delete(product :Product) {
    let response = await fetch(`https://66422c253d66a67b343683a2.mockapi.io/api/get/product/${product.id}`, {
      method: 'DELETE'
    });
    this.products = this.products.filter(p => p.id !== product.id);
    console.log(response);
  }

  async save(event :Event) {
    event.preventDefault();
    this.product.salePrice = this.getSalePrice();
    let response = await fetch(`https://66422c253d66a67b343683a2.mockapi.io/api/get/product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.product)
    });
    let savedProduct = await response.json();
    this.products.push(savedProduct);
    console.log(savedProduct);
  }

  async getProductBy(id :number) {
    let response = await fetch(`https://66422c253d66a67b343683a2.mockapi.io/api/get/product/${id}`);
    let product = await response.json();
    console.log(product);
  }

  async updateProduct(id? :number) {
    let response = await fetch(`https://66422c253d66a67b343683a2.mockapi.io/api/get/product/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.product)
    });
    let updatedProduct = await response.json();
    console.log(updatedProduct);
  }

  getSalePrice(): number {
    return (this.product.purchasePrice * (1+this.product.profit / 100));
  }

  selectType(type: string) {
    this.product.type = type;
  }


  orederByPrice(): void {
    this.products = this.products.sort((a, b) => a.salePrice - b.salePrice);
    console.log(this.products);
  }

  orderByStock(): void {
    this.products = this.products.sort((a, b) => a.stock - b.stock);
  }

  orderByType(): void {
    this.products = this.products.sort((a, b) => a.type.localeCompare(b.type));
  }

  orderByBrand(): void {
    this.products = this.products.sort((a, b) => a.brand.localeCompare(b.brand));
  }

  orderByCode(): void {
    this.products = this.products.sort((a, b) => a.code.localeCompare(b.code));
  }

  orderByName(): void {
    this.products = this.products.sort((a, b) => a.name.localeCompare(b.name));
  }

  searchByCode(code: string): void {
    this.products = this.products.filter(p => p.code.includes(code));
  }
}
