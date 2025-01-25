# Imagen base de Java
FROM openjdk:17-jdk-slim

# Directorio de trabajo
WORKDIR /app

# Copiar el archivo JAR del backend
COPY target/backend-0.0.1-SNAPSHOT.jar app.jar

# Exponer el puerto del backend
EXPOSE 8080

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]
