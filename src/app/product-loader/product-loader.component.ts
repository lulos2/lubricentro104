import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../Product';
import { time } from 'console';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-product-loader',
  templateUrl: './product-loader.component.html',
  styleUrl: './product-loader.component.scss'
})
export class ProductLoaderComponent {

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

  status: number = 0;

  constructor(private productsService: ProductsService) {

  }

  save(): void {
    this.productsService.save(this.product).then((status) => {this.status = status;});
    setTimeout(() => { this.status = 0; }, 3000);
  }

  selectType(type: string): void {
    this.product.type = type;
  }
}
