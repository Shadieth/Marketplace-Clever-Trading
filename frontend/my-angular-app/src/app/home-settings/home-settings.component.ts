import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-home-settings',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule
  ],
  templateUrl: './home-settings.component.html',
  styleUrls: ['./home-settings.component.css']
})
// Este componente muestra estadísticas, ofertas populares, mayoristas y mensajes recientes en la página de inicio
export class HomeSettingsComponent {
  ofertasPopulares = [
    { nombre: 'Productos Heinz: Kétchup, mayonesa, mostaza, salsa barbacoa', vistas: 26383 },
    { nombre: 'Bolsos y accesorios Carpisa', vistas: 24424 },
    { nombre: 'Ropa para niño, mujer y hombre de la marca Benetton', vistas: 18225 },
    { nombre: 'Productos Kraft-Heinz - Fecha de caducidad 2021', vistas: 17819 },
    { nombre: 'TOBLERONE SWISS MILK CHOCOLATE Paquete de 3 x 50 g', vistas: 14076 }
  ];
  
  estadisticas = [
    { label: 'Vistas de la oferta', valor: 16424057 },
    { label: 'Vistas de perfil', valor: 6557487 },
    { label: 'Ofertas insertadas', valor: 88 },
    { label: 'Observadores', valor: 58 },
    { label: 'Observadores', valor: 64 }
  ];  
  
  mayoristas = [
    { nombre: 'Leener Raphael Pasternak', flagClass: 'flag-icon flag-icon-pl' },
    { nombre: 'VERDADEROS ASESORES DE ETIQUETAS', flagClass: 'flag-icon flag-icon-de' },
    { nombre: 'WOW Solutions GmbH', flagClass: 'flag-icon flag-icon-ch' },
    { nombre: 'GRUPO ADRIEN SAS', flagClass: 'flag-icon flag-icon-fr' },
    { nombre: 'Grifos Giulini Giovanni Srl', flagClass: 'flag-icon flag-icon-it' }
  ];  
  
  mensajes = [
    { nombre: 'Dmytro Savytskyi', motivo: 'Consulta sobre el producto [ID:391793]', alt: false },
    { nombre: 'Dmytro Savytskyi', motivo: 'Consulta sobre el producto [ID:297249]', alt: true },
    { nombre: 'Dmytro Savytskyi', motivo: 'Consulta sobre el producto [ID:149996]', alt: false },
    { nombre: 'NESTOR RIVEROLA HERMOSO', motivo: 'Solicitud de oferta [ID:265877]', alt: true },
    { nombre: 'Patryk Zhok', motivo: 'Soy socio comercial en España – WDT (0% IVA)', alt: false }
  ];  
  
}
