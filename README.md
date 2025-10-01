# API REST de Usuarios con Node.js + MongoDB

Este proyecto implementa un CRUD completo de usuarios utilizando **Node.js**, **Express** y **MongoDB** con **Mongoose**.

Permite realizar operaciones de creación, consulta, actualización y eliminación de usuarios.

🛠️ Instalación y uso

1. Clonar el repositorio:
   git clone https://github.com/ManuelDRamos/GestionDeUsuarios.git

2. Instalar dependencias:

npm install

3. Iniciar el servidor:

npm run dev

El proyecto correrá en http://localhost:3000

📌 Ejemplos de uso de la API
➕ Crear un usuario

POST /users

Request (JSON body)
{
"name": "Manuel Ramos",
"email": "manuel@example.com",
"age": 34
}

Response (201 Created)
{
"\_id": "651f3c21d4c7a8b2f0e12345",
"name": "Manuel Ramos",
"email": "manuel@example.com",
"age": 34
}

📋 Obtener todos los usuarios

GET /users

Response (200 OK)
[
{
"_id": "651f3c21d4c7a8b2f0e12345",
"name": "Manuel Ramos",
"email": "manuel@example.com",
"age": 34
},
{
"_id": "651f3c21d4c7a8b2f0e67890",
"name": "Laura Gómez",
"email": "laura@example.com",
"age": 28
}
]

🔍 Obtener un usuario por ID

GET /users/:id

Ejemplo de URL
/users/651f3c21d4c7a8b2f0e12345

Response (200 OK)
{
"\_id": "651f3c21d4c7a8b2f0e12345",
"name": "Manuel Ramos",
"email": "manuel@example.com",
"age": 34
}

✏️ Actualizar un usuario

PUT /users/:id

Request (JSON body)
{
"name": "Manuel A. Ramos",
"email": "manuel.ramos@example.com",
"age": 35
}

Response (200 OK)
{
"\_id": "651f3c21d4c7a8b2f0e12345",
"name": "Manuel A. Ramos",
"email": "manuel.ramos@example.com",
"age": 35
}

🗑️ Eliminar un usuario

DELETE /users/:id

Response (200 OK)
{
"message": "Usuario eliminado correctamente"
}

📖 Reflexión: ¿Qué aprendí y qué mejoraría?
✅ Aprendí:

. La importancia de estructurar un proyecto backend separando rutas, controladores, modelos y servicios.

. Cómo conectar y trabajar con MongoDB a través de Mongoose de manera eficiente.

. El uso de Postman para probar y validar los endpoints creados.

. La necesidad de manejar correctamente los códigos de estado HTTP y devolver mensajes claros en las respuestas.

🔧 Mejoras futuras:

. Implementar validaciones más robustas para los datos de entrada.

. Añadir autenticación y autorización para proteger los endpoints.

. Implementar paginación y filtros en las consultas de usuarios.

. Extender el proyecto con un frontend que consuma la API (ejemplo: React o Next.js).

. Integrar un sistema de logs más detallado y documentación generada automáticamente (Swagger o similar).

📌 Autor

👨‍💻 Manuel Ramos
📍 Bogotá, Colombia
