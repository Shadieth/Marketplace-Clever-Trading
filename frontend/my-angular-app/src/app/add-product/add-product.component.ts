import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Este componente permite a los usuarios autenticados agregar un nuevo producto a la tienda.
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
// Asegúrate de que el archivo HTML y CSS estén correctamente configurados para este componente
export class AddProductComponent implements OnInit {
  product = {
    name: '',
    description: '',
    images: [null, null, null, null] as (string | null)[],
    price: null,
    currency: '€',
    priceByQuantity: [],
    bulkPrice: null,
    saleType: '',
    quantityRange: '',
    tax: '',
    minOrder: null,
    quantity: null,
    unlimited: false,
    group: '',
    brand: '',
    condition: '',
    country: 'ES',   // Campo agregado para que siempre exista
    payMethods: {
      bank: false,
      cash: false,
      online: false,
      paypal: false,
      none: false
    },
    shippingCountries: {} as Record<string, boolean>
  };
  
  quantityDisabled = false;
  priceByQuantityOptions = ['0 a 50', '50 a 100', '100 a 200'];
  availableCountries = ['🇪🇸', '🇫🇷', '🇩🇪', '🇮🇹', '🇬🇧'];
  countries = ['ES', 'FR', 'DE', 'IT', 'PT'];

  constructor(
    private authService: AuthService,
    private router: Router,
    private productService: ProductService
  ) {}

  // Este método se ejecuta al inicializar el componente.
  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  // Este método se ejecuta cuando el usuario cambia la opción de "unlimited".
  onUnlimitedChange() {
    this.quantityDisabled = this.product.unlimited;
    if (this.product.unlimited) {
      this.product.quantity = null;
    }
  }

  // Este método se ejecuta cuando el usuario cambia la opción de "pago en efectivo".
  onToggleNoDeclarar(event: any) {
    if (event.target.checked) {
      this.product.payMethods = {
        bank: false,
        cash: false,
        online: false,
        paypal: false,
        none: true
      };
    }
  }

  // Este método se ejecuta cuando el usuario cambia la opción de "pago en efectivo".
  onFileChange(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.product.images[index] = reader.result as string | null;
      };
      reader.readAsDataURL(file);
    }
  }

  // Este método se ejecuta cuando el usuario cambia la opción de "pago en efectivo".
  toggleCountrySelection(country: string) {
    const selected = this.product.shippingCountries[country];
    this.product.shippingCountries[country] = !selected;
  }

  disableOthers() {
    if (this.product.payMethods.none) {
      this.product.payMethods.bank = false;
      this.product.payMethods.cash = false;
      this.product.payMethods.online = false;
      this.product.payMethods.paypal = false;
    }
  }

  // Este método se ejecuta cuando el usuario selecciona un archivo para una imagen.
  onFileSelect(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.product.images[index] = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  // Este método se ejecuta cuando el usuario elimina una imagen
  removeImage(index: number) {
    this.product.images[index] = null;
  }

  onSubmit() {
    // Validar el país y convertirlo a mayúsculas (para que coincida con el enum Country)
    const country = this.product.country ? this.product.country.toUpperCase() : 'ES';
  
    // Extraer los métodos de pago habilitados y convertirlos a mayúsculas
    const selectedPayMethods = Object.keys(this.product.payMethods)
      .filter((key) => this.product.payMethods[key as keyof typeof this.product.payMethods])
      .map((method) => method.toUpperCase());
    
    // Mapeo para ShippingOptions. Ajusta estos valores según los definidos en tu enum ShippingOptions.
    // En tu schema, ShippingOptions es: PICKUP, NATIONAL, INTERNATIONAL.
    const payMethodMapping: Record<string, string> = {
      BANK: 'NATIONAL',
      CASH: 'PICKUP',
      ONLINE: 'INTERNATIONAL',
      PAYPAL: 'INTERNATIONAL',
      NONE: 'NATIONAL'
    };
    
    const mappedShippingOptions = selectedPayMethods.length > 0
      ? selectedPayMethods.map(method => payMethodMapping[method] || method)
      : ['NATIONAL']; // Valor por defecto
  
    // Extraer los países de envío seleccionados; se asume que 'this.countries' contiene los códigos válidos del enum Country.
    // Aquí, suponemos que los códigos del formulario (ES, FR, DE, IT, PT) deben mapearse a los valores exactos del enum.
    // Según tu schema, los valores del enum Country son: AUSTRIA, BELGIUM, ..., FRANCE, GERMANY, ITALY, SPAIN, etc.
    // Así que debemos mapear, por ejemplo, ES -> SPAIN, FR -> FRANCE, DE -> GERMANY, IT -> ITALY, PT -> PORTUGAL.
    const countryMapping: Record<string, string> = {
      ES: 'SPAIN',
      FR: 'FRANCE',
      DE: 'GERMANY',
      IT: 'ITALY',
      PT: 'PORTUGAL'
    };
    const mappedShippingCountries = this.countries
      .filter((code) => this.product.shippingCountries[code])
      .map(code => countryMapping[code] || code);
  
    // Filtrar las imágenes válidas (no nulas)
    const validImages = this.product.images.filter((img) => img !== null) as string[];
  
    // Obtener el sellerId del usuario autenticado desde la sesión.
    // Suponemos que la sesión tiene un campo 'id'.
    const session = this.authService.getSession();
    const sellerId = session && session.id ? session.id : '123e4567-e89b-12d3-a456-426614174000';
  
    // Crear el objeto formateado, enviando solo los campos que espera el DTO:
    // title, description, price, minOrder, stock, country, brand, shippingOptions, shippingCountries, images y sellerId.
    const formattedProduct = {
      title: this.product.name || 'Producto sin nombre',
      description: this.product.description || 'Sin descripción',
      price: this.product.price ? Number(this.product.price) : 0,
      minOrder: this.product.minOrder ? Number(this.product.minOrder) : 1,
      stock: this.product.quantity ? Number(this.product.quantity) : 0,
      country: countryMapping[this.product.country.toUpperCase()] || 'SPAIN',
      brand: this.product.brand || 'Sin marca',
      shippingOptions: mappedShippingOptions,
      shippingCountries: mappedShippingCountries.length > 0 ? mappedShippingCountries : ['SPAIN'],
      images: validImages.length > 0 ? validImages : ['https://images.merstatic.com/imgcache/200x200/images/offer/2021/08/02//img-20201118-100056-002-1627897786-1627897826.jpg'],
      sellerId: sellerId
    };
  
    console.log('Objeto enviado al backend:', formattedProduct);
  
    // Llamar al servicio para agregar el producto, pasando el objeto formateado.
    this.productService.addProduct(formattedProduct).subscribe(
      (response) => {
        alert('Producto creado exitosamente');
        console.log('Respuesta del servidor:', response);
        this.router.navigate(['/products']);
      },
      (error) => {
        alert('Error al crear el producto');
        console.error('Error del servidor:', error);
      }
    );
  }
}
