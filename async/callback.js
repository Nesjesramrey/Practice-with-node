// function soyAsincrona() {
//     console.log('Hola, soy una funcion asincrona')
//     setTimeout(function() {
//         console.log('Estoy siendo asincrona')
//     },1000)
// }

// console.log('Iniciando proceso...')

// soyAsincrona();

// console.log('Terminando proceso...')

//** en asincronia recuerda siempre el ejemplo de los tacos */

function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola ' + nombre);
        miCallback()
    },1000)
}

function adios(nombre, otroCallback){
    setTimeout(function() {
        console.log('Adios ', nombre);
        otroCallback();
    },1000);
}

console.log('Iniciando proceso...')
hola('Carlos', function(){
    adios('Carlos', function(){
        console.log('Terminado proceso...')
    });  
});



//** en asincronia recuerda siempre el ejemplo de los tacos */