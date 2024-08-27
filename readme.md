:: Files

index.js : Inicializar el sistema
modules.js: Crear las funcionalidades

:: Funcionalidades:

- Ayuda sobre argumentos
- Mostrar contactos
- agregar contacto
- eliminar contacto

○ Listar contactos: Muestra todos los contactos almacenados en el archivo JSON, con la opción de filtrar solo los contactos marcados como favoritos.
○ Agregar contacto: Permite agregar un nuevo contacto con todos los campos mencionados, realizando las siguientes validaciones:
    ■ El nombre debe contener más de 4 caracteres.
    ■ El número de teléfono debe ser solo numérico.
    ■ El email debe contener un arroba (@).
○ Eliminar contacto: Permite eliminar un contacto

contacto:

{
    "id": "uuid";
    "nombre": "name of the contact";
    "telefono": "2323232323";
    "email": "ewew@wewewe"
    "favorito": true;
}

## comandos para ejecutar las funcionalidades

○ node index.js list [favoritos]: Lista todos los contactos o solo los favoritos si se proporciona el argumento favoritos.
○ node index.js add "Nombre del Contacto" "Telefono" "Email" [favorito]: Agrega un nuevo contacto.
○ node index.js delete "ID_del_Contacto": Elimina un contacto por 

