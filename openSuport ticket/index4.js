var contadorChamados = [];
var nticket = 4;

contadorChamados.push(4);
console.log(contadorChamados)
contadorChamados.push(5)

function isCherries(contadorChamados) {
    return contadorChamados === nticket
}


if (contadorChamados.find(isCherries) == null) {
    console.log('false')
} else {
    console.log('true')
}