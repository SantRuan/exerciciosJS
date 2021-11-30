const fs = require('fs')


fs.stat('novoarquivo.txt',(err,stats) =>{ // Possibilidade de evidenciar um erro ou ver os stats do arquivo nessa função

    if(err){
        console.log(err)
        return
    }
    console.log('tudo okay')
    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.isSymbolicLink())
    console.log(stats.size)

})