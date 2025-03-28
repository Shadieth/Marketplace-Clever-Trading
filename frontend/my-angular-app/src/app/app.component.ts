/*import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router
import { HeaderComponent } from './header/header.component'; // Importar el componente
import { FooterComponent } from './footer/footer.component';
import { TopOffersComponent } from './top-offers/top-offers.component';
import { OffersComponent } from './offers/offers.component';
import { ClearanceSaleComponent } from './clearance-sale/clearance-sale.component';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';
import { CommentsComponent } from './comments/comments.component';
import { LanguagesComponent } from './languages/languages.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

@Component({
  selector: 'app-root',
  standalone: true, // Indica que este es un componente independiente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, FooterComponent, TopOffersComponent, OffersComponent, ClearanceSaleComponent, RecentlyAddedComponent, CommentsComponent, LanguagesComponent, NewsletterComponent] // IMPORTANTE: Agregar Components aquí
})

export class AppComponent {
  title = 'my-angular-app';

  // Agrega el servicio Router en el constructor
  constructor(private router: Router) {}

  // Método que usa el servicio Router para navegar a la página de Shop
  navigateToShop(): void {
    this.router.navigate(['/shop']);
  }
}*/
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, HeaderComponent, FooterComponent] // ← incluye RouterModule
})
export class AppComponent {
  title = 'my-angular-app';
}

