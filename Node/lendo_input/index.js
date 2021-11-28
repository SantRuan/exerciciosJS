const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})
readline.question("Qual a sua linguagem preferida",(languange)=>{
    console.log(`A minha linguagem preferida é ${languange}`)
    readline.close()
})
