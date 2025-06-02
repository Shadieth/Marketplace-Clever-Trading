import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly SESSION_KEY = 'user_session';
  private http = inject(HttpClient);
  private isBrowser = typeof window !== 'undefined' && !!window.localStorage;

  // 🔐 Manejo de sesión
  setSession(user: any): void {
    if (this.isBrowser) {
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(user));
    }
  }
  // Obtiene la sesión del usuario almacenada en localStorage
  getSession(): any {
    if (!this.isBrowser) return null;
    const session = localStorage.getItem(this.SESSION_KEY);
    return session ? JSON.parse(session) : null;
  }
  // Limpia la sesión del usuario eliminando el item de localStorage
  clearSession(): void {
    if (this.isBrowser) {
      localStorage.removeItem(this.SESSION_KEY);
    }
  }

  // 🔒 Accesos y roles
  isLoggedIn(): boolean {
    return !!this.getSession();
  }
  // Verifica si el usuario tiene una sesión activa
  getUserName(): string | null {
    return this.getSession()?.name ?? null;
  }
  // Obtiene el nombre del usuario de la sesión actual
  getUserId(): string | null {
    return this.getSession()?.id ?? null;
  }
  // Obtiene el ID del usuario de la sesión actual
  getUserRole(): string | null {
    return this.getSession()?.role ?? null;
  }
  // Obtiene el rol del usuario de la sesión actual
  isAdmin(): boolean {
    const role = this.getSession()?.role;
    return role?.toUpperCase() === 'ADMIN';
  }

  // ✅ Login extendido: guarda sesión tras autenticarse
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:3001/users/login', { email, password }).pipe(
      tap((response) => {
        // Este `user` debe venir con { id, name, role, ... }
        if (response && response.user) {
          this.setSession(response.user);
        }
      })
    );
  }

  // ✅ Funciones de administración
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3001/users');
  }
  // Obtiene todos los usuarios registrados
  deleteUser(userId: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3001/users/${userId}`);
  }
}
