import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-offers',
  standalone: true,
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  imports: [NgFor, NgIf]
})
// Este componente muestra una lista de ofertas disponibles con sus detalles
export class OffersComponent {
  offers = [
    {
      image: 'https://www.comprarlotes.com/uploads/users/user5037/gallery/9620_img7453.jpeg',
      price: '10,00 €',
      unit: '/unidad',
      description: 'Producto especial en oferta',
      label: 'Oferta destacada',
      stock: 'Disponible',
      category: 'Electrónica'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyZ-YOwM4Lzoy6yabMc3iViyGBiS1FGXfMmQ&s',
      price: 'desde 15,00 €',
      unit: '/paquete',
      description: 'Lotes con descuento en ropa',
      label: 'Oferta exclusiva',
      stock: 'Limitado',
      category: 'Moda'
    }
  ];
}

