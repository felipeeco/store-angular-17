import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  getProducts(categoryID? : string): Observable<Product[]> {
    const url = new URL('https://api.escuelajs.co/api/v1/products');
    if(categoryID) {
      url.searchParams.set('categoryId', categoryID)
    }
    return this.http.get<Product[]>(url.toString());
  }

  getOne(id: string): Observable<Product> {
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }
}
