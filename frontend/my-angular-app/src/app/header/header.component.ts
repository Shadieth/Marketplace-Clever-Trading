import { Component, ElementRef, ViewChild, HostListener} from '@angular/core';
import { NgFor, NgIf, NgStyle} from '@angular/common'; // ✅ Importar NgFor

@Component({
  selector: 'app-header',
  standalone: true, // Indicar que este es un componente independiente
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [NgFor, NgIf, NgStyle] // ✅ Agregar NgFor en imports
})
export class HeaderComponent {
  logoPath: string = 'assets/logoclevertrading-web.png'; // Ruta de Imagen LOGO

    // Lista de opciones del desplegable
    categories = [
      { name: 'Productos', value: 'products' },
      { name: 'Lotes y stocks', value: 'stocks' },
      { name: 'Top ofertas', value: 'offers' }
    ];
  
    selectedCategory: string = 'products';
    isDropdownOpen: boolean = false;
    isPlaceholderVisible: boolean = true; // Placeholder visible por defecto
  
    // Método para alternar el desplegable
    toggleDropdown(event: Event) {
      event.stopPropagation(); // Evita que el evento se propague y cierre inmediatamente
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  
    // Método para seleccionar una categoría y cerrar el menú
    selectCategory(value: string) {
      this.selectedCategory = value;
      this.isDropdownOpen = false; // Cierra el menú después de seleccionar
    }
  
    getCategoryName(): string {
      const category = this.categories.find(cat => cat.value === this.selectedCategory);
      return category ? category.name : 'Selecciona';
    }
  
    // Detectar clics en cualquier parte de la pantalla
    @HostListener('document:click', ['$event'])
    closeDropdown(event: Event) {
      this.isDropdownOpen = false; // Cierra el menú cuando se hace clic fuera
    }
    // Ocultar placeholder al enfocar el input
  hidePlaceholder() {
    this.isPlaceholderVisible = false;
  }

  // Mostrar placeholder si el input está vacío al perder el foco
  showPlaceholder(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.value) {
      this.isPlaceholderVisible = true;
    }
  }

  // Simulación de usuario autenticado
  isLoggedIn: boolean = false; // Cambia a true si el usuario está autenticado
  userImage: string = 'assets/default-user.png'; // Imagen por defecto

  // Si el usuario está autenticado, cambia la imagen a la del usuario
  constructor() {
    if (this.isLoggedIn) {
      this.userImage = 'assets/user-profile.jpg'; // Imagen del usuario autenticado
    }
  }
  // Listado de Categorias
  @ViewChild('categoryButton', { static: false }) categoryButton!: ElementRef; // Referencia al botón

  isCategoryMenuOpen: boolean = false;
  menuPosition = { top: '50px', left: '0px' };

  categoryMenu = [
    { name: 'Alimentación', icon: 'restaurant' },
    { name: 'Automotriz', icon: 'directions_car' },
    { name: 'Calzado', icon: 'checkroom' },
    { name: 'Casa, Jardín y oficina', icon: 'home' },
    { name: 'Construcción e industria', icon: 'construction' },
    { name: 'Deporte y afición', icon: 'sports_soccer' },
    { name: 'Electrodomésticos grandes', icon: 'kitchen' },
    { name: 'Electrodomésticos pequeños', icon: 'blender' },
    { name: 'Electrónica', icon: 'memory' },
    { name: 'Liquidación de empresas', icon: 'storefront' },
    { name: 'Muebles', icon: 'weekend' },
    { name: 'Para niños', icon: 'child_friendly' },
    { name: 'Relojes y joyería', icon: 'watch' },
    { name: 'Ropa', icon: 'checkroom' },
    { name: 'Salud y belleza', icon: 'spa' },
    { name: 'Teléfonos', icon: 'smartphone' }
  ];

  toggleCategoryMenu(event: Event) {
    event.stopPropagation();
    this.isCategoryMenuOpen = !this.isCategoryMenuOpen;

    if (this.isCategoryMenuOpen) {
      const buttonRect = this.categoryButton.nativeElement.getBoundingClientRect();
      this.menuPosition = {
        top: `${buttonRect.bottom + window.scrollY}px`, // Debajo del botón
        left: `${buttonRect.left + window.scrollX}px` // Alineado con el botón
      };
    }
  }
}
