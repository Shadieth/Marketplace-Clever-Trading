import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu-settings',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './menu-settings.component.html',
  styleUrls: ['./menu-settings.component.css']
})
// Este componente muestra un menú de configuración que permite a los usuarios acceder a diferentes secciones de la aplicación
export class MenuSettingsComponent implements OnInit {
  isAdmin: boolean = false;
  // El constructor inyecta el servicio de autenticación para verificar el rol del usuario
  constructor(private authService: AuthService) {}
  // Este método se ejecuta al inicializar el componente
  ngOnInit(): void {
    this.refreshAdminStatus();
  }
  // Método para actualizar el estado de administrador del usuario
  private refreshAdminStatus(): void {
    const role = this.authService.getUserRole();
    this.isAdmin = role?.toUpperCase() === 'ADMIN';
    console.log('[DEBUG] Rol actual:', role, '¿Es admin?:', this.isAdmin);
  }
}
