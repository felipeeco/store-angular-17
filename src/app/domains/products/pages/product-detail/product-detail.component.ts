import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '@shared/services/product.service';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  product = signal<Product | null>(null);
  cover = signal('');
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  ngOnInit() {

    let id;

    this.route.params.subscribe(params => {
      id = params['id'];
    });

    if (id) {
      this.productService.getOne(id)
      .subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.images.length > 0) {
            this.cover.set(product.images[0])
          }
        },
        error: () => {
          this.router.navigate(['/404']);
        }
      })
    }
  }

  changeCover(newImg: string) {
    this.cover.set(newImg);
  }

  addToCart() {
    const product = this.product();
    if (product) {
      this.cartService.addToCart(product);
    }
  }
}
