const pegaArquivo = require('../index');
const caminho = 'D:/DEV/node.js/bibliotecas/teste/arquivos/texto1.md'
const caminho2 = 'D:/DEV/node.js/bibliotecas/teste/arquivos/texto1_semLinks.md'
const caminho3 = 'D:/DEV/node.js/bibliotecas/teste/arquivos'
const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    })
    it('deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo(caminho)
        expect(resultado).toEqual(arrayResult)
    })
    it('deve retonar mensagem "não há links"', async () => {
        const resultado = await pegaArquivo(caminho2)
        expect(resultado).toBe('não há links')
    })
    it('deve lançar um erro na falta de arquivo', async () => {
        await expect(pegaArquivo(caminho3)).rejects.toThrow(/não há arquivo no caminho/)
    })
    it('deve resolver a função com sucesso', async () => {
        await expect(pegaArquivo(caminho)).resolves.toEqual(arrayResult)
      })
})

// test('deve ser uma função', () => {
//     //usa o typeof para verificar se o retorno do pegaArquivo é uma função.
//     expect(typeof pegaArquivo).toEqual('function');
// });



