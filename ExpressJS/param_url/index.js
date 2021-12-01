const express = require('express')

const app = express() // Aqui a gente inicializa o express
const port = 3000 // variavel ambiente

//chamando o core modulo do node path

const path = require('path')

const basePath  = path.join(__dirname, 'templates') // acessa a pasta em que o html se encontra, no caso a pasta templates

const checkAuth= function(req,res,next){ // esta é a funcao middleware que checa se o usuario está logado ou não

     req.authStatus = true

    if(req.authStatus){
        console.log('Está logado, pode continuar')
        next() // caso o usuário esteja logado ele irá para próxima etapa que seria o sendFile
    } else{
        console.log('Não está logado, faça o login para continuar')
        next()
    }

}

app.use(checkAuth) //aqui usamos o middleware pelo app.use, agora toda requisição será que for iniciada utilizarar o middleware 


app.get('/users/:id',(req, res) =>{
    const id = req.params.id  //aqui eu consigo acessar o id desse cara

    // Leitura da tabela users e resgatar  um usuário do banco de dados

    console.log(`Estamos buscando pelo usuário ${id}`)


    res.sendFile(`${basePath}/users.html`) // Aqui  a resposta do usuário leverá-lo à index.html
}) 

app.get('/',(req, res) =>{
    res.sendFile(`${basePath}/index.html`) // Aqui  a resposta do usuário leverá-lo à index.html
}) 
app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})