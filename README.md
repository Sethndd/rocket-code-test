# Prueba técnica Rocket Code
Desarrollado por: Seth Díaz

## Descripción
Este proyecto es una prueba técnica para la empresa Rocket Code. Consiste en una aplicación web para la administración de una biblioteca.

## Tecnologías
- Java 1.8:
  - MyBatis
  - Spring Boot
  - H2 database
- Angular 19
  - Node.js v20.12.2
  - Bootstrap


## Instrucciones de uso
1. Clonar el repositorio
2. Abrir la carpeta `book-library` (backend) en un IDE (Eclipse, IntelliJ, etc.)
3. Ejecutar el proyecto como una aplicación Spring Boot o con el comando `mvn clean installl; mvn spring-boot:run`
4. Abrir la carpeta `library-frontend` (frontend) en un editor de código (Visual Studio Code, etc.)
5. Ejecutar el comando `npm install` para instalar las dependencias
6. Ejecutar el comando `ng serve` para iniciar el servidor de desarrollo

## Preguntas:
### ¿Qué es JDK y para qué se utiliza?
Significa Java Developmen Kit. Son un conjunto de herramientas y utilidades que nos permiten realizar las actividades de desarrollo para Java. Dichas herramientas generalmente se presentan como utilidades para terminar pero pueden ser integradas en un editor de código o IDE. En el caso de Java, se cuenta con herramientas como el compilador y Java Virual Machine .

### ¿Qué es la reflexión en Java y para qué se utiliza?
Es una API que nos permite ver e incluso modificar los compomentes de una clase en tiempo de ejecución, lo que nos permite cambiar comportamientos. Es muy usada por bibliotecas y framewaroks como JPA o Springboot.

### ¿Cómo manejas excepciones en Java?
Se usan bloques try-catch. El codigo propenso a fallos se envuelve en el try y el que se hace cuando falla en el catch.
Tambien es posible definir handlers globales, utiles por ejemlo en desarrollo de APIs qie permiten controlar flujos fuera de lo habitual sin bloquear la aplicación.

### ¿Qué tipo de arquitectura manejas en Java?
Depende del tipo y del alcance del proyecto. Para proyectos pequeños suelo usar una arquitectura de capas, como en esta prueba técnica. Para proyectos mas elaborados suelo implementar una arquitectura hexagona, buscando alta cohesion pero bajo acoplamiento.

### Qué es la Garbage Collection en Java?
Es un proceso de gestión automática de memoria. Se encarga de identificar la memoria ocupada por referencias que ya no son usadas para liberarla.
