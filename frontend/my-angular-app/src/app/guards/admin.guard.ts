import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
// El guardia de administrador se usa para proteger rutas que solo deben ser accesibles por administradores
export class AdminGuard implements CanActivate {
  // Constructor del guardia de administrador
  constructor(private authService: AuthService, private router: Router) {}

  // Método que se ejecuta antes de acceder a la ruta protegida
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.authService.getSession();
    if (user?.role?.toUpperCase() === 'ADMIN') {
      return true;
    } else {
      this.router.navigate(['/settings']);
      return false;
    }
  }
}
