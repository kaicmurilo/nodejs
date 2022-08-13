const http = require("http")
const port = 3000;


const rotas = {
    '/': 'Node',
    '/livros': 'Pagina de Livros',
    '/autores': 'Listagem de autores',
    '/editora' : 'Editoras',
    '/sobre': 'Info sobre projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})
