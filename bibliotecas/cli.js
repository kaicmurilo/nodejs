const chalk = require(`chalk`);
const pegaArquivo = require(`./order5`);
const validaUrls = require('./http-validacao');
const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    if (caminhoDeArquivo[3] === 'validar') {
        console.log(chalk.yellow(`links validados`), await validaUrls(resultado))
    } else {
        console.log(chalk.yellow(`Lista de links`), resultado)
    }


}


processaTexto(caminho)