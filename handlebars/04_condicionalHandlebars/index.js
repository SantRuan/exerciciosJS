const express = require('express')
const exphbs =  require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine()) // Invocar o pacote engine é obrigatório para o funcionamento do pacote
app.set('view engine','handlebars')


app.get('/dashboard', (req,res) =>{
    res.render('dashboard')
})

app.get(('/'), (req,res)=>{



    const auth = true

    const aprovado = false


    const user = { name: 'Ruan',
                    lastName:'Santiago'} //Criamos um objeto a ser passado para a view

    const palavra = 'Palavra disponível para ser colocada no front'

   res.render('home',{user: user, palavra, auth, aprovado})
})

app.listen('3000',()=>{
    console.log('App rodando na porta 3000')
   
})
