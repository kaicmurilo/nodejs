import autores from "../models/Autor.js";

class AutorController {

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })
    }

    static listarAutorID = (req, res) => {
        const id = req.params.id
        autores.findById(id, (err, autores) => {
            if (!err) {
                res.status(200).json(autores)
            } else {
                res.status(400).send({ message: `${err.message} - falha ao procurar autor, id nao encontrado.` })
            }
        })
    }


    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar autor.` })
            } else {
                res.status(201).send({ message: "autor cadastrado com sucesso." })
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id
        autores.findByIdAndUpdate(id, {
            $set: req.body
        }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Autor atualizado com sucesso' })
            } else {
                res.status(500).send({ message: `${err.message} - falha ao atualizar autor.` })
            }
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id
        autores.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao deletar autor. ` })
            } else {
                res.status(201).send({ message: "autor deletado com sucesso." })
            }
        })
    }


}

export default AutorController