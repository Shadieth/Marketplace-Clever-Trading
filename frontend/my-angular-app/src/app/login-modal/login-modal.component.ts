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
export class LoginModalComponent {
  @Output() close = new EventEmitter<void>();

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin() {
    this.errorMessage = '';

    this.authService.login(this.email, this.password).subscribe({
      next: (user: any) => {
        this.authService.setSession(user);
        this.closeModal(); // cierra el modal
        this.router.navigate(['/home']); // redirige a Home
      },
      error: (err) => {
        this.errorMessage = 'Credenciales incorrectas. Intenta nuevamente.';
        console.error(err);
      }
    });
  }

  closeModal() {
    this.close.emit();
  }
}

