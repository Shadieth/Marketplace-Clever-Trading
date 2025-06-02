import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
// Este componente muestra los productos de una categoría específica
export class CategoryPageComponent implements OnInit {
  categoryName: string = '';
  products: any[] = [];

  // Mapeo de nombres de categorías a nombres legibles
  readonly categoryDisplayNames: Record<string, string> = {
    ALIMENTACION: 'Alimentación',
    AUTOMOTRIZ: 'Automotriz',
    CALZADO: 'Calzado',
    CASA_JARDIN_Y_OFICINA: 'Casa, Jardín y oficina',
    CONSTRUCCION_E_INDUSTRIA: 'Construcción e industria',
    DEPORTE_Y_AFICION: 'Deporte y afición',
    ELECTRODOMESTICOS_GRANDES: 'Electrodomésticos grandes',
    ELECTRODOMESTICOS_PEQUENOS: 'Electrodomésticos pequeños',
    ELECTRONICA: 'Electrónica',
    LIQUIDACION_EMPRESAS: 'Liquidación de empresas',
    MUEBLES: 'Muebles',
    PARA_NINOS: 'Para niños',
    RELOJES_Y_JOYERIA: 'Relojes y joyería',
    ROPA: 'Ropa',
    SALUD_Y_BELLEZA: 'Salud y belleza',
    TELEFONOS: 'Teléfonos'
  };

  // Inyectamos ActivatedRoute para acceder a los parámetros de la ruta y ProductService para obtener los productos
  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  // Este método se ejecuta al inicializar el componente
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const nombre = params.get('nombre');
      if (nombre) {
        this.categoryName = nombre;
        this.loadProducts(nombre);
      }
    });
  }

  // Carga los productos de la categoría especificada
  loadProducts(categoria: string): void {
    this.productService.getProductsByCategory(categoria).subscribe(data => {
      this.products = data;
    });
  }
  
  // Método para obtener el nombre de la categoría en un formato legible
  getDisplayName(): string {
    return this.categoryDisplayNames[this.categoryName] || this.categoryName;
  }
}
