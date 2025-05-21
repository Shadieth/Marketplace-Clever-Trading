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
export class MenuSettingsComponent implements OnInit {
  isAdmin: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.refreshAdminStatus();
  }

  private refreshAdminStatus(): void {
    const role = this.authService.getUserRole();
    this.isAdmin = role?.toUpperCase() === 'ADMIN';
    console.log('[DEBUG] Rol actual:', role, '¿Es admin?:', this.isAdmin);
  }
}
