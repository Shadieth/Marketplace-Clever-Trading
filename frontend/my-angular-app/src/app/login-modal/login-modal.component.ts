import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
// Este componente representa un modal de inicio de sesión que permite a los usuarios ingresar sus credenciales para acceder a la aplicación
export class LoginModalComponent {
  @Output() close = new EventEmitter<void>();

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  // El constructor inyecta el servicio de autenticación y el enrutador
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  // Método para manejar el inicio de sesión
  onLogin() {
    this.errorMessage = '';

    this.authService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        const user = response.user || response; // admite ambos formatos
        this.authService.setSession(user);
        this.closeModal();
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errorMessage = 'Credenciales incorrectas. Intenta nuevamente.';
        console.error(err);
      }
    });
  }
  // Método para manejar el registro de nuevos usuarios
  closeModal() {
    this.close.emit();
  }
}

