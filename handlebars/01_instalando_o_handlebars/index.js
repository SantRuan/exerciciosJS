const express = require('express')
const exphbs =  require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine()) // Invocar o pacote engine é obrigatório para o funcionamento do pacote
app.set('view engine','handlebars')

app.get(('/'), (req,res)=>{
   res.render('home', {layout : false}) // Como nao temos layout ainda, deve-se definir-lo como falso
})

app.listen('3000',()=>{
    console.log('App rodando na porta 3000')
   
})
