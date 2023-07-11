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

# Routers

En este README se proporcion

a una explicación sobre cómo funcionan los distintos routers disponibles en la aplicación, así como ejemplos sobre cómo consumirlos correctamente.

## Bodegas

El router de bodegas (`bodegas.js`) proporciona funcionalidad para obtener y crear bodegas en el sistema.

### GET /bodegas

Este endpoint se utiliza para obtener la lista de bodegas existentes en el sistema.

- **Método:** GET
- **URL:** /bodegas

**Respuesta Exitosa:**

- **Código de estado:** 200 (OK)
- **Cuerpo de respuesta:** Array de objetos JSON, donde cada objeto representa una bodega.

Ejemplo de respuesta exitosa:

```json
[
  {
    "id": 1,
    "nombre": "Bodega 1",
    "id_responsable": 11,
    "estado": 1,
    "created_at": "2023-07-10T10:30:00Z",
    "updated_at": "2023-07-10T12:45:00Z"
  },
  {
    "id": 2,
    "nombre": "Bodega 2",
    "id_responsable": 12,
    "estado": 1,
    "created_at": "2023-07-09T15:20:00Z",
    "updated_at": "2023-07-09T16:40:00Z"
  }
]
```

### POST /bodegas

Este endpoint se utiliza para crear una nueva bodega en el sistema.

- **Método:** POST
- **URL:** /bodegas

**Cuerpo de la petición:** Objeto JSON que contiene los datos de la bodega a crear. Los campos requeridos son: `nombre`, `id_responsable` y `estado`. Los campos `created_by` y `update_by` son opcionales.

Ejemplo de cuerpo de la petición:

```json
{
  "nombre": "Bodega de Ejemplo",
  "id_responsable": 13,
  "estado": 1,
  "created_by": null,
  "update_by": null
}
```

**Respuesta Exitosa:**

- **Código de estado:** 200 (OK)
- **Cuerpo de respuesta:** Mensaje de confirmación de que la bodega se ha creado exitosamente.

Ejemplo de respuesta exitosa:

```bash
Bodega creada exitosamente
```

**Respuesta de Error:**

- **Código de estado:** 400 (Bad Request) si faltan campos requeridos en el cuerpo de la petición.
- **Código de estado:** 409 (Conflict) si se intenta crear una bodega que ya existe en el sistema.

#### Uso de los Endpoints

Ejemplo de consumo del endpoint POST /bodegas:

Para crear una nueva bodega, se debe enviar una solicitud POST a la siguiente URL: `/bodegas`. El cuerpo de la petición debe incluir un objeto JSON con los datos de la bodega a crear.

Ejemplo de solicitud POST utilizando Thunder Client:

```
POST http://localhost:3000/bodegas/
```

```json
{
  "nombre": "Bodega de Ejemplo",
  "id_responsable": 13,
  "estado": 1,
  "created_by": null,
  "update_by": null
}
```

La respuesta exitosa de esta solicitud será un mensaje indicando que la bodega se ha creado exitosamente.

Ejemplo de consumo del endpoint GET /bodegas:

Para obtener la lista de bodegas existentes, se debe enviar una solicitud GET a la siguiente URL: `/bodegas`.

Ejemplo de solicitud GET utilizando Thunder Client:

```
GET http://localhost:3000/bodegas
```

## Inventarios

El router de inventarios (`inventarios.js`) proporciona funcionalidad para crear registros de inventario en el sistema.

### POST /inventarios

Este endpoint se utiliza para crear o actualizar un registro de inventario en el sistema.

- **Método:** POST
- **URL:** /inventarios

**Cuerpo de la petición:** Objeto JSON que contiene los datos del inventario a crear o actualizar. Los campos requeridos son: `id_producto`, `id_bodega` y `cantidad`.

Ejemplo de cuerpo de la petición:

```json
{
  "id_producto": 1,
  "id_bodega": 1,
  "cantidad": 10
}
```

**Respuesta Exitosa:**

- **Código de estado:** 200 (OK)
- **Cuerpo de respuesta:** Mensaje de confirmación de que el registro de inventario se ha creado o actualizado exitosamente.

Ejemplo de respuesta exitosa:

```bash
Registro de inventario insertado o actualizado exitosamente
```

**Respuesta de Error:**

- **Código de estado:** 400 (Bad Request) si faltan campos requeridos o si la cantidad ingresada es inválida.
- **Código de estado:** 409 (Conflict) si hay un error de duplicación de entrada.

#### Uso del Endpoint

Ejemplo de consumo del endpoint POST /inventarios:

Para crear o actualizar un registro de inventario, se debe enviar una solicitud POST a la siguiente URL: `/inventarios`. El cuerpo de la petición debe incluir un objeto JSON con los datos del inventario a crear o actualizar.

Ejemplo de solicitud POST utilizando Thunder Client:

```
POST http://localhost:3000/inventarios/
```

```json
{
  "id_producto": 1,
  "id_bodega": 1,
  "cantidad": 10
}
```

La respuesta exitosa de esta solicitud será un mensaje indicando que el registro de inventario se ha creado o actualizado exitosamente.

**Nota:** El router `inventarios.js` utiliza transacciones para asegurar la integridad de los datos. En caso de un error durante la creación o actualización del inventario, se realizará un rollback de la transacción para deshacer cualquier cambio realizado anteriormente.

#### Funciones de Manejo de Transacciones

El router `inventarios.js` utiliza las siguientes funciones para manejar las transacciones:

- `startTransaction(connection)`: Inicia una transacción en la conexión proporcionada.
-

 `commitTransaction(connection)`: Realiza un commit de la transacción en la conexión proporcionada.
- `rollbackTransaction(connection)`: Realiza un rollback de la transacción en la conexión proporcionada.

#### Funciones de Consulta y Actualización del Inventario

El router `inventarios.js` utiliza las siguientes funciones para consultar y actualizar el inventario:

- `getExistingRecord(connection, id_producto, id_bodega)`: Verifica si existe un registro de inventario para el producto y la bodega proporcionados. Devuelve el registro existente o `null` si no existe.
- `insertNewInventory(connection, id_producto, id_bodega, cantidad)`: Inserta un nuevo registro de inventario para el producto y la bodega proporcionados.
- `updateExistingInventory(connection, id_producto, id_bodega, updatedCantidad)`: Actualiza la cantidad de un registro de inventario existente para el producto y la bodega proporcionados.

#### Función de Manejo de Errores

El router `inventarios.js` utiliza la función `handleError(error, res)` para manejar los errores. Esta función verifica el código de error y responde adecuadamente:

- Si el código de error es `'ER_DUP_ENTRY'`, se utiliza `handleDuplicateEntryError(res)` para enviar una respuesta de error de duplicación de entrada.
- Si el código de error es `'ER_WARN_DATA_OUT_OF_RANGE'`, se utiliza `handleInvalidDataError(res, 'La cantidad ingresada es inválida')` para enviar una respuesta de error de datos inválidos.
- En cualquier otro caso, se propaga el error para que sea manejado por el manejador de errores global.

Espero que esta información sea útil para comprender cómo utilizar y consumir los routers `bodegas.js` e `inventarios.js` en tu aplicación.

Si tienes alguna otra pregunta, no dudes en hacerla.

## Productos

El router de productos (`productos.js`) proporciona funcionalidad para obtener y crear productos en el sistema.

### GET /productos

Este endpoint se utiliza para obtener la lista de productos existentes en el sistema, junto con el total de inventario para cada producto.

- **Método:** GET
- **URL:** /productos

**Respuesta Exitosa:**

- **Código de estado:** 200 (OK)
- **Cuerpo de respuesta:** Array de objetos JSON, donde cada objeto representa un producto y contiene también el campo `Total` que indica el total de inventario para ese producto.

Ejemplo de respuesta exitosa:

```json
[
  {
    "id": 1,
    "nombre": "Producto 1",
    "descripcion": "Descripción del producto 1",
    "Total": 50
  },
  {
    "id": 2,
    "nombre": "Producto 2",
    "descripcion": "Descripción del producto 2",
    "Total": 20
  }
]
```

### POST /productos

Este endpoint se utiliza para crear un nuevo producto en el sistema.

- **Método:** POST
- **URL:** /productos

**Cuerpo de la petición:** Objeto JSON que contiene los datos del producto a crear. Los campos requeridos son: `nombre`, `descripcion` y `cantidadInicial`.

Ejemplo de cuerpo de la petición:

```json
{
  "nombre": "Nuevo Producto",
  "descripcion": "Descripción del nuevo producto",
  "cantidadInicial": 10
}
```

**Respuesta Exitosa:**

- **Código de estado:** 200 (OK)
- **Cuerpo de respuesta:** Mensaje de confirmación de que el producto se ha creado exitosamente.

Ejemplo de respuesta exitosa:

```bash
Producto creado exitosamente
```

**Respuesta de Error:**

- **Código de estado:** 400 (Bad Request) si faltan campos requeridos en el cuerpo de la petición.
- **Código de estado:** 409 (Conflict) si se intenta crear un producto que ya existe en el sistema.

#### Uso de los Endpoints

Ejemplo de consumo del endpoint POST /productos:

Para crear un nuevo producto, se debe enviar una solicitud POST a la siguiente URL: `/productos`. El cuerpo de la petición debe incluir un objeto JSON con los datos del producto a crear.

Ejemplo de solicitud POST utilizando Thunder Client:

```
POST http://localhost:3000/productos/
```

```json
{
  "nombre": "Nuevo Producto",
  "descripcion": "Descripción del nuevo producto",
  "cantidadInicial": 10
}
```

La respuesta exitosa de esta solicitud será un mensaje indicando que el producto se ha creado exitosamente.

Ejemplo de consumo del endpoint GET /productos:

Para obtener la lista de productos existentes con el total de inventario, se debe enviar una solicitud GET a la siguiente URL: `/productos`.

Ejemplo de solicitud GET utilizando Thunder Client:

```
GET http://localhost:3000/productos/
```

Espero que esta información adicional sea útil para comprender el funcionamiento de los routers `bodegas.js`, `inventarios.js` y `productos.js` en tu aplicación.

Si tienes alguna otra pregunta, no dudes en hacerla.
```


### Otras tablas

No se realizaron cambios en las demás tablas de la base de datos.

Estos cambios mejoran la estructura y evitan duplicidades en los datos almacenados en la base de datos.

Si tienes alguna pregunta adicional, no dudes en preguntar.


para el paso 7 esto es lo que se debe enviar obligatoriamente:
{
  "nombre": "Aguapanela",
  "descripcion": "jjjjjj",
  "cantidadInicial": 10
}

para el paso 8 esto es lo que se debe enviar obligatoriamente:
