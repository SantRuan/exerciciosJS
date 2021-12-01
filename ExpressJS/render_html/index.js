const express = require('express')

const app = express() // Aqui a gente inicializa o express
const port = 3000 // variavel ambiente

//chamando o core modulo do node path

const path = require('path')

const basePath  = path.join(__dirname, 'templates')

app.get('/',(req, res) =>{
    res.send('Ola Mundo')
}) //0 método get é uma função para quando o usuário queira visualizar a página o 


app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})