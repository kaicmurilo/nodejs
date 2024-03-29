const express = require('express')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.json())

const port = 3000

app.get('/', (req, res) => {
    res
        .status(200)
        .send({ mensagem: 'Boas Vindas' })
})

app.listen(port, () => console.log(`servidor rodando em porta ${port}`))

module.exports = app