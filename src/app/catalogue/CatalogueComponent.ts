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
    brand: null,
    price: null,
    stock: null
  };

  async getProducts() {
    const response = await fetch(`https://66422c253d66a67b343683a2.mockapi.io/api/get/product`);
    this.products = await response.json();
    console.log(this.products);
  }

  async delete(product: Product) {
    const response = await fetch(`https://66422c253d66a67b343683a2.mockapi.io/api/get/product/${product.id}`, {
      method: 'DELETE'
    });
    this.products = this.products.filter(p => p.id !== product.id);
    console.log(response);
  }

  async save(event: Event) {
    event.preventDefault();
    const response = await fetch(`https://66422c253d66a67b343683a2.mockapi.io/api/get/product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.product)
    });
    this.products.push(this.product);
    const savedProduct = await response.json();
    console.log(savedProduct);
  }


  async getProduct(id: number) {
    const response = await fetch(`https://66422c253d66a67b343683a2.mockapi.io/api/get/producs/${id}`);
    const product = await response.json();
    console.log(product);
  }

  async updateProduct(product: Product) {
    const response = await fetch(`https://66422c253d66a67b343683a2.mockapi.io/api/get/product/${product.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });
    const updatedProduct = await response.json();
    console.log(updatedProduct);
  }

  selectType(type: string) {
    this.product.type = type;
  }

}
