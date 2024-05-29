import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../Product';

@Component({
  selector: 'app-lubri-search',
  templateUrl: './lubri-search.component.html',
  styleUrl: './lubri-search.component.scss'
})
export class LubriSearchComponent {
  
  query: string = ""; 
  constructor(private productsService: ProductsService) {
  }

  search() {
    this.productsService.searchProduct(this.query);
  }
}
