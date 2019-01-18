const argv = require('./config/yargs').argv
const colors = require('colors')
const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar')

let comando = argv._[0] // en argv._ vienen los comandos que uno escribe, saco el primer comando (los demás comandos son los que se envían en command arriba)
console.log(comando)
switch(comando){
    case 'listar':
        listarTabla(argv.base,argv.limite)
    break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
        .then(archivo=>{
            console.log(`Archivo creado ${archivo.red}`.green)
        })
        .catch(err=>console.log(err))

    break;
    default:
        console.log('No reconocido')
}

//let base = 'as';

//console.log(process.argv)

let argv2 = process.argv
//let parametro = argv[2]
//let base = parametro.split('=')
