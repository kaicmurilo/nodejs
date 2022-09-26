const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.post('/pessoas', PessoaController.criaPessoa)
router.delete('/pessoas/:id', PessoaController.apagaPessoa)


module.exports = router