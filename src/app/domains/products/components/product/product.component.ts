import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() img: string = 'https://picsum.photos/640/640?r=' + Math.floor(Math.random() * 100);
  @Input({ required: true }) price: number = 0;
  @Input({ required: true }) title: string = '';

  @Output() addToCart = new EventEmitter<string>();

  addCartHandler() {
    console.log('click form child');
    this.addToCart.emit('Hola este es un mensaje desde el hijo');
  }
}
