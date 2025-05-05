import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-top-offers',
  standalone: true,
  templateUrl: './top-offers.component.html',
  styleUrls: ['./top-offers.component.css'],
  imports: [NgFor, NgIf]
})
export class TopOffersComponent implements OnInit {

  // Array que antes era estático
  topOffers = [
    // Aquí puedes dejar un ejemplo vacío o con un par de objetos falsos si quieres
    // pero se sobrescribirá al cargar los datos del backend
    {
      image: '',
      price: '',
      unit: '',
      description: '',
      label: '',
      stock: '',
      category: ''
    }
  ];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Al iniciar el componente, cargamos los productos reales
    this.productService.getAllProducts().subscribe((products: any[]) => {
      // Mapeamos cada producto de la base de datos al formato que topOffers requiere
      this.topOffers = products.map((prod) => {
        return {
          // 'image' vendrá del primer elemento del array 'images'
          // o una imagen por defecto si no hay imágenes
          image: prod.images?.length ? prod.images[0] : 'https://example.com/default-image.png',
          
          // 'price' es prod.price
          price: prod.price,

          // 'unit' se mostrará como prod.country
          unit: prod.country,

          // 'description' vendrá de prod.title
          description: prod.title,

          // 'label' es un campo que no existe en la tabla, así que lo falseamos
          label: 'Sección especial', // O 'Ofertas', o lo que quieras

          // 'stock' vendrá de prod.stock
          stock: prod.stock,

          // 'category' vendrá de prod.brand
          category: prod.brand
        };
      });
    });
  }
}
