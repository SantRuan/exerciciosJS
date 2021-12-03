const express = require('express')

const app = express() // Aqui a gente inicializa o express
const port = 3000 // variavel ambiente

//chamando o core modulo do node path

const users = require('./users')

const path = require('path')

const basePath  = path.join(__dirname, 'templates') // acessa a pasta em que o html se encontra, no caso a pasta templates


// Para ler o body

app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json()) // toda a requisição do body será transformada em JSON

// arquivos estáticos

app.use(express.static('public'))



app.use('/users',users) // Isso aqui indica que a rota responsável pelos usuários será o users




app.get('/',(req, res) =>{
    res.sendFile(`${basePath}/index.html`) // Aqui  a resposta do usuário leverá-lo à index.html
}) 

app.use(function(req,res,next){
 res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})


