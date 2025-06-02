import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-users-settings',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule],
  templateUrl: './admin-users-settings.component.html',
  styleUrls: ['./admin-users-settings.component.css']
})
export class AdminUsersSettingsComponent implements OnInit {
  users: any[] = []; // puedes tipar como User[] si creas una interfaz más adelante

  constructor(private authService: AuthService) {}

  // Este componente permite a los administradores gestionar usuarios
  ngOnInit(): void {
    this.loadUsers();
  }

  // Carga la lista de usuarios desde el servicio de autenticación
  loadUsers(): void {
    this.authService.getAllUsers().subscribe((users: any[]) => {
      this.users = users;
    });
  }

  // Método para eliminar un usuario
  deleteUser(userId: string): void {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.authService.deleteUser(userId).subscribe(() => {
        this.users = this.users.filter(user => user.id !== userId);
      });
    }
  }
}
