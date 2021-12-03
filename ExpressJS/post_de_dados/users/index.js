const express = require('express')
const router = express.Router()

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



router.use(checkAuth) //aqui usamos o middleware pelo router.use, agora toda requisição será que for iniciada utilizarar o middleware 


router.get('/users/add',(req,res)=>{  // É a porta que cria um formulário para o front
    res.sendFile(`${basePath}/useForm.html`)

})


router.post('/users/save',(req,res)=>{
console.log(req.body)

// extraindo os dados do body em variáveis

const name = req.body.name
const age = req.body.age
console.log(name,age)
})

router.get('/users/:id',(req, res) =>{
    const id = req.params.id  //aqui eu consigo acessar o id desse cara

    // Leitura da tabela users e resgatar  um usuário do banco de dados

    console.log(`Estamos buscando pelo usuário ${id}`)


    res.sendFile(`${basePath}/users.html`) // Aqui  a resposta do usuário leverá-lo à index.html
}) 

router.get('/',(req, res) =>{
    res.sendFile(`${basePath}/index.html`) // Aqui  a resposta do usuário leverá-lo à index.html
}) 

// Agora precisamos exportar

module.exports = router