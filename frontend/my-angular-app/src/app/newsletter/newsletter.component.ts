import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Importar FormsModule

@Component({
  selector: 'app-newsletter',
  standalone: true,
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
  imports: [NgIf, NgFor, FormsModule] // ✅ Agregar FormsModule en imports
})
export class NewsletterComponent {
  email: string = '';
  categories = ['Electrónica', 'Ropa', 'Hogar', 'Juguetes', 'Deportes'];
  selectedCategory: string = '';

  subscribe() {
    if (this.email && this.selectedCategory) {
      alert(`Suscrito con ${this.email} a la categoría ${this.selectedCategory}`);
    } else {
      alert('Por favor, introduzca su email y seleccione una categoría.');
    }
  }
}
