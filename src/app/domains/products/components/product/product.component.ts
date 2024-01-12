import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  @Input({required: true}) product! : Product;
  @Output() addToCart = new EventEmitter<string>();

  addCartHandler() {
    console.log('click form child');
    this.addToCart.emit('Hola este es un mensaje desde el hijo');
  }
}
