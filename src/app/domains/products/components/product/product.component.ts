import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { SafeUrlPipe } from '@shared/pipes/sanitizer-url-image.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, DatePipe,
    UpperCasePipe, ReversePipe, TimeAgoPipe, SafeUrlPipe, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input({required: true}) product! : Product;
  @Output() addToCart = new EventEmitter<Product>();
  imageUrl = 'assets/images/default-product.jpeg';

  ngOnInit(): void {
    if(this.product.images[0].slice(0,5) === 'https') {
      this.imageUrl = this.product.images[0];
    }
  }

  addCartHandler() {
    this.addToCart.emit(this.product);
  }
}
