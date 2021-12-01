const express = require('express')

const app = express() // Aqui a gente inicializa o express
const port = 3000 // variavel ambiente

//chamando o core modulo do node path

const path = require('path')

const basePath  = path.join(__dirname, 'templates') // acessa a pasta em que o html se encontra, no caso a pasta templates

app.get('/',(req, res) =>{
    res.sendFile(`${basePath}/index.html`) // Aqui  a resposta do usuário leverá-lo à index.html
}) 
app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})