# Excel to Json
## [Es]
Este servicio puede convertir un excel en json y un json en excel.
Pueden construir la imagen u obtenerla en [Docker Hub](https://hub.docker.com/repository/docker/francozuniga32/excel2jsonapi).

Puede cambiar el puerto por variable de entorno o por defecto escuchara el puerto 3000.
```bash
npm run serve
```

ahora podra usar la api de la siguiente manera:
```text
//formulario normal se tiene que pasar un archivo .xlsx por form data con la clave "file"
http://localhost:3000/excel2json

```

ahora solo resta pasar algunas configuraciones sencillas por medio de parámetros get o una configuración en txt en forma de json.
```text
//ignorar una fila indicada
http://localhost:3000/excel2json?ignorerow=1
//indicarle las hojas a tomar
http://localhost:3000/excel2json?sheets=2,3,4

```
>!DE MOMENTO SOLO ME HACE FALTA AÑADIR LOS MAPEOS DE CLAVES PARA LAS COLUMNAS

ahora podrá usarlo de forma que no se tiene que preocupar en implementarlo en su sistema sino usarlo como un servicio ya hecho.

---
# Json to Excel
> FUNCIONALIDAD EN PRGRESO

---

## [En]
This service can convert an excel to json and a json to excel.
You can build the image or get it from [Docker Hub](https://hub.docker.com/repository/docker/francozuniga32/excel2jsonapi).

You can change the port by environment variable or by default it will listen to port 3000.

```bash
npm run serve
```

now you can use the api as follows:
``` text
// normal form you have to pass an .xlsx file through form data with the key "file"
http://localhost:3000/excel2json

```

now it only remains to pass some simple configurations through get parameters or a configuration in txt in the form of json.
``` text
// ignore a specified row
http://localhost:3000/excel2json?ignorerow=1
// indicate the leaves to take
http://localhost:3000/excel2json?sheets=2,3,4
```

>! AT THE MOMENT I ONLY NEED TO ADD THE KEY MAPS FOR THE COLUMNS

now you can use it in such a way that you do not have to worry about implementing it in your system but use it as a ready-made service.