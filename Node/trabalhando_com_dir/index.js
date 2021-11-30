const fs = require('fs')


if(!fs.existsSync('./minhaPasta')){
    console.log('não existe')
} 

fs.mkdirSync('minhaPasta')

if(fs.existsSync('./minhaPasta')){
    console.log('existe')
} 