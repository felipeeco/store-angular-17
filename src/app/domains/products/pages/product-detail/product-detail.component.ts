import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SafeUrlPipe } from '@shared/pipes/sanitizer-url-image.pipe';
import { ProductService } from '@shared/services/product.service';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  constructor(private route: ActivatedRoute, private router: Router) { }

  product = signal<Product | null>(null);
  cover = signal('assets/images/default-product.jpeg');
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) this.getProducts(id);
    });
  }

  addToCart() {
    const product = this.product();
    if (product) {
      this.cartService.addToCart(product);
    }
  }

  changeCover(newImg: string) {
    this.cover.set(newImg);
  }

  private getProducts(id : string) {
    this.productService.getOne(id)
      .subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.images[0].slice(0,5) === 'https') {
            this.cover.set(product.images[0])
          }
        },
        error: () => {
          this.router.navigate(['/404']);
        }
      })
  }
}
