const chalk = require('chalk');
// doc chalk https://github.com/chalk/chalk#readme
const fs = require('fs');
const { endianness } = require('os');
// doc fs https://nodejs.org/api/fs.html

function trataerr(err) {
    throw new Error(chalk.red(err));
}


// solicitacao sincrona
function pegaArquivoSincrona(caminhoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoArquivo, encoding, (err, texto) => {
        if (err)
            trataerr(err)

        console.log(chalk.green(texto));
    })
}

// solicitacao Assincrona
function pegaArquivoAssync(caminhoArquivo) {
    const encoding = 'utf-8';
    fs.promises
        .readFile(caminhoArquivo, encoding)
        .then((texto) => console.log(chalk.blue(texto)))
        .catch((err) => trataerr(err))
}


pegaArquivoSincrona('./arquivos/texto1.md');
pegaArquivoAssync('./arquivos/texto1.md');


// Promessas podem ser concluídas de duas formas: fulfilled(realizada, completa) ou rejected(rejeitada), o que equivale a duas situações possíveis, ou a promessa se concretizou(retornou os dados ou executou o código que deveria) ou não.
// Promessas que não estão fulfilled nem rejected estão pending(pendentes).Ou seja, ainda não é possível saber o resultado final porque o processamento ainda não foi concluído.
// Após a finalização do processamento, a promessa passa para o estado de settled(concluída), independente do resultado.
// Uma vez que a promessa está settled seu resultado não se altera mais.Ou seja, uma promessa que se concluiu como rejected não muda mais para o estado de fulfilled e vice - versa.