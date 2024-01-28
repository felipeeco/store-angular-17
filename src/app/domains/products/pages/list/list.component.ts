import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoriesService } from '@shared/services/categories.service';
import { Category } from '@shared/models/category.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoriesServicies = inject(CategoriesService);

  products = signal<Product[]>([]);
  categories = signal<Category[] | null>(null);

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const categoryId = params.get('category_id');
      if(categoryId) this.getProducts(categoryId)
      else this.getProducts();
    });

    this.getCategories();

  }

  addToCart(event : Product) {
    if(event) {
      this.cartService.cart.update(lastValue => [...lastValue, event]);
    }
  }

  private getCategories() {
    this.categoriesServicies.getCategories()
    .subscribe({
      next: (data) => {
        this.categories.set(data);
      }
    })
  }

  private getProducts(categoryId? : string) {
    this.productService.getProducts(categoryId).subscribe({
      next: (products) => this.products.set(products.slice(0, 8))
    });
  }
}
