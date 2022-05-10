//configurar las variables de entorno

let nombre = process.env.NOMBRE || "Sin nombre";  
//*esto nos sirve ya que por ejemplo no queremos guardar informacion personal al declarar la variable
//env sirve para definir que lo busco en la variable de entorno || u operador O nos srive para enviar la alternativa en caso de que 
//no haya nada en el env

//*buena practica con variables de fuera de preferencia en mayusculas


console.log('Hola ' + nombre); //al mandar asi la terminal imprimira undefined
//en terminal node nombre o ruta del archivo si es subcarpeta
//para el NOMBRE es: NOMBRE = Nestor node conceptos/entorno.js

//para decirle a node desde fue se pondria asi en la terminal NOMBRE=Carlos node conceptos/entorno.js

//* para variables que no abras en linux primero defines la variable $env:NOMBRE="Carlos" y despues haces 
//*la llamada el archivo de ejecucion

// Desarrollo
// Nodemon. Demons en linux, puedes tener procesos que ves ejecutandose
// nodemon + archivo al que quiero acceder detecta cambios, y ejecuta automaticamente el código.
//* es como un liveserver de vscode pero para la terminal y las actualizaciones en terminal, asi no tengo que estar corriendo en terminal

// sudo npm install -g nodemon  //puede ir sin sudo
// nodemom nombre del archivo

// Nodemon
// Producción

// sudo npm install -g pm2
// pm2 start nombre del archivo o ruta
// pm2 status; informacion
// pm2 log arrojaria los console.log


// PM2 Es un demonio administrador de procesos que me puede ayudar a administrar y mantener mi aplicación 24/7.
//este es para produccion no para desarrollo donde es mejor nodemon

// Voy a poner monitorizar el código para saber si algo se rompe.
// Me permite ver dashboards de mi código, puedo ver que está corriendo.
// Puedo ver el rendimiento de mi cpu
// Con: pm2 stop + id —> me detiene el proceso que está en ejecución con ese ID.