import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterPlanTableComponent } from '../register-plan-table/register-plan-table.component';
import { RegisterService, RegisterPayload } from '../services/register.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RegisterPlanTableComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
// Este componente maneja el registro de nuevos usuarios, incluyendo la selección de roles y planes.
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  role: 'CLIENT' | 'SELLER' | '' = '';

  selectedPlan: 'standard' | 'premium' = 'standard';
  showLoginModal = false;

  successMessage = '';
  errorMessage = '';

  constructor(
    private registerService: RegisterService,
    private authService: AuthService,
    private router: Router
  ) {}
  // Método para manejar el cambio de plan seleccionado
  onRoleChange(selectedRole: 'CLIENT' | 'SELLER') {
    this.role = selectedRole;
  }
  // Método para manejar el cambio de plan seleccionado
  onSubmit() {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    if (!this.role) {
      this.errorMessage = 'Por favor, selecciona un rol.';
      return;
    }

    const payload: RegisterPayload = {
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role
    };

    this.registerService.registerUser(payload).subscribe({
      next: () => {
        this.successMessage = 'Registro exitoso. Iniciando sesión...';

        this.authService.login(this.email, this.password).subscribe({
          next: (user: any) => {
            this.authService.setSession(user);
            this.router.navigate(['/']);
          },
          error: () => {
            this.errorMessage = 'El registro fue exitoso, pero no se pudo iniciar sesión automáticamente.';
          }
        });

        this.resetForm();
      },
      error: (err) => {
        this.errorMessage = err?.error?.message?.[0] || 'Error al registrar.';
        console.error(err);
      }
    });
  }
  // Método para mostrar el modal de inicio de sesión
  resetForm() {
    this.name = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.role = '';
  }

  get price(): string {
    return this.selectedPlan === 'standard' ? '29,99 €' : '59,99 €';
  }

  ventajasStandard: string[] = [
    'Sin límites de contactos con mayoristas.',
    'Acceso a datos de contacto con mayoristas, proveedores y fabricantes.',
    'Boletín de ofertas diario.',
    'Acceso a ofertas de 150 países con descuentos de hasta 90%.',
    'Panel de administración de cuenta, contactos, ofertas y edición de datos.',
    'Base de datos amplia de mayoristas de dropshipping.'
  ];

  ventajasPremium: string[] = [
    'Todo lo incluido en el plan Estándar.',
    'Prioridad en atención al cliente.',
    'Acceso anticipado a nuevas ofertas y proveedores.',
    'Soporte personalizado para dropshipping.',
    'Integraciones avanzadas con plataformas externas.',
    'Módulo exclusivo de análisis de mercado.'
  ];
}
