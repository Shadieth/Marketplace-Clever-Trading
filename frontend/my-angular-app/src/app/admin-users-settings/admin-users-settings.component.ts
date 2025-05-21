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

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.authService.getAllUsers().subscribe((users: any[]) => {
      this.users = users;
    });
  }

  deleteUser(userId: string): void {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.authService.deleteUser(userId).subscribe(() => {
        this.users = this.users.filter(user => user.id !== userId);
      });
    }
  }
}
