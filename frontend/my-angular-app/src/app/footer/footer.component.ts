import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [NgFor]
})
export class FooterComponent {
  categories = ['Términos generales', 'Política de privacidad', 'Política de cookies', 'Política de reembolso'];

  socialLinks = [
    { name: 'LinkedIn', icon: 'linkedin', url: '#' },
    { name: 'YouTube', icon: 'play_circle', url: '#' }
  ];
}

