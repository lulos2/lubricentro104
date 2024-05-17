import { Component } from '@angular/core';
import { Product } from '../Product';
import { CatalogueComponent } from '../catalogue/CatalogueComponent';

@Component({
  selector: 'app-lubri-card-list',
  templateUrl: './lubri-card-list.component.html',
  styleUrl: './lubri-card-list.component.scss'
})
export class LubriCardListComponent {

  products :Product[] = [];
  
  constructor() {
    
  }

}
