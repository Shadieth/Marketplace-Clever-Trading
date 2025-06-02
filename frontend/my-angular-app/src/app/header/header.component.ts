import { Component, ElementRef, ViewChild, HostListener, OnInit } from '@angular/core';
import { NgFor, NgIf, NgStyle, CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [NgFor, NgIf, NgStyle, RouterModule, LoginModalComponent]
})
// Este componente representa el encabezado de la aplicación, incluyendo el logo, el menú de categorías y el estado de sesión del usuario
export class HeaderComponent implements OnInit {
  showLoginModal = false;
  logoPath: string = 'assets/logoclevertrading-web.png';
  userName: string | null = null;
  isLoggedIn: boolean = false;
  userImage: string = 'assets/default-user.png';

  selectedCategory: string = 'products';
  isDropdownOpen: boolean = false;
  isPlaceholderVisible: boolean = true;

  @ViewChild('categoryButton', { static: false }) categoryButton!: ElementRef;
  isCategoryMenuOpen: boolean = false;
  menuPosition = { top: '50px', left: '0px' };

  // Constructor inyecta el servicio de autenticación y el enrutador
  constructor(private authService: AuthService, private router: Router) {
    if (this.isLoggedIn) {
      this.userImage = 'assets/user-profile.jpg';
    }
  }
  // Este método se ejecuta al inicializar el componente
  ngOnInit(): void {
    this.refreshSessionStatus();
  }
  // Método para actualizar el estado de sesión del usuario
  refreshSessionStatus() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.userName = this.authService.getUserName();
  }
  // Método para navegar a la página de inicio
  logout() {
    this.authService.clearSession();
    window.location.reload();
  }
  // Método para navegar a la página de inicio
  openLoginModal() {
    this.showLoginModal = true;
  }
  // Método para cerrar el modal de inicio de sesión y actualizar el estado de sesión
  closeLoginModal() {
    this.showLoginModal = false;
    this.refreshSessionStatus();
  }

  // Dropdown de búsqueda
  categories = [
    { name: 'Productos', value: 'products' },
    { name: 'Lotes y stocks', value: 'stocks' },
    { name: 'Top ofertas', value: 'offers' }
  ];

  // Método para alternar el estado del dropdown de categorías
  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  // Método para seleccionar una categoría del dropdown
  selectCategory(value: string) {
    this.selectedCategory = value;
    this.isDropdownOpen = false;
  }
  // Método para obtener el nombre de la categoría seleccionada
  getCategoryName(): string {
    const category = this.categories.find(cat => cat.value === this.selectedCategory);
    return category ? category.name : 'Selecciona';
  }
  // Método para navegar a la página de búsqueda con la categoría seleccionada
  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    this.isDropdownOpen = false;
    this.isCategoryMenuOpen = false;
  }
  // Método para navegar a la página de búsqueda con la categoría seleccionada
  hidePlaceholder() {
    this.isPlaceholderVisible = false;
  }
  // Método para mostrar el placeholder si el input está vacío
  showPlaceholder(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.value) {
      this.isPlaceholderVisible = true;
    }
  }

  // Menú de categorías
  categoryMenu = [
    { name: 'Alimentación', icon: 'restaurant', value: 'ALIMENTACION' },
    { name: 'Automotriz', icon: 'directions_car', value: 'AUTOMOTRIZ' },
    { name: 'Calzado', icon: 'checkroom', value: 'CALZADO' },
    { name: 'Casa, Jardín y oficina', icon: 'home', value: 'CASA_JARDIN_Y_OFICINA' },
    { name: 'Construcción e industria', icon: 'construction', value: 'CONSTRUCCION_E_INDUSTRIA' },
    { name: 'Deporte y afición', icon: 'sports_soccer', value: 'DEPORTE_Y_AFICION' },
    { name: 'Electrodomésticos grandes', icon: 'kitchen', value: 'ELECTRODOMESTICOS_GRANDES' },
    { name: 'Electrodomésticos pequeños', icon: 'blender', value: 'ELECTRODOMESTICOS_PEQUENOS' },
    { name: 'Electrónica', icon: 'memory', value: 'ELECTRONICA' },
    { name: 'Liquidación de empresas', icon: 'storefront', value: 'LIQUIDACION_EMPRESAS' }, // ✅ corregido
    { name: 'Muebles', icon: 'weekend', value: 'MUEBLES' },
    { name: 'Para niños', icon: 'child_friendly', value: 'PARA_NINOS' },
    { name: 'Relojes y joyería', icon: 'watch', value: 'RELOJES_Y_JOYERIA' },
    { name: 'Ropa', icon: 'checkroom', value: 'ROPA' },
    { name: 'Salud y belleza', icon: 'spa', value: 'SALUD_Y_BELLEZA' },
    { name: 'Teléfonos', icon: 'smartphone', value: 'TELEFONOS' }
  ];
  // Método para alternar el menú de categorías
  toggleCategoryMenu(event: Event) {
    event.stopPropagation();
    this.isCategoryMenuOpen = !this.isCategoryMenuOpen;

    if (this.isCategoryMenuOpen) {
      const buttonRect = this.categoryButton.nativeElement.getBoundingClientRect();
      this.menuPosition = {
        top: `${buttonRect.bottom + window.scrollY}px`,
        left: `${buttonRect.left + window.scrollX}px`
      };
    }
  }
  // Método para navegar a la página de categoría seleccionada
  goToCategory(category: { name: string; icon: string; value: string }) {
    this.isCategoryMenuOpen = false;
    this.router.navigate(['/categorias', category.value]);
  }  
}
