const express = require('express')

const app = express()

app.get('/', (req, res) => {
    const valor = req.query.dadoExterno
    //inserir break point na linha 6
    const valorDoResponse = 'Você me mandou tal '+(valor);
    res.send(valorDoResponse)
})

const port = 3000

app.listen(port, () => {
    console.log(
        'Servidor subiu com sucesso!  http://localhost:' + (port))
})

//teste http://localhost:3000/?dadoExterno=Eu%20Quero%20Hamburguer

