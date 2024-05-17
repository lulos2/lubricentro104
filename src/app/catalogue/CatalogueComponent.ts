import { Component } from '@angular/core';
import { Product } from '../Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})

export class CatalogueComponent {

  products: Product[] = [];

  constructor(private productService: ProductsService) {
    productService.products.subscribe(p => this.products = p);
  }

  product: Product = {
    image: "../../assets/images/logo.jpg",
    type: "indefinido",
    brand: "indefinido",
    code: "indefinido",
    name: "indefinido",
    purchasePrice: 0,
    salePrice:0,
    profit: 66,
    stock: 0,
  };

  save(): void {
    this.productService.save(this.product);
  }

  update(): void {
    this.productService.updateProduct(this.product.id, this.product);
  }

  delete(product: Product): void {
    this.productService.delete(product);
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
