# Etapa de compilación
FROM node:16 as build

# Directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios
COPY package*.json ./
RUN npm install
COPY . .

# Construir la aplicación Angular
RUN npm run build --prod

# Etapa para servir la aplicación
FROM nginx:1.21-alpine

# Copiar los archivos de la etapa de compilación
COPY --from=build /app/dist/task-management-frontend /usr/share/nginx/html
