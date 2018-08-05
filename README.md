*Esta herramienta digital forma parte del catálogo de herramientas del **Banco Interamericano de Desarrollo**. Puedes conocer más sobre la iniciativa del BID en [code.iadb.org](code.iadb.org)*

## APP del Sistema de Gestión de Incidencias en Salud SGiS

### Descripción y contexto
---
Una de las prioridades de la Secretaría de Salud del Estado de Chiapas es tener herramientas para implementar acciones que permitan el acceso de las mujeres a los servicios obstétricos, a fin de reducir la muerte materna y neonatal; Por lo tanto, la creación de SGiS, es una estrategia para fortalecer la sistematización en atención de referencias, respuesta de urgencias, emergencias obstétricas y neonatales; cada unidad hospitalaria será la central de información; encargada de gestionar a pacientes en salud maternal, desde el monitoreo, registro y seguimiento de las incidencias; los procesos serán controlados a través de SGiS, estos para coordinar la red de servicios a fin de brindar una atención resolutiva a los usuarios dentro del menor tiempo posible.

Para contribuir a mejorar la calidad y eficacia de los servicios de salud deberá existir un sistema de referencia y respuesta que “constituya el enlace entre las unidades hospitalarias operativas de los niveles de atención que conforman la red de servicios, con el propósito de brindar a los usuarios atención médica integral y oportuna en las unidades, conforme al padecimiento de la paciente y la capacidad resolutiva de la unidad hospitalaria que resulten más convenientes”.

La aplicación se creo para el apoyo de adjuntar foto en la referencia o contrareferencia ya generada.

### Guía de usuario
---

[Manual de Usuario de la Aplicación](https://github.com/Luisvl13/APP-SGiS/blob/master/Manual-Usuario-APP.pdf)

### Guía de instalación
---
#### Requisitos
##### Software
Para poder instalar y utilizar esta APP, deberá asegurarse de que su servidor cumpla con los siguientes requisitos:
* [NODE](https://nodejs.org/es/) es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.
* [Yarn](https://yarnpkg.com/en/) es un administrador de dependencias y fue creado por miembros de Facebook y Google.
* ***Opcional*** [NPM](https://www.npmjs.com/) es un gestor de paquetes, gracias a él podremos tener cualquier librería disponible con solo una línea de código, npm nos ayudará a administrar nuestros módulos, distribuir paquetes y agregar dependencias de una manera sencilla.

#### Instalación
Guia de Instalación Oficial de React-Native [Aquí](https://facebook.github.io/react-native/docs/getting-started.html)

El resto del proceso es sencillo.
1. Clonar el repositorio con: `git clone https://github.com/Luisvl13/APP-SGiS.git`
2. Instalar dependencias: `yarn install` o `npm install`
3. Enlace bibliotecas nativas: `react-native link`
3. Para el enlace con la API se debe confirmar que el archivo `\services\api.js` tenga la cadena de conexión:
       
       export const URL = 'http://localhost:8000/api/v1';
       

**Dependencias**

Todas la dependencias y sus versiones usadas, están en el archivo [package.json](https://github.com/Luisvl13/APP-SGiS/blob/master/package.json):

#### Desarrollo

Run dev android:

```
react-native run-android
```
#### Producción
Si desea firmar la APK(en Android) para producción puede guiarse de la documentación oficial [Aquí](https://facebook.github.io/react-native/docs/signed-apk-android.html)

### Cómo contribuir
---
Si deseas contribuir con este proyecto, por favor lee las siguientes guías que establece el [BID](https://www.iadb.org/es "BID"):

* [Guía para Publicar Herramientas Digitales](https://el-bid.github.io/guia-de-publicacion/ "Guía para Publicar") 
* [Guía para la Contribución de Código](https://github.com/EL-BID/Plantilla-de-repositorio/blob/master/CONTRIBUTING.md "Guía de Contribución de Código")

### Código de conducta 
---
Puedes ver el código de conducta para este proyecto en el siguiente archivo [CODEOFCONDUCT.md](https://github.com/Luisvl13/APP-SGiS/blob/master/CODEOFCONDUCT.md).

### Autor/es
---
* **[Luis Alberto Valdez Lescieur](https://github.com/Luisvl13  "Github")** - [Bitbucket](https://bitbucket.org/luisvl13 "Bitbucket") - [Twitter](https://twitter.com/LuisVLescieur)
* **[Ramiro Gabriel Alférez Chavez](mailto:ramiro.alferez@gmail.com "Correo electrónico")**

### Información adicional
---
Para usar la aplicacón y poder realizar las peticiones HTTP REST desde esta, debe tener configurado el siguiente proyecto:
* **[API SGiS](https://github.com/Luisvl13/API-SGiS "API del Sistema de Gestión de Incidencias en Salud SGiS")**

### Licencia 
---
Los detalles de licencia para este código fuente se encuentran en el archivo  [LICENSE.md](https://github.com/Luisvl13/APP-SGiS/blob/master/LICENSE.md)

## Limitación de responsabilidades

El BID no será responsable, bajo circunstancia alguna, de daño ni indemnización, moral o patrimonial; directo o indirecto; accesorio o especial; o por vía de consecuencia, previsto o imprevisto, que pudiese surgir:

i. Bajo cualquier teoría de responsabilidad, ya sea por contrato, infracción de derechos de propiedad intelectual, negligencia o bajo cualquier otra teoría; y/o

ii. A raíz del uso de la Herramienta Digital, incluyendo, pero sin limitación de potenciales defectos en la Herramienta Digital, o la pérdida o inexactitud de los datos de cualquier tipo. Lo anterior incluye los gastos o daños asociados a fallas de comunicación y/o fallas de funcionamiento de computadoras, vinculados con la utilización de la Herramienta Digital.