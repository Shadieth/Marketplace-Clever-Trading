import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  role: 'CLIENT' | 'SELLER';
}

@Injectable({
  providedIn: 'root',
})
// Servicio para manejar el registro de usuarios
export class RegisterService {
  private apiUrl = 'http://localhost:3001/users'; // Ajusta si usas proxy o entorno
  // URL de la API para el registro de usuarios
  constructor(private http: HttpClient) {}
  // Método para registrar un nuevo usuario
  registerUser(payload: RegisterPayload): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}
