const fs = require('fs')
const colors = require('colors')

let crearArchivo = (base,limite)=>{
    return new Promise((resolve,reject)=>{
        if(!Number(base)){
            reject('No es un número')
            return
        }

        let data =''

        for (let i =1; i<=limite; i++){
            data+=`${base} * ${i} = ${base * i}\n`
        }
        
        fs.writeFile(`tabla-${base}-al-${limite}.txt`,data,(err)=>{
            if (err) 
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
        })
    })
}

let listarTabla = (base,limite)=>{
    console.log('============================'.green)
    console.log(`Tabla de ${base}`.green)
    console.log('============================'.green)
    for(i = 1; i<=limite; i++){
        console.log(`${base} * ${i} = ${base * i}`)
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}