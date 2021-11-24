const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3000

// Criando um endpoint get, para quando o usuario acessar, uma informação irá aparecer na tela

app.get('/', (req,res)=>{
    res.send('Ola mundo')
})

// Inicializando a porta



// Criando a API

let book = []

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/book', (req,res)=>{
    const book = req.body
    console.log(book)
    res.send('O livro foi adicionado ao banco de dados')
})

app.listen(port,()=> console.log(`Voce acessou a porta ${port}`))