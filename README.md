# katapelis

El objetivo de esta práctica es el desarrollo de una mini app que muestre un catálogo de pelis 🎬🍿 y una página de detalles de las mismas.

La aplicación contará con 2 rutas:

* La ruta principal `/` la cual ofrecerá una lista de películas
* La ruta de detalles de la peli `/{peli_id}`

Las pelis se estarán cogiendo de este API: [OMDB](http://www.omdbapi.com/).

Al final encontrarás un apartado de **Anexos** en los cuales se sugieren ideas de nuevas "features" que se podrían ir añadiendo a la aplicación y que se salen del "scope" básico de esta práctica.

## Requisitos

* Instala [node](https://nodejs.org/es/) y [yarn](https://yarnpkg.com/).
* Ten en cuenta el archivo `.nvmrc` e intenta trabajar con la misma versión de node.

## Compartiendo tu solución

* Créate una rama con tu nombre.
* Tus commits deberán ser pequeños y que expliquen bien tanto su contenido como el porqué si de verdad encuentras necesario este detalle.
* Normalmente para nuestros commits seguimos la nomenclatura de `angular` - https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-angular
* El proyecto está configurado con `commitlint` y `husky` y cada vez que hagas un commit su formato deberá ser correcto.

## Estructura del repositorio

* `/core`: aquí iremos moviendo parte del código común y que será usado por ambas webapps.
* `/maqueta`: aquí dejaremos nuestros archivos `html` y `css` y trabajaremos nuestra maquetación totalmente estática y abstraída de frameworks.
* `/webapp-react`: aquí implementaremos nuestra aplicación con `ReactJS`.
* `/webapp-vue`: aquí implementaremos nuestra aplicación con `VueJS`.

## Aplicación React

1. `cd webapp-react`
2. `yarn install`
3. `yarn start`
4. Abre tu navegador: `http://127.0.0.1:3000/`

Para ejecutar los tests `yarn test`

## Aplicación Vue

1. `cd webapp-vue`
2. `yarn install`
3. `yarn dev`
4. Abre tu navegador: `http://127.0.0.1:5173/`

Para ejecutar los tests `yarn test:unit`

## API de pelis

* URL: `https://www.omdbapi.com/`
* Api key: `ab64c929`

## Testing

Es importante testear, y cuanto antes mejor!! 😅.
Esto redundará en un mejor mantenimiento de la aplicación en el futuro y la posibilidad de añadir "features" más fácilmente.

En la práctica no se pide nada relacionado con los tests pero se valorará positivamente además de que te ayudarán a lograr una implementación de mayor calidad.

🚨 Queda pendiente en un futuro agregar a la práctica tareas de test que sigan las buenas prácticas vinculadas con el `TDD`.

### Tipos de tests

1. 🟩 Tests de unidad: comprueba que una función produce la misma salida (o "side effect") con unos argumentos de entrada concretos.

2. 🧩 Tests de componentes: comprueba que el componente se monta, renderiza y se comporta como se espera. Este tipo de tests son normalmente más complejos que los tests de unidad y requieren de más tiempo para ejecutarse.

3. 🍰 Tests "end-to-end": comprueba "features" que involucran múltiples páginas, realizan llamadas reales al "backend" e incluso en algunos casos requieren de levantar bases de datos y otros servicios del lado del servidor.

## Features y tareas

### Sobre UI y archivos de referencia diseño

Para las tareas de **Maqueta** de momento no tenemos diseños los cuales tomes como referencia.

Inspírate ✨ en sitios relacionados de pelis (Netflix, HBO, etc...), prepara tus archivos y déjalos en la carpeta `/maqueta/**/ui-ref/` para cada página que se te pida maquetar.

Estos archivos no se necesita que estén trabajados en Figma, con unos archivos de imagen será suficiente aunque si prefieres Figma, Photoshop, etc... lo dejamos a tu elección (**have fun** 😁).

### 1. Maqueta - página listado de pelis

Deja tus `html`, `css` y tus archivos de referencia para `ui` en `/maqueta/page-pelis`.

### 2. Maqueta - página detalles de una peli

Deja tus `html`, `css` y tus archivos de referencia para `ui` en `/maqueta/page-peli`.

### 3. ¿Qué framework usaré `VueJS` o `ReactJS`?

Elige cualquiera de los dos si no se te ha designado uno expresamente.

### 4. Instala y configura una librería de Routing

* `vue-router` si estás usando `VueJS`
* `react-router-dom` si estás usando `ReactJS`

### 5. Ruta Home: `/` mostrando pelis

* Obtén las pelis del API
* Muestra como máximo 10 resultados
* Usa los archivos de `/maqueta/page-pelis` y que se vea chula 😎

### 6. Ruta Details: `/{peli_id}` mostrando detalles de una peli

* Obtén la peli del API
* Usa los archivos de `/maqueta/page-peli` y que se vea chula 😎

### 7. Home: mostrando pelis paginadas

* Añade paginación al listado para poder consumir más de 10 resultados
* Añade unos elementos de `ui` (tipo flechas) para ver la siguiente página y la anterior

### 8. Home: buscando nuestras pelis favoritas

* Añade un buscador que filtre el listado por el término de búsqueda proporcionado
* La paginación deberá funcionar de la misma forma y tener en cuenta el término de búsqueda aplicado

### 9. Instala y configura una librería para manejar el `state` de forma centralizada

* `pinia` si estás usando `VueJS`
* `redux` si estás usando `ReactJS`

### 10. Refactor Home: moviendo la lógica de nuestro `state` al store

* Mueve la lógica del `state` del listado de pelis al store

### 11. Refactor Details: moviendo la lógica de nuestro `state` al store

* Mueve la lógica del `state` de la página de detalles de la peli al store
* Añade una optimización de `caching` a la página de detalles para no hacer llamada al API en 2 minutos si la peli ya la tenemos en el store
* Evita los "magic strings"! y declara esos 2 minutos de caching como constante

### 12. Refactor Service:

* Mueve el código que interactúa con el API a un servicio independiente.

### 13. Refactor TailwindCSS

Instala TailwindCSS y elimina todas las clases personalizadas que puedas. El objetivo final es prescindir de clases propias al 100% 😅.
Sabemos que has creado todas esas `class`es con todo el cariño 💖 del mundo pero ahora te pedimos que las tires a la 🗑️ 🤷🏻 .

### Opcional: Sigue el mismo proceso anterior y crea tu misma app con el otro framework que no usaste

Si antes usaste `ReactJS`, prueba con `VueJS` y vi🍺 . Reutiliza todo lo que puedas.

### Opcional: Moviendo el service a la carpeta `/core`

Si has implementado la solución con `VueJS` y con `ReactJS` mueve el código del service a la carpeta `core` y elimina el código de las respectivas aplicaciones.

## Anexos (Ideas y otras Features ✨)

ℹ️ Se usará `json-server` cuando se necesite persistir datos como cuentas de usuario, reviews, etc...

* Home: Infinite Scrolling
* Register/Login: usar JWT y localstorage para los tokens de sesión
* My Account: página protegida que muestre los detalles del usuario
* Peli Details: Adding reviews (anonymous users)
* Peli Details: Adding reviews (logged-in users)
* My Account > reviews: mostrando mis reviews de pelis
* My Account > update password
