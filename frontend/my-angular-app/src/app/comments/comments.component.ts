import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  imports: [NgFor, NgIf]
})
export class CommentsComponent {
  comments = [
    { 
      user: 'Izabela z Cheap',
      avatar: 'https://images.icon-icons.com/2643/PNG/512/female_woman_person_people_avatar_user_white_tone_icon_159359.png',
      text: 'Gracias a Clever Trading, estoy ganando nuevos contactos de todo el mundo. Empresas verificadas. Recomiendo a compradores y vendedores.'
    },
    { 
      user: 'Raphael Alvisse',
      avatar: 'https://img.freepik.com/vector-premium/icono-avatar0002_750950-43.jpg?semt=ais_hybrid',
      text: 'Mejor. Actualmente todos los pedidos han ido bien, estamos satisfechos, en breve también pondremos a la venta productos en Clever Trading, esperemos que con éxito. Atentamente.'
    },
    { 
      user: 'Javier Roca Nadal',
      avatar: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png',
      text: 'Gracias a Clever Trading, he contactado con Mayoristas para mi negocio. Hay un montón de oportunidades de negocio por toda Europa. Estoy contento de haberos conocido.'
    }
  ];
}
