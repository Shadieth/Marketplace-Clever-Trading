import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [NgFor]
})
// Este componente muestra el pie de página de la aplicación con enlaces a categorías y redes sociales
export class FooterComponent {
  categories = ['Términos generales', 'Política de privacidad', 'Política de cookies', 'Política de reembolso'];

  // Lista de enlaces a RRSS del pie de página
  socialLinks = [
    { name: 'LinkedIn', icon: 'linkedin', url: '#' },
    { name: 'YouTube', icon: 'play_circle', url: '#' }
  ];
}

