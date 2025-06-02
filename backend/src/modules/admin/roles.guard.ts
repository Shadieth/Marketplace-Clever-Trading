import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { getLoggedUser } from '../user/services/login.service'; // Función auxiliar para obtener el usuario logueado

@Injectable()
// El guardia de roles se usa para permitir o denegar acceso a rutas según el rol del usuario
export class RolesGuard implements CanActivate {
  // Inyectamos Reflector para acceder a los metadatos definidos con decoradores personalizados
  constructor(private reflector: Reflector) {}

  // Método principal que se ejecuta antes de acceder a la ruta protegida
  canActivate(context: ExecutionContext): boolean {
    // Obtenemos los roles requeridos desde los metadatos usando el decorador @Roles
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    // Si no hay roles requeridos, permitimos el acceso
    if (!requiredRoles) return true;

    // Obtenemos el usuario logueado usando una función auxiliar
    const user = getLoggedUser();
    // Si no hay usuario logueado, denegamos el acceso
    if (!user) return false;

    // Verificamos si el rol del usuario está incluido en los roles requeridos
    return requiredRoles.includes(user.role);
  }
}
