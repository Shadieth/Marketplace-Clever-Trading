# Etapa 1: Build de la app Angular
FROM node:20 AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN ls -l /app/dist/my-angular-app

# Etapa 2: Servir con NGINX
FROM nginx:alpine

# Copia el build al directorio público de NGINX
COPY --from=build /app/dist/my-angular-app /usr/share/nginx/html

# Copia configuración personalizada para manejar rutas SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf
