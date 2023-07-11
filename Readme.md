## Cambios en la base de datos

Se realizaron modificaciones en la base de datos para mejorar su estructura y garantizar la integridad de los datos. A continuación se detallan los cambios realizados:

### Usuarios

- Se agregó la restricción UNIQUE a la columna `email` para evitar correos electrónicos duplicados.

### Bodegas

- Se aplicó la restricción UNIQUE a la columna `nombre` para evitar nombres de bodegas duplicados.
- Se realizaron las siguientes modificaciones en las bodegas para resolver duplicidades de nombres:
    - Bodega con ID 28: se modificó el nombre de "prueba" a "prueba1".
    - Bodega con ID 38: se modificó el nombre de "bodega fg" a "bodega fg1".
    - Bodega con ID 40: se modificó el nombre de "bodega fg 2" a "bodega fg 3".
    - Bodega con ID 43: se modificó el nombre de "Bodega Developer 13.2" a "Bodega Developer 13.2.1".

### Productos

- Se aplicó la restricción UNIQUE a la columna `nombre` para evitar nombres de bodegas duplicados.
- Se realizaron las siguientes modificaciones en las bodegas para resolver duplicidades de nombres:
    - Bodega con ID 36: se modificó el nombre de "producto fg 1" a "producto fg 2".
    - Bodega con ID 37: se modificó el nombre de "producto fg 1" a "producto fg 3".
    - Bodega con ID 42: se modificó el nombre de "gato" a "gato1".
    - Bodega con ID 44: se modificó el nombre de "whiskas" a "whiskas1".
    - Bodega con ID 45: se modificó el nombre de "whiskas" a "whiskas2".
    - Bodega con ID 46: se modificó el nombre de "whiskas" a "whiskas3".
    - Bodega con ID 47: se modificó el nombre de "whiskas" a "whiskas4".
    - Bodega con ID 48: se modificó el nombre de "whiskas" a "whiskas5".
    - Bodega con ID 49: se modificó el nombre de "whiskas" a "whiskas6".
    - Bodega con ID 50: se modificó el nombre de "whiskas" a "whiskas7".
    - Bodega con ID 51: se modificó el nombre de "whiskas" a "whiskas8".
    - Bodega con ID 52: se modificó el nombre de "whiskas" a "whiskas9".
    - Bodega con ID 53: se modificó el nombre de "whiskas" a "whiskas10".
    - Bodega con ID 54: se modificó el nombre de "whiskas" a "whiskas11".
    - Bodega con ID 57: se modificó el nombre de "Producto Anderson Atuesta" a "Producto Anderson Atuesta1".
    - Bodega con ID 58: se modificó el nombre de "Producto Anderson Atuesta" a "Producto Anderson Atuesta2".
    - Bodega con ID 59: se modificó el nombre de "Producto Anderson Atuesta" a "Producto Anderson Atuesta3".






# Routers

En este README se proporciona una explicación sobre cómo funcionan los distintos routers disponibles en la aplicación, así como ejemplos sobre cómo consumirlos correctamente.

## Bodegas

El router de bodegas (`bodegas.js`) proporciona funcionalidad para obtener y crear bodegas en el sistema.

#### GET /bodegas

Este endpoint se utiliza para obtener la lista de bodegas existentes en el sistema.

**Método:** GET  
**URL:** /bodegas

**Respuesta Exitosa:**
- Código de estado: 200 (OK)
- Cuerpo de respuesta: Array de objetos JSON, donde cada objeto representa una bodega.

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
POST /bodegas
Este endpoint se utiliza para crear una nueva bodega en el sistema.

**Método**: POST
**URL**: /bodegas

Cuerpo de la petición: Objeto JSON que contiene los datos de la bodega a crear. Los campos requeridos son: nombre, id_responsable y estado. Los campos created_by y update_by son opcionales.

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

***Respuesta Exitosa:***

Código de estado: 200 (OK)
Cuerpo de respuesta: Mensaje de confirmación de que la bodega se ha creado exitosamente.
Ejemplo de respuesta exitosa:
```bash
Bodega creada exitosamente
```

***Respuesta de Error:***

Código de estado: 400 (Bad Request) si faltan campos requeridos en el cuerpo de la petición.
Código de estado: 409 (Conflict) si se intenta crear una bodega que ya existe en el sistema.
Uso de los Endpoints
Ejemplo de consumo del endpoint POST /bodegas
Para crear una nueva bodega, se debe enviar una solicitud POST a la siguiente URL: /bodegas. El cuerpo de la petición debe incluir un objeto JSON con los datos de la bodega a crear.

Ejemplo de solicitud POST utilizando Thunder Client:
```url
http://localhost:3000/bodegas/
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

Ejemplo de consumo del endpoint GET /bodegas
Para obtener la lista de bodegas existentes, se debe enviar una solicitud GET a la siguiente URL: /bodegas.

Ejemplo de solicitud GET utilizando ThunderClient:
```bash
GET /bodegas
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
