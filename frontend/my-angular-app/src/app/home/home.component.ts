import { Component } from '@angular/core';
import { TopOffersComponent } from '../top-offers/top-offers.component';
import { OffersComponent } from '../offers/offers.component';
import { ClearanceSaleComponent } from '../clearance-sale/clearance-sale.component';
import { RecentlyAddedComponent } from '../recently-added/recently-added.component';
import { CommentsComponent } from '../comments/comments.component';
import { LanguagesComponent } from '../languages/languages.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    TopOffersComponent,
    OffersComponent,
    ClearanceSaleComponent,
    RecentlyAddedComponent,
    CommentsComponent,
    LanguagesComponent,
    NewsletterComponent
  ]
})

export class HomeComponent {}  // Este componente representa la página de inicio de la aplicación, que incluye secciones como ofertas destacadas, ofertas, liquidación, productos recientemente añadidos, comentarios, idiomas y boletín informativo.
// El componente utiliza otros componentes para estructurar la página de inicio y mostrar diferentes secciones de contenido.

