 const path = require('path')

 const customPath = '/relatorio/ruan/relatorio1.pdf'


 console.log(path.dirname(customPath)) // Nos da o nome do diretório
 console.log(path.basename(customPath)) // nome do arquivo
 console.log(path.extname(customPath))  // nome da extensao do arquivo

    //path absoluto
console.log(path.resolve('texto.txt'))

 // Formador de path

 const mildFolder = 'relatorios'
 const fileName = 'ruan.txt'

 const finalPath = path.join('/','arquivos',mildFolder,fileName)

 console.log(finalPath)