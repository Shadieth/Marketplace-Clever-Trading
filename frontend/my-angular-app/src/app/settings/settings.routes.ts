import { Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { HomeSettingsComponent } from '../home-settings/home-settings.component';
import { MessagesSettingsComponent } from '../messages-settings/messages-settings.component';
import { OrdersSettingsComponent } from '../orders-settings/orders-settings.component';
import { NewsSettingsComponent } from '../news-settings/news-settings.component';
import { MyservicesSettingsComponent } from '../myservices-settings/myservices-settings.component';


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
      { path: '', component: HomeSettingsComponent },
      // mas rutas hijas del menu de configuracion
    ]
  }
];
