import { Component } from '@angular/core';
import { Product } from '../Product';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lubri-card-list',
  templateUrl: './lubri-card-list.component.html',
  styleUrl: './lubri-card-list.component.scss'
})

export class LubriCardListComponent {
  allProducts: Product[] = [];
  products: Product[] = [];

  constructor(private productsService: ProductsService, private route: ActivatedRoute) {
    this.productsService.products.subscribe(p => {
      this.allProducts = p;
      this.filterProducts();
    });
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.filterProducts(params['type']);
    });
  }
  
  filterProducts(type?: string) {
    if (type) {
      this.products = this.allProducts.filter(p => {
        return p.type === type;
      });
    } else {
      this.products = this.allProducts;
    }
  }
}

