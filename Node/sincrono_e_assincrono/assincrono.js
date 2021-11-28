const fs = require('fs')
console.log('Inicio')

// Aqui o arquivo demorará 5 segundos para ser criado e as próximas linhas de comando serão executadas enquanto essa
// está sendo aguardada
fs.writeFile('ArquivoAssincrono.txt','Arquivo criado com sucesso!', function(err){
    setTimeout(function(){
        console.log('Arquivo Criado')
 },5000)
})

console.log('fim')