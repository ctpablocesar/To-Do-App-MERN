# To-Do App MERN (Backend)

En el siguiente documento se describiran los endpoints que existen y como consumirlos.

## Enpoints

### Agregar Tarea 
- #### Petición
 ```
fetch(http://localhost:5000/api/task/, {
    method : 'POST',
    body : {
        title: "Titulo de la tarea",
        description: "Descripcion de la tarea"
    }
}
```
- ### Respuesta satisfactoria
```
    {
        "ok": true,
        "newTask": {
            "title": "Titulo de la tarea",
            "description": "Descripcion de la tarea",
            "status": false,
            "_id": "id_base_de_datos",
            "date": "fecha_iso",
            "__v": 0
    }
}
```
- ### Respuesta no satisfactoria
```
{
    "ok": false,
    "errors": {
        "title": {
            "msg": "El titulo de la tarea es obligatorio",
            "param": "title",
            "location": "body"
        },
        "description": {
            "msg": "La descripcion de la tarea es obligatoria",
            "param": "description",
            "location": "body"
        }
    }
}
```
### Leer tareas

- ### Petición
```
    fetch(http://localhost:5000/api/task/, {
    method : 'GET',
    }
```

- ### Respuesta satisfactoria
```
{
    "ok": true,
    "tasks": [{...}]
}
```

### Leer tarea por ID

- ### Petición
```
fetch(http://localhost:5000/api/task/:id, {
    method : 'GET',
}
```
- ### Respuesta satisfactoria
```
{
    "ok": true,
    "task": {
        "_id": "id_de_base_de_datos",
        "title": "Titulo de la tarea",
        "description": "Descripcion de la tarea",
        "status": false,
        "date": "fecha_iso",
        "__v": 0
    }
}
```

- ### Respuesta no satisfactoria (Error en el dato id)
```
{
    "ok": false,
    "msg": "Error, llame al administrador"
}
```
- ### Respuesta no satisfactoria (Tarea no encontrada)
```
{
    "ok": false,
    "msg": "Tarea no encontrada"
}
```

### Eliminar tarea
- ### Petición
```
fetch(http://localhost:5000/api/task/:id, {
   method : 'DELETE'
}
```

- ### Respuesta satisfactoria
```
{
    ok: true
}
```

- ### Respuesta no satisfactoria (Error en el dato id)
```
{
    "ok": false,
    "msg": "Error, llame al administrador"
}
```

- ### Respuesta no satisfactoria (Tarea no encontrada)
```
{
    "ok": false,
    "msg": "Tarea no encontrada"
}
```

### Cambiar estatus de la tarea

- ### Petición
```
fetch(http://localhost:5000/api/task/:id, {
   method : 'PUT'
}
```

- ### Respuesta satisfactoria
```
{
    "ok": true,
    "newTask": {
        "_id": "id_de_base_de_datos",
        "title": "Titulo de la tarea",
        "description": "Descripcion de la tarea",
        "status": true o false depende el estado inicial,
        "date": "fecha_iso",
        "__v": 0
    }
}
```

- ### Respuesta no satisfactoria (Error en el dato id)
```
{
    ok: false,
    msg: 'Error, llame al administrador'
}
```

- ### Respuesta no satisfactoria (Tarea no encontrada)
```
{
    "ok": false,
    "msg": "Tarea no encontrada"
}
```