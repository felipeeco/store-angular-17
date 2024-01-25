import { Component, signal, Input, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
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
