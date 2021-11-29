fs = require('fs')

const arqVelho = 'arquivo.txt'
const arqNovo = 'novo.txt'

fs.rename(arqVelho,arqNovo, function (err){
    if(err){
        console.log(err)
    }
    console.log(`O arquivo ${arqVelho}, foi renomeado para ${arqNovo}`)
})