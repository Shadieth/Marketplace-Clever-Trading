import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Este archivo es el punto de entrada de la aplicación Angular. Aquí se bootstrap la aplicación con el componente raíz y la configuración de la aplicación.
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


  