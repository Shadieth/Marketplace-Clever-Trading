import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-recently-added',
  standalone: true,
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css'],
  imports: [NgFor, NgIf]
})
// Este componente muestra productos recientemente añadidos con sus detalles
export class RecentlyAddedComponent {
  recentlyAddedProducts = [
    { image: 'https://outletreforged.com/cdn/shop/files/palet-electronica2.png', price: '15,99 €', unit: '/unidad', description: 'Nuevo smartphone con tecnología avanzada', label: 'Nuevo', stock: 'Disponible', category: 'Electrónica' },
    { image: 'https://images.merstatic.com/imgcache/420x320/images/offer/2024/02/14//screenshot-20240214-173943-whatsapp-1707931266-1707931485.jpg', price: '89,99 €', unit: '/paquete', description: 'Muebles modernos recién llegados', label: 'Recién añadido', stock: 'Pocas unidades', category: 'Hogar' },
    { image: 'https://images.merstatic.com/imgcache/420x320/images/offer/2024/03/19//scsasdfsdfpng-1710824335.jpg', price: '19,99 €', unit: '/pieza', description: 'Zapatos de temporada con gran diseño', label: 'Última colección', stock: 'En stock', category: 'Moda' },
    { image: 'https://outletreforged.com/cdn/shop/files/palet-electronica2.png', price: '59,99 €', unit: '/set', description: 'Equipo de sonido con última tecnología', label: 'Nuevo lanzamiento', stock: 'Limitado', category: 'Audio' },
    { image: 'https://images.merstatic.com/imgcache/420x320/images/offer/2024/03/19//scsasdfsdfpng-1710824335.jpg', price: '39,99 €', unit: '/unidad', description: 'Accesorios de oficina premium', label: 'Innovación', stock: 'Últimas unidades', category: 'Oficina' },
    { image: 'https://images.merstatic.com/imgcache/420x320/images/offer/2024/02/14//screenshot-20240214-173943-whatsapp-1707931266-1707931485.jpg', price: '9,99 €', unit: '/unidad', description: 'Relojes deportivos con funciones inteligentes', label: 'Nueva tendencia', stock: 'Disponible', category: 'Joyería' }
  ];
}
