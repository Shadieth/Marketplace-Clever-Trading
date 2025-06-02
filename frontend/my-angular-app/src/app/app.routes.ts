import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { settingsRoutes } from './settings/settings.routes';
import { CategoryPageComponent } from './category-page/category-page.component';

// app.routes.ts
// Este archivo define las rutas principales de la aplicación, incluyendo la ruta de inicio, registro, agregar producto y las rutas hijas de configuración.
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'categorias/:nombre', component: CategoryPageComponent },
  ...settingsRoutes // ✅ Aquí se integran TODAS las rutas hijas de ajustes
];