const x= 10

try {
    // Como não é permitido alterar valor de constante, isso gerará um erro que o catch irá coletar
    x=2
} catch(err){
    console.log(`Erro: ${err}`)
}