import express from "express";

const app = express();

const livros = [
    {
        id: 1, "titulo": "Senhor dos Aneis"
    },
    { id: 2, "titulo": "Hobiit" }
]

app.get('/', (req, res) => {
    res.status(200).send('Node');
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

export default app