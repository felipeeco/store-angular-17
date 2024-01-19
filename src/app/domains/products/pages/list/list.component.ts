import { Component, signal, inject } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([
    {
      id: 1,
      title: 'Product one',
      price: 100,
      imageUrl: 'https://picsum.photos/640/640?r=23',
      creationAt: new Date().toISOString()
    },
    {
      id: 2,
      title: 'Product two',
      price: 80,
      imageUrl: 'https://picsum.photos/640/640?r=12',
      creationAt: new Date().toISOString()
    },
    {
      id: 3,
      title: 'Product one',
      price: 100,
      imageUrl: 'https://picsum.photos/640/640?r=23',
      creationAt: new Date().toISOString()
    },
    {
      id: 4,
      title: 'Product two',
      price: 80,
      imageUrl: 'https://picsum.photos/640/640?r=12',
      creationAt: new Date().toISOString()
    },
    {
      id: 5,
      title: 'Product one',
      price: 100,
      imageUrl: 'https://picsum.photos/640/640?r=23',
      creationAt: new Date().toISOString()
    },
    {
      id: 6,
      title: 'Product two',
      price: 80,
      imageUrl: 'https://picsum.photos/640/640?r=12',
      creationAt: new Date().toISOString()
    }
  ]);

  cartService = inject(CartService);

  addToCart(event : Product) {
    if(event) {
      this.cartService.cart.update(lastValue => [...lastValue, event]);
    }
  }
}
