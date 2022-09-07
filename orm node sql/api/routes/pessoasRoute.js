const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessa)
router.post('/pessoas', PessoaController.criaPessoa)

module.exports = router