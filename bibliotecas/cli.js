const chalk = require(`chalk`);
const pegaArquivo = require(`./order5`);

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    console.log(chalk.yellow(`Lista de links`), resultado)
}


processaTexto(caminho)