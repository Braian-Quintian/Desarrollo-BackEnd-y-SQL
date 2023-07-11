# Proyecto de Prueba Desarrollo BackEnd y SQL

Este proyecto es una prueba de desarrollo de Backend y SQL. El objetivo es crear una aplicación Node.js que se conecte a una base de datos MySQL y realice diferentes operaciones a través de endpoints.

## Requisitos previos

- Node.js instalado en tu máquina.
- Conexión a una base de datos MySQL.

## Pasos para ejecutar el proyecto

1. Clona este repositorio en tu máquina local.
2. Ejecuta `npm install` para instalar las dependencias del proyecto.
3. Configura la conexión a la base de datos en el archivo `config.js`.
4. Importa los datos de ejemplo ejecutando el script `data.sql` en tu base de datos MySQL.
5. Ejecuta `npm start` para iniciar la aplicación.

## Endpoints disponibles

### Bodegas

#### GET /bodegas

Este endpoint devuelve la lista de bodegas ordenadas alfabéticamente.

- Método: GET
- URL: /bodegas
- Respuesta exitosa:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: Array de objetos JSON, donde cada objeto representa una bodega.

#### POST /bodegas

Este endpoint permite crear una nueva bodega.

- Método: POST
- URL: /bodegas
- Cuerpo de la petición: Objeto JSON que contiene los datos de la bodega a crear.
  - Ejemplo de cuerpo de la petición:
    ```json
    {
      "nombre": "Nueva Bodega",
      "direccion": "Calle Principal 123",
      "capacidad": 100
    }
    ```
- Respuesta exitosa:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: Mensaje de confirmación de que la bodega se ha creado exitosamente.

### Productos

#### GET /productos

Este endpoint devuelve la lista de productos ordenados en orden descendente por el campo "Total", que representa la cantidad total de unidades de ese producto en todas las bodegas.

- Método: GET
- URL: /productos
- Respuesta exitosa:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: Array de objetos JSON, donde cada objeto representa un producto y contiene el campo "Total".

#### POST /productos

Este endpoint permite crear un nuevo producto y asignar una cantidad inicial del mismo en la tabla de inventarios de una bodega por defecto.

- Método: POST
- URL: /productos
- Cuerpo de la petición: Objeto JSON que contiene los datos del producto a crear.
  - Ejemplo de cuerpo de la petición:
    ```json
    {
      "nombre": "Nuevo Producto",
      "descripcion": "Descripción del nuevo producto",
      "cantidadInicial": 10
    }
    ```
- Respuesta exitosa:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: Mensaje de confirmación de que el producto se ha creado exitosamente.

### Inventarios

#### POST /inventarios

Este endpoint permite insertar registros en la tabla de inventarios.

- Método: POST
- URL: /inventarios
- Cuerpo de la petición: Objeto JSON que contiene los datos del inventario a crear o actualizar.
  - Ejemplo de cuerpo de la petición:
    ```json
    {
      "id_producto": 1,
      "id_bodega": 1,
      "cantidad": 5
    }
    ```
- Respuesta exitosa:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: Mensaje de confirmación de que el registro de inventario se ha insertado o actualizado exitosamente.

### Traslado de productos

#### POST /traslado

Este endpoint permite trasladar un producto de una bodega a otra.

- Método: POST
- URL: /traslado
- Cuerpo de la petición: Objeto JSON que contiene los datos del traslado.
  - Ejemplo de cuerpo de la petición:
    ```json
    {
      "id_producto": 1,
      "bodega_origen": 1,
      "bodega_destino": 2,
      "cantidad": 5
    }
    ```
- Respuesta exitosa:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: Mensaje de confirmación de que el traslado se ha realizado exitosamente.

## Comentarios finales

Este proyecto demuestra el desarrollo de un backend en Node.js utilizando una base de datos MySQL. Los endpoints proporcionados permiten listar y crear bodegas, listar y crear productos, insertar registros en la tabla de inventarios y realizar traslados de productos entre bodegas.

Si tienes alguna pregunta adicional o necesitas más información sobre cómo consumir los endpoints, no dudes en contactarme.

¡Gracias por tu atención!

Nota: Recuerda que es importante configurar correctamente la conexión a tu base de datos en el archivo `config.js` antes de ejecutar la aplicación.