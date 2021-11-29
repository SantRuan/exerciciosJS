const http = require('http')
const url = require('url')
const fs = require('fs')
const port = 3000

// Um usuário que cair na portar 3000 entrará no servidor


//Receberemos um testo como resposta sempre que acercamos a porta na web
const server = http.createServer((req,res)=>{
  
    fs.readFile('mensagem.html',function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })

})

server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})