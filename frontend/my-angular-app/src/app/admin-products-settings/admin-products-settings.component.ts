import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-admin-products-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './admin-products-settings.component.html',
  styleUrls: ['./admin-products-settings.component.css']
})
// Este componente permite a los administradores gestionar productos por categoría
export class AdminProductsSettingsComponent implements OnInit {
  products: any[] = [];
  selectedCategory: string = '';
  categorias: string[] = [
    'ALIMENTACION',
    'AUTOMOTRIZ',
    'CALZADO',
    'CASA_JARDIN_Y_OFICINA',
    'CONSTRUCCION_E_INDUSTRIA',
    'DEPORTE_Y_AFICION',
    'ELECTRODOMESTICOS_GRANDES',
    'ELECTRODOMESTICOS_PEQUENOS',
    'ELECTRONICA',
    'LIQUIDACION_EMPRESAS',
    'MUEBLES',
    'PARA_NINOS',
    'RELOJES_Y_JOYERIA',
    'ROPA',
    'SALUD_Y_BELLEZA',
    'TELEFONOS'
  ];

  // Inyectamos el servicio de productos para acceder a los datos
  constructor(private productService: ProductService) {}

  // Este método se ejecuta al inicializar el componente
  ngOnInit(): void {
    this.selectedCategory = this.categorias[0]; // primera categoría
    this.loadProductsByCategory();
  }

  // Carga los productos de la categoría seleccionada
  loadProductsByCategory(): void {
    if (this.selectedCategory) {
      this.productService.getProductsByCategory(this.selectedCategory)
        .subscribe(products => this.products = products);
    }
  }

  // Método para cambiar la categoría seleccionada
  deleteProduct(productId: string): void {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productService.deleteProduct(productId).subscribe(() => {
        this.products = this.products.filter(p => p.id !== productId);
      });
    }
  }
}
