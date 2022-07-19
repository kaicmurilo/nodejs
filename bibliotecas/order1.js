const chalk = require('chalk');
const fs = require('fs');
console.log('start');

const paragrafo = 'Texto retornado para uma função';


function texto(string) {
    console.log(chalk.blue.bgWhite.bold('Testando Lib...'));

    //encadear métodos para colorir texto, cor de fundo e texto em negrito
    console.log(chalk.blue.bgWhite.bold('Testando texto em negrito'));

    //receber múltiplos argumentos
    console.log(chalk.blue('Teste', 'de', 'NodeJS'));

    //métodos aninhados
    console.log(chalk.red('vermelho', chalk.underline.bgBlue('azul')));

    console.log(`
    CPU: ${chalk.red('90%')}
    RAM: ${chalk.green('40%')}
    DISK: ${chalk.yellow('70%')}
    `);
    return string;
}

console.log(chalk.green(texto(paragrafo)) + ' Função que ajuda a encontrar um retorno em caso de muito texto ou log!');

