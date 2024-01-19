import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  total = computed<number>(() => this.cart().reduce((accumulator, product) => accumulator + product.price, 0));

  constructor() { }

  addToCart(product : Product) {
    this.cart.update(state => [...state, product]);
  }
}
