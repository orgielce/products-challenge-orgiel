# Orgiel Challenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

## Configuraciones básicas:
1. Tecnologías empleadas: NodeJS 18.18.2 y pnpm 8.10.4.
2. Rama principal en github <b>develop</b>.
3. Se configura NgRx para la gestión de estado de los productos y el usuario autenticado.
4. La app cuenta con información base en la ruta /index y para ver los productos es necesario autenticarse introduciendo su nombre y su key generada en la api <b>barcodelookup</b>, simulando que está introduciendo usuario y contraseña.
5. La app dentro de src cuenta con los directorios app, assets, environments y tests. Dentro de app cuenta con components, modules y shared.
6. Se configura un proxy (src/proxy.conf.json) para llegar del entorno de desarrollo http://localhost:4200 hasta el dominio del api.
7. De cada carpeta en el dominio shared se exporta todo 
   mediante un barrel (index.ts), para hacer los path
   más cortos al importar como dependencias.
8. Eliminadas las dependencias de Jasmine y Karma.
9. Agregado Jest para probar la app mediante pnpm run test:watch.
10. Las pruebas a cada pieza de nuestra app se encuentran
   en src/tests. Donde se replica la estructura de directorios
   de la carpeta src/app para que se muestre más limpio el
   proyecto y todas las pruebas queden legibles en src/tests.
   Configuramos fotos o snapshots de los componentes para evitar
   cambios que rompan la app.
11. Se utiliza primeng para mostrar los iconos.
12. Se maqueta casi todo sin librerías de terceros.
13. La tabla de productos se puede filtrar por búsqueda general, barcode, mpn, brand, category y presenta paginado.
14. Presenta loader personalizado, simulando la marca de la empresa.
15. Se trabajó con standalone components, carga peresosa de módulos, ngrx, rxjs, librerias externas como primeng, ng-gallery, enums, guard, servicios, interceptor con manejo de errores, pruebas basadas en jest, nomenclatura de git conventional commits (https://github.com/qoomon/git-conventional-commits).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
