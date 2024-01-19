import { Component, signal, Input, inject } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  cartService = inject(CartService);

  isHideSideMenu = signal(true);
  toogleSideMenu() {
    this.isHideSideMenu.update(prevState => !prevState);
  }
}
