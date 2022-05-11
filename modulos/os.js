const os = require('os')
console.log(os.networkInterfaces())


// Architecture
console.log('Architecture:')
console.log(os.arch())
console.log('')

// Platform
console.log('Platform:')
console.log(os.platform())
console.log('')

// cpus
console.log('cpus')
console.log(os.cpus().length)
console.log('')

// Errores y señales del sistema
console.log('Erros and signals of the system')
console.log(os.constants)
console.log('')





// Function to convert from bytes to kbytes, mbytes and gbytes
const SIZE = 1024

kb = bytes => { return bytes / SIZE }
mb = bytes => { return kb(bytes) / SIZE }
gb = bytes => { return mb(bytes) / SIZE }

// Total Ram Memory
console.log('Total Ram Memory:')
console.log(`${os.totalmem()} bytes`)
console.log(`${kb(os.totalmem)} kb`)
console.log(`${mb(os.totalmem)} mb`)
console.log(`${gb(os.totalmem)} gb`)
console.log('')

// Free memory we have in bytes units
console.log('Free memory we have in kbytes units')
console.log(`free Ram memory: ${os.freemem()} bytes`)
console.log(`free Ram memory: ${kb(os.freemem())} kb`)
console.log(`free Ram memory: ${mb(os.freemem())} mb`)
console.log(`free Ram memory: ${gb(os.freemem())} mb`)
console.log('')


// Directory for the user root
console.log('Directory for the user root')
console.log(os.homedir())
console.log('')

// Directory for temporal files
console.log('Directory for temporal files')
console.log(os.tmpdir())
console.log('')

// Hostname of a server
console.log('Hostname of any server')
console.log(os.hostname())
console.log('')

// Actived Network interfaces right now
console.log('Network Interfaces right now')
console.log(os.networkInterfaces())
console.log('')

const os = require('os');

console.log(os.hostname());//  Voy a saber el hostname de la máquina
console.log(os.networkInterfaces());// Puedo acceder a mi interfaz de red activas en mi máquina, puedo saber  IPVX
console.log(os.tmpdir())//-->Me muestra los directorios temporales, temproales una imagen que voy a procesar
console.log(os.homedir()) // Me permite saber cual es el directorio raíz
console.log(os.arch()); //----> Me devuelve la arquitecura de mi OS
console.log(os.platform());//---> Me dice en qué plataforma estoy
console.log(os.cpus());//--->podemos acceder a la información de las cpus de mi pc.
console.log(os.constants);//--->  Me muestran todos los errores de sistema.


//Acceder a espacios de memoria es muy útil para saber si tengo a memoria suficiente para realizar esta operación.
console.log(os.freemem());// ---> Me dice en bytes la memoria libre que tenemos
// console.log(kb(os.freemem()));
// console.log(mb(os.freemem()));
// console.log(gb(os.freemem()));
console.log(gb(os.totalmem())); // ---> Me muestra la memoria disponible del pc.

const SIZE2 = 1024;
function kb(bytes) { return bytes / SIZE2 }
function mb(bytes) { return kb(bytes) / SIZE2 }
function gb(bytes) { return mb(bytes) / SIZE2 }