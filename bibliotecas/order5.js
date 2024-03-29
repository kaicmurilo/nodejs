const chalk = require('chalk');
const fs = require('fs');


function ExtraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arryResultados = [];
    let temp;
    console.log(temp = regex.exec(texto))
    while ((temp = regex.exec(texto)) !== null) {
        arryResultados.push({ [temp[1]]: temp[2] })
    }
    return arryResultados.length === 0 ? `Nao ha links` : arryResultados;
}

function trataerr(err) {
    throw new Error(chalk.red(err));
}

async function pegaArquivo(caminhoDoArquiv) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquiv, encoding)
       return ExtraiLinks(texto)
    } catch (err) {
        trataerr(err)
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }

}

module.exports = pegaArquivo;