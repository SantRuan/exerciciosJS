const http = require('http')
const url = require('url')
const port = 3000

// Um usuário que cair na portar 3000 entrará no servidor


//Receberemos um testo como resposta sempre que acercamos a porta na web
const server = http.createServer((req,res)=>{

    //Quando o usuário acessar  chamamos o módulo da url para parsear a url que vem pela requisição
    const urlInfo = require('url').parse(req.url, true) 
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')

    if(!name){
        res.end('<h1>Preencha seu nome:</h1> <form method="GET"> <input type="text" name="name"/><input type="submit"  value="Enviar"></form>')
    } else{
        res.end(`<h1>Seja Bem Vindo ${name} </h1>`)
    }    

})

server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})