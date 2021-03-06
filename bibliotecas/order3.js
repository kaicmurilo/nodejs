const chalk = require('chalk');
const fs = require('fs');

function trataerr(err) {
    throw new Error(chalk.red(err));
}

async function pegaArquivo(caminhoDoArquiv) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquiv, encoding)
        console.log(chalk.green(texto))
    } catch (err) {
        trataerr(err)
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }

}


pegaArquivo('./arquivos/texto1.md')