const opts = {
    base:{
        demand:true,//requerido
        alias:'b'//alias -b
    },
    limite:{
        alias:'l',//alias -l
        default:10//valor por defecto
    }
}
const argv = require('yargs')
.command('listar','Imprime en consola la tabla de multiplicar',opts)
.command('crear','Crea un archivo con la multiplicación',opts)
.argv // command agrega los comandos que usaré al iniciar la aplicación, primer parámetro es el nombre del comando, segundo parámetro es un comentario, 3er parámetro es un objeto, en este caso el objeto base debe ser requerido y un alias, entonces debe iniciarse con node app.js listar -b=5 (o --base=5)

module.exports={
    argv
}