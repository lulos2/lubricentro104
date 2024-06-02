import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  @Input()
  quantity!: number;
  @Input()
  max!: number;
  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  upQuantity(): void {
    if(this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  verifyProductQuantity(): void {
    if(this.quantity > this.max) {
      alert("No hay suficientes cervezas en stock");
      this.quantity = this.max;
    }
    if(this.quantity < 0) {
      alert("No se pueden encargar cervezas negativas ");
      this.quantity = 0;
    }
    this.quantityChange.emit(this.quantity);
  }

}
