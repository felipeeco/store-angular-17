import { Component, signal, Input } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input({required: true}) cartProdcuts : Product[] = [];

  get total(): number {
    return this.cartProdcuts.reduce((accumulator, product) => accumulator + product.price, 0);
  }

  isHideSideMenu = signal(true);
  toogleSideMenu() {
    this.isHideSideMenu.update(prevState => !prevState);
  }
}
