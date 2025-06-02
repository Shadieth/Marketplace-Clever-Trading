import { Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { HomeSettingsComponent } from '../home-settings/home-settings.component';
import { MessagesSettingsComponent } from '../messages-settings/messages-settings.component';
import { OrdersSettingsComponent } from '../orders-settings/orders-settings.component';
import { NewsSettingsComponent } from '../news-settings/news-settings.component';
import { MyservicesSettingsComponent } from '../myservices-settings/myservices-settings.component';
import { AdminUsersSettingsComponent } from '../admin-users-settings/admin-users-settings.component';
import { AdminProductsSettingsComponent } from '../admin-products-settings/admin-products-settings.component';
import { AdminStatisticsSettingsComponent } from '../admin-statistics-settings/admin-statistics-settings.component';
import { AdminControlSettingsComponent } from '../admin-control-settings/admin-control-settings.component';
import { AdminGuard } from '../guards/admin.guard';

// settings.routes.ts
// Este archivo define las rutas hijas del componente de configuración de la aplicación
export const settingsRoutes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      { path: 'home', component: HomeSettingsComponent },
      { path: 'mensajes', component: MessagesSettingsComponent },
      { path: 'pedidos', component: OrdersSettingsComponent },
      { path: 'noticias', component: NewsSettingsComponent },
      { path: 'servicios', component: MyservicesSettingsComponent },
      // settings.routes.ts
      { path: 'admin-usuarios', component: AdminUsersSettingsComponent, canActivate: [AdminGuard] },
      { path: 'admin-productos', component: AdminProductsSettingsComponent, canActivate: [AdminGuard] },
      { path: 'admin-estadisticas', component: AdminStatisticsSettingsComponent, canActivate: [AdminGuard] },
      { path: 'admin-control', component: AdminControlSettingsComponent, canActivate: [AdminGuard] },
      { path: '', component: HomeSettingsComponent },
      // mas rutas hijas del menu de configuracion
    ]
  }
];
