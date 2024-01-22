import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private http = inject(HttpClient);

  constructor(private sanitizer: DomSanitizer) {}

  private sanitizeUrl(url: string): any {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  
  private callApi() : Observable<Product[]> {
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  }
  
  private sanitizedImages() : Observable<Product[]> {
    return this.callApi().pipe(
      map(products => {
        return products.map(product => ({
          ...product,
          images: product.images.map(item => this.sanitizeUrl(item)),
        }));
      })
    );
  }

  getProducts(): Observable<Product[]> {
    return this.sanitizedImages().pipe(
      map(products => products.slice(0, 6))
    );
  }
}
