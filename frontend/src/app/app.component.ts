import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';

  // Agrega el servicio Router en el constructor
  constructor(private router: Router) {}

  // Método que usa el servicio Router para navegar a la página de Shop
  navigateToShop(): void {
    this.router.navigate(['/shop']);
  }
}

