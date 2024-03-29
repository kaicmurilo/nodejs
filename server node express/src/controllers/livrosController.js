import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (req, res) => {
        livros.find()
            .populate('autor')
            .exec((err, livros) => {
                res.status(200).json(livros)
            })
    }

    static listarLivroID = (req, res) => {
        const id = req.params.id
        livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, livros) => {
                if (!err) {
                    res.status(200).json(livros)
                } else {
                    res.status(400).send({ message: `${err.message} - falha ao procurar livro, id nao encontrado.` })
                }
            })
    }


    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar livro.` })
            } else {
                res.status(201).send({ message: "livro cadastrado com sucesso." })
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id
        livros.findByIdAndUpdate(id, {
            $set: req.body
        }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Livro atualizado com sucesso' })
            } else {
                res.status(500).send({ message: `${err.message} - falha ao atualizar livro.` })
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id
        livros.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao deletar livro. ` })
            } else {
                res.status(201).send({ message: "livro deletado com sucesso." })
            }
        })
    }

    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora

        livros.find({ 'editora': editora }, {}, (err, livros) => {
            if (!err) {
                res.status(200).send(livros);
            } else {
                res.status(400).send({
                    message: `${err.message} - falha ao listar livros por editora.`
                })
            }

        })
    }

}

export default LivroController