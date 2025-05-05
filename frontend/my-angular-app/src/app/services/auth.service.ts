/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly SESSION_KEY = 'user_session';
  private readonly API_URL = 'http://localhost:3001/users';

  constructor(private http: HttpClient) {}

  // Guardar sesión
  setSession(user: any): void {
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(user));
  }

  // Obtener sesión actual
  getSession(): any {
    const session = localStorage.getItem(this.SESSION_KEY);
    return session ? JSON.parse(session) : null;
  }

  // Cerrar sesión
  clearSession(): void {
    localStorage.removeItem(this.SESSION_KEY);
  }

  // Saber si está logeado
  isLoggedIn(): boolean {
    return !!this.getSession();
  }

  // Obtener el nombre del usuario logeado
  getUserName(): string | null {
    return this.getSession()?.name ?? null;
  }

  // Realizar login (desde login-modal)
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, { email, password });
  }
}*/
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly SESSION_KEY = 'user_session';
  private http = inject(HttpClient);
  private isBrowser = typeof window !== 'undefined' && !!window.localStorage;

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

  isLoggedIn(): boolean {
    return !!this.getSession();
  }

  getUserName(): string | null {
    return this.getSession()?.name ?? null;
  }

  login(email: string, password: string) {
    return this.http.post('http://localhost:3001/users/login', { email, password });
  }
  
  getUserId(): string | null {
    return this.getSession()?.id ?? null;
  }
}

