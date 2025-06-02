import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

// Define una interfaz para los productos
export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <app-header></app-header>
    <header class="hero">
      <h1>Welcome to the Marketplace!</h1>
      <p>Discover a variety of products at great prices.</p>
      <button (click)="navigateToShop()" class="btn-primary">Go to Shop</button>
    </header>

    <section class="featured-products">
      <div class="product-cards">
        <div class="product-card" *ngFor="let product of featuredProducts">
          <img [src]="product.image" [alt]="product.title" />
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
          <button class="btn-secondary">View Details</button>
        </div>
      </div>
    </section>

    <section class="categories">
      <h2>Shop by Category</h2>
      <div class="category-cards">
        <div class="category-card">
          <img src="https://via.placeholder.com/150" alt="Category 1" />
          <h3>Electronics</h3>
        </div>
        <div class="category-card">
          <img src="https://via.placeholder.com/150" alt="Category 2" />
          <h3>Fashion</h3>
        </div>
        <div class="category-card">
          <img src="https://via.placeholder.com/150" alt="Category 3" />
          <h3>Home & Garden</h3>
        </div>
      </div>
    </section>
    <app-footer></app-footer>
  `,
  styles: [
    `.hero { text-align: center; padding: 2rem; background-color: #f4f4f4; }
     .btn-primary { background-color: #007bff; color: white; padding: 0.5rem 1rem; border: none; cursor: pointer; }
     .featured-products { padding: 2rem; }
     .product-cards { display: flex; gap: 1rem; }
     .product-card { border: 1px solid #ddd; padding: 1rem; text-align: center; }
     .btn-secondary { background-color: #6c757d; color: white; padding: 0.5rem 1rem; border: none; cursor: pointer; }
     .categories { padding: 2rem; }
     .category-cards { display: flex; gap: 1rem; }
     .category-card { border: 1px solid #ddd; padding: 1rem; text-align: center; }`
  ]
})
// Este componente representa la página de inicio de la aplicación, mostrando productos destacados y categorías
export class HomeComponent implements OnInit {
  featuredProducts: Product[] = [
    {
      id: 1,
      title: 'Product 1',
      description: 'High-quality product at a great price!',
      image: 'https://www.paletstalavera.com/wp-content/uploads/2023/05/61eRDKGVYL-1.jpg'
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'Affordable and durable item.',
      image: 'https://www.paletstalavera.com/wp-content/uploads/2023/05/61eRDKGVYL-1.jpg'
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'Great value for your money.',
      image: 'https://www.paletstalavera.com/wp-content/uploads/2023/05/61eRDKGVYL-1.jpg'
    },
    {
      id: 4,
      title: 'Product 4',
      description: 'Great value for you.',
      image: 'https://www.paletstalavera.com/wp-content/uploads/2023/05/61eRDKGVYL-1.jpg'
    }
  ];

  // Inyectamos el Router para navegar a otras páginas
  constructor(private router: Router) {}

  // Este método se ejecuta al inicializar el componente
  ngOnInit(): void {}

  // Método para navegar a la página de la tienda
  navigateToShop(): void {
    this.router.navigate(['/shop']);
  }
}