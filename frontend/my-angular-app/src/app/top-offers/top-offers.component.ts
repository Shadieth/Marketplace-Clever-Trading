import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
// ❌ Quitamos la importación del servicio
// import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-top-offers',
  standalone: true,
  templateUrl: './top-offers.component.html',
  styleUrls: ['./top-offers.component.css'],
  imports: [NgFor, NgIf]
})
// Este componente muestra ofertas destacadas de productos
export class TopOffersComponent implements OnInit {

  // Cargamos contenido estático o dejamos vacío
  topOffers = [
    {
      image: 'https://via.placeholder.com/300x200.png?text=Oferta+1',
      price: '99.99',
      unit: 'España',
      description: 'Ejemplo de producto en oferta',
      label: 'Top Oferta',
      stock: 12,
      category: 'Electrónica'
    },
    {
      image: 'https://via.placeholder.com/300x200.png?text=Oferta+2',
      price: '59.99',
      unit: 'Italia',
      description: 'Otro producto en promoción',
      label: 'Top Oferta',
      stock: 5,
      category: 'Hogar'
    }
  ];

  constructor() {} // ❌ Quitamos ProductService del constructor

  ngOnInit(): void {
    // ❌ Quitamos llamada al backend
    // this.productService.getAllProducts().subscribe((products: any[]) => { ... });
  }
}
