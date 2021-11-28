const http = require('http')
const port = 3000

// Um usuário que cair na portar 3000 entrará no servidor


//Receberemos um testo como resposta sempre que acercamos a porta na web
const server = http.createServer((req,res)=>{

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Olá esse é meu primeiro texto html</h1>')
})

server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})