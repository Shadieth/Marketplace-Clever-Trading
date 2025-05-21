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

  getSession(): any {
    if (!this.isBrowser) return null;
    const session = localStorage.getItem(this.SESSION_KEY);
    return session ? JSON.parse(session) : null;
  }

  clearSession(): void {
    if (this.isBrowser) {
      localStorage.removeItem(this.SESSION_KEY);
    }
  }

  // 🔒 Accesos y roles
  isLoggedIn(): boolean {
    return !!this.getSession();
  }

  getUserName(): string | null {
    return this.getSession()?.name ?? null;
  }

  getUserId(): string | null {
    return this.getSession()?.id ?? null;
  }

  getUserRole(): string | null {
    return this.getSession()?.role ?? null;
  }

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

  deleteUser(userId: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3001/users/${userId}`);
  }
}
