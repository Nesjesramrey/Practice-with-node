// Errores (try / catch)
// El Try/catch nos sirve para saber si hay un error o no, y poder modificar el output del error.

try {
    seRompe()
} catch (error) {
    console.error('Vaya, algo se ha roto...')
    console.error(error.message)
}

//La App se a crashed cuando hemos intentado con una función Async.

function seRompeAsync() {
    setTimeout(() => 3 + z)
}

try {
    seRompeAsync()
} catch (error) {
    console.error('Vaya, algo se ha roto...')
    console.error(error.message)
}

//Para que esto no pase, tenemos que hacer el Try/catch adentro de función.

function seRompeAsync(cb) {
    setTimeout(() => {
        try {
            return 3 + z
        } catch (error) {
            cb(error);
        }
    })
}

try {
    seRompeAsync((error) => console.error(error.message))
} catch (error) {
    console.error('Vaya, algo se ha roto...')
    console.error(error.message)
}

//**clase  */

function otraFuncion() {
    serompe();
}

function serompe() {
   return 3 + z;
}

try {
   otraFuncion();
} catch(err) {
   console.error('error en el llamado');
   console.error(err.message);
   console.error(err);
}

console.log('despues de romper');