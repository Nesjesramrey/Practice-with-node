let suma = 0;
let suma2 = 0;

console.time('Tiempo bucle');
for (let i = 0; i < 1000; i++) {
    suma++;
}
console.timeEnd('Tiempo bucle')

console.time('Tiempo bucle 2');
for (let j = 0; j < 1000; j++) {
    suma2 = suma2 + j;
}
console.timeEnd('Tiempo bucle 2')

console.time('bucle async')
console.log('Empieza el proceso asincrono')
asincrona()
    .then(() => console.timeEnd('bucle async'))

function asincrona() {
    return new Promise( resolve => {
        setTimeout( () => {
            console.log('Terimina el proceso asíncrono')
            resolve()
        }, 0)
    })
}