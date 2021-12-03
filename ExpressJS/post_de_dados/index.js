const express = require('express')

const app = express() // Aqui a gente inicializa o express
const port = 3000 // variavel ambiente

//chamando o core modulo do node path

const users = require('./users')

const path = require('path')

// Para ler o body

app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json()) // toda a requisição do body será transformada em JSON

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})


