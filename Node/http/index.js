const http = require('http')
const port = 3000

// Um usuário que cair na portar 3000 entrará no servidor


//Receberemos um testo como resposta sempre que acercamos a porta na web
const server = http.createServer((req,res)=>{

    res.write('Oi HTTP')
    res.end()
})

server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})