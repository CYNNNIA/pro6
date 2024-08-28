# API de Películas y Plataformas

## Descripción

Esta API permite gestionar una base de datos de películas y plataformas de streaming. Puedes crear, leer, actualizar y eliminar tanto películas como plataformas. La API está construida utilizando Node.js, Express y MongoDB con Mongoose.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Configuración](#configuración)
- [Endpoints](#endpoints)
  - [Películas](#películas)
  - [Plataformas](#plataformas)
- [Uso](#uso)
  - [Obtener todas las películas](#obtener-todas-las-películas)
  - [Crear una nueva película](#crear-una-nueva-película)
  - [Actualizar una película](#actualizar-una-película)
  - [Eliminar una película](#eliminar-una-película)
- [Errores comunes](#errores-comunes)
- [Licencia](#licencia)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tuusuario/tu-repositorio.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd nombre-del-proyecto
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

   ```plaintext
   DB_URL=mongodb+srv://<tu-usuario>:<tu-contraseña>@cluster0.m9dhl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   PORT=3000
   ```

   - `DB_URL`: La URL de conexión a tu base de datos MongoDB.
   - `PORT`: El puerto en el que quieres que corra tu servidor (por defecto 3000).

2. Inicia el servidor:

   ```bash
   npm run dev
   ```

## Endpoints

### Películas

- **GET /api/v1/peliculas**: Obtener todas las películas.
- **POST /api/v1/peliculas**: Crear una nueva película.
- **PUT /api/v1/peliculas/:id**: Actualizar una película existente.
- **DELETE /api/v1/peliculas/:id**: Eliminar una película.

### Plataformas

- **GET /api/v1/plataformas**: Obtener todas las plataformas.
- **POST /api/v1/plataformas**: Crear una nueva plataforma.
- **PUT /api/v1/plataformas/:id**: Actualizar una plataforma existente.
- **DELETE /api/v1/plataformas/:id**: Eliminar una plataforma.

## Uso

### Obtener todas las películas

Realiza una solicitud GET a `/api/v1/peliculas` para obtener la lista completa de películas.

**Ejemplo de respuesta:**

```json
[
  {
    "_id": "64fcb2a5a5c3b5b12e9d354a",
    "nombre": "Inception",
    "categoria": "aventura",
    "plataformas": ["64fcb2a5a5c3b5b12e9d354b"],
    "precio": 9.99,
    "createdAt": "2024-08-27T12:00:00.000Z",
    "updatedAt": "2024-08-27T12:00:00.000Z"
  }
]
```
