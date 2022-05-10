function hola(nombre, miCallback) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            console.log('Hola ' + nombre);
            resolve(nombre)
        },1500)
    });
    
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log('Bla bla bla bla ...');
        callbackHablar();
    },1000)
}

function adios(nombre, otroCallback){
    setTimeout(function() {
        console.log('Adios ', nombre);
        otroCallback();
    },1000);
}

console.log('Iniciado el proceso')
hola('Carlos')
    .then((nombre) => {
        console.log('Terminado el proceso')
    })