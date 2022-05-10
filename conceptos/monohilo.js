console.log('Hola mundo')

let i = 0;

//la funcion setInterval nos pide dos parametros, una funcion y un tiempo de ejecucion
setInterval(function() {
    console.log(i);
    i++;
},1000)

//* como se vera en terminal es que la ejecucion es asincrona ya que el siguiente console.log se ejecuta antes de que se ejecute la anterior
console.log('segunda instruccion');