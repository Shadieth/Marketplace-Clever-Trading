import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-clearance-sale',
  standalone: true,
  templateUrl: './clearance-sale.component.html',
  styleUrls: ['./clearance-sale.component.css'],
  imports: [NgFor, NgIf]
})
// Este componente muestra productos en liquidación con detalles como precio, unidad, descripción, etiqueta, stock y categoría
export class ClearanceSaleComponent {
  clearanceProducts = [
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyZ-YOwM4Lzoy6yabMc3iViyGBiS1FGXfMmQ&s', price: '3,99 €', unit: '/unidad', description: 'Ropa en liquidación', label: 'Liquidación', stock: 'Stock limitado', category: 'Moda' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoczzcNdNN7sUFuEnL2Rv7eUhJk9qEFzJjgA&s', price: '29,99 €', unit: '/lote', description: 'Electrodomésticos con descuento', label: 'Liquidación especial', stock: 'Pocas unidades', category: 'Electrónica' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyZ-YOwM4Lzoy6yabMc3iViyGBiS1FGXfMmQ&s', price: '9,99 €', unit: '/pieza', description: 'Zapatos deportivos última oportunidad', label: 'Outlet', stock: 'Solo 5 disponibles', category: 'Calzado' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoczzcNdNN7sUFuEnL2Rv7eUhJk9qEFzJjgA&s', price: '49,99 €', unit: '/set', description: 'Muebles de segunda mano', label: 'Remate', stock: 'Disponibilidad limitada', category: 'Hogar' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyZ-YOwM4Lzoy6yabMc3iViyGBiS1FGXfMmQ&s', price: '5,00 €', unit: '/unidad', description: 'Relojes de diseñador en descuento', label: 'Outlet', stock: 'Últimas piezas', category: 'Joyería' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoczzcNdNN7sUFuEnL2Rv7eUhJk9qEFzJjgA&s', price: '15,00 €', unit: '/unidad', description: 'Sillas ergonómicas en liquidación', label: 'Remate final', stock: 'Stock limitado', category: 'Oficina' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyZ-YOwM4Lzoy6yabMc3iViyGBiS1FGXfMmQ&s', price: '99,00 €', unit: '/paquete', description: 'Laptops reacondicionadas con descuento', label: 'Liquidación especial', stock: 'Solo 2 disponibles', category: 'Tecnología' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoczzcNdNN7sUFuEnL2Rv7eUhJk9qEFzJjgA&s', price: '19,99 €', unit: '/unidad', description: 'Accesorios de cocina en oferta', label: 'Descuento final', stock: 'Últimas unidades', category: 'Hogar' }
  ];
}

