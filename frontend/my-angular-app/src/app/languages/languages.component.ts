import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-languages',
  standalone: true,
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css'],
  imports: [NgFor]
})
// Este componente muestra una lista de idiomas disponibles con sus respectivas banderas
export class LanguagesComponent {
  languages = [
    { name: 'Español', flagClass: 'flag-icon-es' },
    { name: 'Inglés', flagClass: 'flag-icon-gb' },
    { name: 'Francés', flagClass: 'flag-icon-fr' },
    { name: 'Alemán', flagClass: 'flag-icon-de' },
    { name: 'Italiano', flagClass: 'flag-icon-it' },
    { name: 'Portugués', flagClass: 'flag-icon-pt' },
    { name: 'Chino', flagClass: 'flag-icon-cn' },
    { name: 'Japonés', flagClass: 'flag-icon-jp' }
  ];
  
}
