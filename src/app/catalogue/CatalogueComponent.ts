import { Component } from '@angular/core';
import { Product } from '../Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})

export class CatalogueComponent {

  products!: Product[];
  product!: Product;


  constructor(private productService: ProductsService) {
    productService.products.subscribe(p => this.products = p);
  }

  delete(product: Product): void {
    this.productService.delete(product);
  }

  orederByPrice(): void {
    this.products = this.products.sort((a, b) => a.salePrice - b.salePrice);
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

  updateStock(product: Product, quantity: number): void {
    this.productService.updateStock(product, quantity);
  }
}
