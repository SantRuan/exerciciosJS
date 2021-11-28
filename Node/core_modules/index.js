const path = require('path')


// O core module path do Node, analisa a extensão do arquivo a ser utilizado e imprime na tela

const extension = path.extname("arquivo.php")
console.log(extension)