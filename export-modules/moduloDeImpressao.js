
function trataerr(err) {
    throw new Error(err);
}

function ModuloDeImpressao(nomes) {
    codigo = 10;
    try {
        nomes.forEach(nome => {
            console.log(`${codigo}: ${nome}`);
        });
    } catch (err) {
        trataerr(err)
    } finally {
        console.log('operação concluída');
    }
}
module.exports = ModuloDeImpressao;

