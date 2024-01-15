import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';

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
      id: Date.now(),
      title: 'Product one',
      price: 100,
      imageUrl: 'https://picsum.photos/640/640?r=23',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Product two',
      price: 80,
      imageUrl: 'https://picsum.photos/640/640?r=12',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Product one',
      price: 100,
      imageUrl: 'https://picsum.photos/640/640?r=23',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Product two',
      price: 80,
      imageUrl: 'https://picsum.photos/640/640?r=12',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Product one',
      price: 100,
      imageUrl: 'https://picsum.photos/640/640?r=23',
      creationAt: new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Product two',
      price: 80,
      imageUrl: 'https://picsum.photos/640/640?r=12',
      creationAt: new Date().toISOString()
    }
  ]);

  fromChild(event : string) {
    console.log('estamos en el padre', event)
  }
}
