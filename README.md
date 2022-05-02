![Ajolonauta-Woopa!](https://user-images.githubusercontent.com/17634377/159151704-8949639b-ae5f-405a-a8b8-8d97f3f150cd.png)

Requerimientos:

* Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
* Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
* Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500.


Entrega:

### ✅ Crea un repositorio en GitHub para guardar este nuevo proyecto.
### ✅ Agrega pruebas automatizadas con GitHub Actions.
### ✅ Sé consistente en tu control de versiones, que tus commits expliquen tu forma de construir el proyecto.

### Agrega un readme.md con las siguientes secciones:
---
* ✅ Detalla qué dependencias estás usando y para qué.
* ✅ Explica el diseño de tus componentes.
* ✅ Explica tu API: cómo consultarla, qué formato va a responder, incluye ejemplos etc.

Tú decides qué hacer, cómo hacerlo, cómo diseñarlo. TODO.

## Importante: Toma nota de cuanto tiempo te lleva resolver esto.

---

# Dependencias utilizadas en este proyecto

* Jest:

Framework de testing para Javascript, diseñado para asegurar el comportamiento deseado u corrección de cualquier base de código Javascript. En este proyecto se está utilizando como primer herramienta de desarrollo ya que se está siguiendo el marco de TDD (Test Driven Development), según el cual los requerimientos del software se modelan en las pruebas de unidad de una entidad específica del código, como una Clase de POO, para luego crear dicha clase o base de código hasta pasar las pruebas donde se modelaron los requerimientos.

-> Crea la prueba -> primer npm test -> Modela el requerimiento -> npm test -> Ve siguiendo los errores hasta resolverlos todos, cuando lo logres has cumplido el requerimiento -> npm test pasando prueba -> no confíes en una prueba que no has visto tronar así que modifícala y vela fallar -> refactoriza y vuelve a hacer test.

* Express:

Framework más usado y estable para Node.js. Se utiliza para crear Web Apps, Web APIs o cualquier tipo de web services. En este proyecto se está utilizando para crear la configuración de un servidor web y crear una API que cumpla con los requerimientos pedidos en el Challenge de Launch X, creando los endpoints pedidos para que el cliente pueda, mediante una petición, obtener la información que requiere.


* Linter:

Herramienta que nos ayuda a seguir una guía de estilo en la escritura, como con el uso de los puntos y comas, indentaciones, etc.  


[Jest](https://jestjs.io/docs/26.x/getting-started)
---
[Express](https://expressjs.com/)
---
[Linter](https://eslint.org/docs/user-guide/getting-started)
---

# Diseño de los componentes

En orden gerárquico tenemos los siguientes componentes, desde el menos cercano a interactuar 
como API hasta aquel componente cuyos métodos se usan directamente en los endpoints con los 
que el cliente se va a comunicar para pedir datos (los cuales se le entregarán en formato JSON).


* lib/utils/Reader

El diseño consta de una clase Reader con un solo método estático que lee el archivo Json que contiene 
los datos de los Visual Partners, llamado readJsonFile dentro del cual se hace uso de un método del 
objeto filesystem para obtener sus datos, luego se convierte a formato Json con JSON.parse().  

* lib/services/StudentService

El diseño consta de una clase StudentService con 3 métodos que son llamados por el componente StudentController.

1 showAllStudents(students)

Para consultar todos los estudiantes con todos sus campos.

2 getEmailsCertified(students)

Para consultar los emails de todos los estudiantes que tengan certificación haveCertification.

3 getStudents500(students)

Para consultar todos los estudiantes que tengan credits mayor a 500.

* lib/controllers/StudentControllers

El diseño consta de una clase StudentController con 3 métodos que llaman a sus métodos homólogos del componente StudentService.


# La API

Para consultar la API se puede hacer con el url del endpoint en el navegador.
![Imgur](https://i.imgur.com/eFuyvg1.png)

![Imgur](https://i.imgur.com/zfDIdTa.png)

O usar postman como cliente, usando peticiones GET.

![Imgur](https://i.imgur.com/Oypkeun.png)

El server responde con datos en formato JSON



Comienzo 12:27 am - 2:54 pm with interruptions




