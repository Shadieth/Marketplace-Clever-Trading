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

export class HomeComponent {}

