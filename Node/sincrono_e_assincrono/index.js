const fs = require('fs')


// Codigo da forma síncrono
console.log('Inicio')

fs.writeFileSync('Arquivo.txt','oi')

console.log('fim') // Essa linha só será executada após a criação do arquivo.txt
