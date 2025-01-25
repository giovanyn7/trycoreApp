-- SCRIPT BASE DE DATOS POSTGRESQL

-- Crear la base de datos
CREATE DATABASE taskManagementdb;

-- Conectar a la base de datos
\c taskManagementdb;

-- Crear la tabla de usuarios
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    role VARCHAR(20) NOT NULL
);

-- Crear la tabla de tareas
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    priority VARCHAR(10) NOT NULL,
    status VARCHAR(20) NOT NULL,
    assigned_user_id INT NOT NULL,
    FOREIGN KEY (assigned_user_id) REFERENCES users (id) ON DELETE CASCADE
);

-- Insertar datos de prueba en la tabla de usuarios
INSERT INTO users (name, email, role) VALUES 
('Pedro Perez', 'Pedro.Perez@mail.com', 'DESARROLLADOR'),
('Juan Ortega', 'Juan.Ortega@mail.com', 'LIDER'),
('Sandra Villamizar', 'Sandra.Villamizar@mail.com', 'DESARROLLADOR');

-- Insertar datos de prueba en la tabla de tareas
INSERT INTO tasks (description, priority, status, assigned_user_id) VALUES 
('Falla critica en el sistema de pagos', 'ALTO', 'PENDIENTE', 1),
('Actualizacion version de la Api de consultas', 'MEDIO', 'IN_PROGRESO', 2),
('Implementacion del modulo de descuentos', 'ALTO', 'COMPLETADO', 3);

-- Consultar usuarios
SELECT * FROM users;

-- Consultar tareas
SELECT * FROM tasks;