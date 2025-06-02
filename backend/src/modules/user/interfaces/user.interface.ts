import { Role, Country } from '@prisma/client';

// Interfaz para el usuario
export interface User {
  id?: string;        // UUID opcional (puede ser generado por la BD)
  email: string;      // Correo único del usuario
  name: string;       // Nombre del usuario
  password: string;   // Contraseña encriptada
  role: Role;         // Rol del usuario (CLIENT o SELLER)
  mobile?: string;    // Teléfono móvil (opcional)
  country: Country;   // País del usuario
  products?: any[];   // Relación con productos
  createdAt: Date;    // Fecha de creación
  updatedAt: Date;    // Fecha de última actualización
}
