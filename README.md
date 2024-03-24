# devops-caso: Configuración de proyecto en Github y Pipeline usando Github Actions

MANUAL DE INSTRUCCIONES

# Práctica 1: Configuración de Proyecto en Github

Objetivo: Crear un nuevo repositorio en Github y configurarlo para permitir el trabajo colaborativo.

Pasos realizados:

1. Creación de un nuevo repositorio en Github.
2. Adición del código existente en este enlace a la rama main.
3. Configuración de Code owners mediante el archivo CODEOWNERS.
4. Creación de una plantilla para Pull Requests.
5. Configuración de la protección de la rama main para:
- Requerir una PR antes de fusionar.
- Requerir la aprobación de al menos un code owner.
- Requerir que todos los checks pasen antes de fusionar.
- No permitir force push.
6. Creación de una feature branch (feature/practice1) a partir de main y realización de modificaciones.
7. Creación de una PR para fusionar los cambios en main.

# Practica 2: Integración Continua con Github Actions.

Objetivo: Utilizar Github Actions para automatizar pruebas y despliegues.

Pasos realizados:

1. Uso del repositorio creado en la Práctica 1.
2. Creación de una feature branch (feature/practice2) a partir de main.
3. Configuración de un workflow de Github Actions que:
- Se ejecuta en Ubuntu.
- Se dispara tanto en Pull Requests a main como en pushes a esta rama.
- Realiza pruebas usando Node.js 20.
- Ejecuta los comandos npm ci y npm test.
- Utiliza caché para los node_modules.
4. Adición de un job adicional para realizar el despliegue que:
- Ejecuta los comandos npm ci y npm run deploy.
- Se ejecuta en Windows Server.
- Se dispara después de la finalización del primer job, preferiblemente solo en push a la rama main.

Para probar y verificar los workflows y la configuración del repositorio, se recomienda utilizar herramientas como Postman para realizar solicitudes a la API y observar los resultados de las acciones y protecciones configuradas.
