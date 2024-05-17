import { Component } from '@angular/core';
import { Product } from '../Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-lubri-card-list',
  templateUrl: './lubri-card-list.component.html',
  styleUrl: './lubri-card-list.component.scss'
})
export class LubriCardListComponent {

  products :Product[] = [];
  
  constructor(private productsService: ProductsService) {
    productsService.products.subscribe(p => this.products = p);
    
  }

}
