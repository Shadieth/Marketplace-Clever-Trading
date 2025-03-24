import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-top-offers',
  standalone: true,
  templateUrl: './top-offers.component.html',
  styleUrls: ['./top-offers.component.css'],
  imports: [NgFor, NgIf]
})
export class TopOffersComponent {
  offers = [
    {
      image: 'https://outletreforged.com/cdn/shop/files/palet-electronica2.png',
      price: '5,00 €',
      unit: '/unidad',
      description: 'CALVIN KLEIN, TOMMY HILFIGER, GUESS - Stock de ropa al por mayor',
      label: 'Hit semanal',
      stock: 'Ilimitado',
      category: 'Nuevo'
    },
    {
      image: 'https://www.anper.es/wp-content/uploads/2023/07/tapa-troquelada-para-box-palet-photoroompng-photoroom.png',
      price: 'desde 6,00 €',
      unit: '/kilogramo',
      description: 'DHL & Hermes & Amazon & Aliexpress – Paquetes no reclamados',
      label: 'Hit semanal',
      stock: 'Ilimitado',
      category: 'Outlet'
    },
    {
      image: 'https://outletreforged.com/cdn/shop/files/palet-electronica2.png',
      price: '250,00 €',
      unit: '/paleta',
      description: 'Palets Mixtos Muebles, productos de jardín y deportivos',
      label: 'Hit semanal',
      stock: 'Ilimitado',
      category: 'Devoluciones de clientes'
    },
    {
      image: 'https://www.anper.es/wp-content/uploads/2023/07/tapa-troquelada-para-box-palet-photoroompng-photoroom.png',
      price: '600,00 €',
      unit: '/completo',
      description: 'Palets Mixtos Robotica',
      label: 'Hit semanal',
      stock: 'Ilimitado',
      category: 'Mezcla / Devoluciones'
    },
    {
      image: 'https://www.comprarlotes.com/uploads/users/user5037/gallery/9620_img7453.jpeg',
      price: '10,00 €',
      unit: '/unidad',
      description: 'Producto especial en oferta',
      label: 'Oferta destacada',
      stock: 'Disponible',
      category: 'Electrónica'
    }
  ];
}
