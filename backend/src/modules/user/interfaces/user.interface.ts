import { Role } from '@prisma/client';

export interface User {
  id?: string;        // UUID opcional (puede ser generado por la BD)
  email: string;      // Correo único del usuario
  name: string;       // Nombre del usuario
  password: string;   // Contraseña encriptada
  role: Role;         // Rol del usuario (CLIENT o SELLER)
  createdAt: Date;    // Fecha de creación
  updatedAt: Date;    // Fecha de última actualización
}
