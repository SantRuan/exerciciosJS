const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3000 // Inicializando a porta
app.use(cors())
app.use(bodyParser.urlencoded({extended: false})) 
app.use(bodyParser.json())


let books = []

// Criando um endpoint get, para quando o usuario acessar, uma informação irá aparecer na tela

app.post('/book', (req,res)=>{
    const book = req.body
    console.log(book)
    res.send('O livro foi adicionado ao banco de dados')
})


app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/book/:isbn',(res,req)=>{
    const isbn = req.param.isbn

    for(let book in books){
        if (book.isbn === isbn){
            res.json(book)
            return;
        }

    }
    res.status(404).send('Book not Found')
})

app.delete('/book/:isbn', (req,res)=>{

        const isbn = req.params.isbn
        const newBook = req.body

})


app.get('/', (req,res)=>{
    res.send('Ola mundo')
})






// Criando a API






app.listen(port,()=> console.log(`Voce acessou a porta ${port}`))