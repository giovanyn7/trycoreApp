# trycoreApp
Prueba tecnica Lider Trycore

# Sistema para Gestión de Tareas

24-01-2025
Yovanny Vargas
giovanyn7@gmail.com

Este proyecto implementa un sistema para la gestión de tareas para equipos técnicos (lideres y desarrolladores) utilizando Spring Boot, Angular, PostgreSQL junto con contenedores Docker para facilitar la implementación y el despliegue. El sistema permite la creación de usuarios, asignación de tareas, actualización de estados y notificaciones automatizadas.

## Estructura Proyecto

El proyecto está compuesto por tres componentes principales:

1. Backend (Spring Boot):
   - Gestión de usuarios y tareas.
   - Implementación de patrones Observer y Factory.
   - Exposición de API REST para el frontend.

2. Frontend (Angular):
   - Interfaz de usuario para interactuar con el sistema.
   - Funcionalidades para crear usuarios, asignar tareas y listar tareas con filtros.

3. Base de Datos (PostgreSQL):
   - Almacena usuarios y tareas.
   - Configurada para ejecutarse en un contenedor Docker.

---

## Características del Sistema

### 1. Módulo de Usuarios
- Atributos: Nombre, correo electrónico, rol (Desarrollador o Líder Técnico).
- Endpoints:
  - Crear un usuario.
  - Obtener la lista de usuarios, filtrada opcionalmente por rol.

### 2. Módulo de Tareas
- Atributos: Descripción, prioridad (Alta, Media, Baja), estado (Pendiente, En Progreso, Completada) y usuario asignado.
- Endpoints:
  - Crear una tarea (asignando un usuario).
  - Actualizar el estado de una tarea.
  - Listar tareas, filtradas por estado o usuario.

### 3. Patrones de Diseño
- Observer: Los líderes técnicos reciben una notificación cada vez que una tarea cambia su estado a "Completada".
- Factory: Crea tareas con diferentes niveles de prioridad.

### 4. Frontend
- Formulario para crear usuarios
- Formulario para asignar tareas a usuarios registrados
- Vista para listar tareas con filtros por estado o usuario

### 5. Docker
- Configuración para ejecutar el backend, frontend y base de datos en contenedores independientes.

---

## Decisiones de Diseño

Se genero un sistema en capas, escalable, desacoplado utilizando patrones de diseño Observer y Factory, interfaces y Microservicios.

1. Patrones de Diseño:
   - Observer se eligió para implementar la lógica de notificación desacoplada, notificando a los líderes técnicos de forma automática.
   - Factory se utilizó para crear objetos de tareas con diferentes niveles de prioridad de manera flexible.

2. Arquitectura en Capas:
   - Separación del backend en controladores, servicios y repositorios para garantizar un código limpio y mantenible.

3. Uso de Angular:
   - Se seleccionó Angular para el frontend debido a su facilidad en su modularidad y desarrollo.

4. PostgreSQL:
   - Se utilizó PostgreSQL como base de datos relacional para manejar datos complejos.

5. Docker Compose:
   - Facilita el despliegue y la ejecución del sistema completo con un solo comando.

---------------------------------------------------------------------------------------------------------------

## Requisitos Previos

1. Herramientas Instaladas:

   - Node.js
   - Java 11+
   - Angular CLI
   - Maven 
   - Docker

2. Puertos Utilizados:
   - Backend: 8080
   - Frontend Angular: 4200
   - PostgreSQL DB: 5432

-----------------------------------------------------------------------------------------------------------------

## Instalación

### Usando Docker Compose

1. Asegúrate de que Docker y Docker Compose estén instalados en la maquina local.

2. Clona este repositorio en tu máquina:
  
   git clone <URL_DEL_REPOSITORIO>

   cd <NOMBRE_DEL_REPOSITORIO>

3. Construye y ejecuta los servicios con Docker Compose:
   
	docker-compose up --build

4. Una vez que se complete, accede a los servicios:

	Frontend (Angular): http://localhost:4200
	Backend (Spring Boot): http://localhost:8080


