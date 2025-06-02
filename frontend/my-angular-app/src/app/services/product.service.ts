import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// Servicio para manejar productos
export class ProductService {
  private apiUrl = 'http://localhost:3001/products';

  constructor(private http: HttpClient) {}

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, product);
  }
  // Método para obtener todos los productos
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  // Método para obtener un producto por ID
  getProductsByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?category=${category}`);
  }
  // Método para actualizar un producto
  deleteProduct(productId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${productId}`);
  }
}
