const Transform = stream.Transform;

// lo que se hace aquí es crear una constante que va a contener la clase Transform, pero… que es lo que hace Transform?.
// pues básicamente lo que hace es transformar la secuencia de entrada para que la secuencia de salida sea una diferente. EJ: ( no falta el weon que se lo olvida que las iniciales de los nombres van en Mayúsculas, sin embargo tu quieres asegurarte que los nombres en tu pagina web, la Inicial aparezca en Mayúscula. entonces es ahí donde ocupas el Transform para que la secuencia de entrada la puedas cambiar y produzca una secuencia de salida diferente.)

// Bien que aquí prácticamente estas diciendo que sera en esta función será donde ejecutaras la transformación. al colocar Tranform.call(this) estas iniciando el llamado a la tranformacion de tu secuencia datos. y al colocar this estas diciendo que se hará dentro del método Mayus

function Mayus(){
    Transform.call(this);
}

// dicho esto pasemos a lo siguiente…

// bien acá por lo que busque y encontré.(porque el que busca encuentra) lo que hace util.inherits(Mayus,Transform); es crear una instancia de la clase Transform y estableciéndolo como prototipo a la función Mayus, tambien adjuntando el EventEmmitter. es decir el Transform.Call(this).
// de modo que cada vez que se crea una instancia de la funcion Mayus se ejecutara el fichero.

// en pocas palabras para el que sepa PHP o JAVA . es como llamar al metodo super()

util.inherits(Mayus,Transform);

// CABE RECALCAR QUE NODE NO RECOMIENDA USAR ESTA FUNCIÓN

// bueno bueno que tenemos acá.
// pero miren justo Mayus.prototype._transform fue posible gracias a la función de util.inherits(Mayus,Transform) que establecía la clase Transform como prototipo de la función Mayus.

// PERO QUE SIGNIFICA ._transform ?
// bueno básicamente significa que la transformación que tu harás podrá ser personalizada, así es(como mi redacción). es decir que tu veras que cambio o que transformación le harás a la secuencia de datos que estas recibiendo como entrada.

Mayus.prototype._transform=function(chunk,codifi,callback){
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    callback();
}

// pasemos a lo siguiente…

// bueno y por ultimo que sucede al final. pues simple
// creas una instancia de la funcion Mayus

// y bueno por ultimo lo que hace pipe() es limitar el almacenamiento en el buffer para que no haya una sobresaturacion a la hora se pasar la secuencia de los datos
var mayus = new Mayus();

readablesStream.pipe(mayus).pipe(process.stdout);

//** Otra forma */

const { Transform } = require("stream");
const { createReadStream } = require("fs");

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

const readableStream = createReadStream(__dirname + "/example.txt");

readableStream.pipe(upperCaseTransform).pipe(process.stdout);