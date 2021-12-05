const express = require('express')
const exphbs =  require('express-handlebars')

const app = express()

const hbs = exphbs.create({ // Aqui configuramos o diretório dos partials
    partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine) // Invocar o pacote engine é obrigatório para o funcionamento do pacote
app.set('view engine','handlebars')

app.use(express.static('public')) // Para poder utilizar CSS, devemos utilizar o método static
                                  // para definir a pasta onde ficará os arquivos estáticos


app.get('/dashboard', (req,res) =>{


    const items =['item a','item b','item c', 'item d']

    res.render('dashboard',{items})
})


app.get('/post',(req,res)=>{
    const post = {
        title: 'Aprender Node js',
        category: 'JavaScript',
        body: 'Vai te ajudar muito'

    }
    res.render('blogpost',{post})
})


app.get('/blog',(req,res)=>{
    const posts = [
        {
        title: 'Aprender Node js',
        category: 'JavaScript',
        body: 'Vai te ajudar muito'

    },
    {
        title: 'Aprender PHP js',
        category: 'PHP',
        body: 'Vai te ajudar pra caramba'

    },
    {
        title: 'Aprender C++',
        category: 'C++',
        body: 'Vai te ajudar demais'

    },
]
    res.render('blog',{posts})
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
