import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  
  @Input() productCard!: Product;

  @Output() productCardChange: EventEmitter<Product> = new EventEmitter<Product>();
  constructor() {
     
  }

}
