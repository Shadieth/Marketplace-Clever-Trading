import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuSettingsComponent } from '../menu-settings/menu-settings.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MenuSettingsComponent
  ],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
// Este componente es un marcador de posición para la configuración de la aplicación
export class SettingsComponent {}
