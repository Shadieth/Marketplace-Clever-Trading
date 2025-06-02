import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-orders-settings',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './orders-settings.component.html',
  styleUrl: './orders-settings.component.css'
})
// Este componente es un marcador de posición para la configuración de pedidos
export class OrdersSettingsComponent {

}
