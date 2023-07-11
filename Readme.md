# Cambios en la base de datos

Se realizaron modificaciones en la base de datos para mejorar su estructura y garantizar la integridad de los datos. A continuación se detallan los cambios realizados:

## Usuarios

- Se agregó la restricción UNIQUE a la columna `email` para evitar correos electrónicos duplicados.

## Bodegas

- Se aplicó la restricción UNIQUE a la columna `nombre` para evitar nombres de bodegas duplicados.
- Se realizaron las siguientes modificaciones en las bodegas para resolver duplicidades de nombres:
  - Bodega con ID 28: se modificó el nombre de "prueba" a "prueba1".
  - Bodega con ID 38: se modificó el nombre de "bodega fg" a "bodega fg1".
  - Bodega con ID 40: se modificó el nombre de "bodega fg 2" a "bodega fg 3".
  - Bodega con ID 43: se modificó el nombre de "Bodega Developer 13.2" a "Bodega Developer 13.2.1".

## Productos

- Se aplicó la restricción UNIQUE a la columna `nombre` para evitar nombres de productos duplicados.
- Se realizaron las siguientes modificaciones en los productos para resolver duplicidades de nombres:
  - Producto con ID 36: se modificó el nombre de "producto fg 1" a "producto fg 2".
  - Producto con ID 37: se modificó el nombre de "producto fg 1" a "producto fg 3".
  - Producto con ID 42: se modificó el nombre de "gato" a "gato1".
  - Producto con ID 44: se modificó el nombre de "whiskas" a "whiskas1".
  - Producto con ID 45: se modificó el nombre de "whiskas" a "whiskas2".
  - Producto con ID 46: se modificó el nombre de "whiskas" a "whiskas3".
  - Producto con ID 47: se modificó el nombre de "whiskas" a "whiskas4".
  - Producto con ID 48: se modificó el nombre de "whiskas" a "whiskas5".
  - Producto con ID 49: se modificó el nombre de "whiskas" a "whiskas6".
  - Producto con ID 50: se modificó el nombre de "whiskas" a "whiskas7".
  - Producto con ID 51: se modificó el nombre de "whiskas" a "whiskas8".
  - Producto con ID 52: se modificó el nombre de "whiskas" a "whiskas9".
  - Producto con ID 53: se modificó el nombre de "whiskas" a "whiskas10".
  - Producto con ID 54: se modificó el nombre de "whiskas" a "whiskas11".
  - Producto con ID 57: se modificó el nombre de "Producto Anderson Atuesta" a "Producto Anderson Atuesta1".
  - Producto con ID 58: se modificó el nombre de "Producto Anderson Atuesta" a "Producto Anderson Atuesta2".
  - Producto con ID 59: se modificó el nombre de "Producto Anderson Atuesta" a "Producto Anderson Atuesta3".

Estos cambios mejoran la estructura y evitan duplicidades en los datos almacenados en la base de datos.

Si tienes alguna pregunta adicional, no dudes en preguntar.


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
      "nombre" : "bodegaMA",
      "id_responsable" : 12,
      "estado" : 1
    }
    ```
- Respuesta exitosa:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: Mensaje de confirmación de que la bodega se ha creado exitosamente.

¡NOTA!
```diff
 - No es necesario enviar el campo "id" en el cuerpo de la petición, ya que este campo se genera automáticamente en la base de datos.
 - El campo "estado" es un campo de tipo booleano, por lo que solo puede tener los valores 0 o 1.
 - El campo "id_responsable" debe ser un ID válido de un usuario existente en la base de datos.
```

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

Este proyecto cumple con los requisitos establecidos para la prueba de desarrollo de Backend y SQL. Los endpoints proporcionados permiten listar y crear bodegas, listar y crear productos, insertar registros en la tabla de inventarios y realizar traslados de productos entre bodegas. La aplicación está configurada para conectarse a una base de datos MySQL.

Si tienes alguna pregunta adicional o necesitas más información sobre cómo consumir los endpoints, no dudes en contactarme.

¡Gracias por tu atención!

Nota: Recuerda que es importante configurar correctamente la conexión a tu base de datos en el archivo `config.js` antes de ejecutar la aplicación.
