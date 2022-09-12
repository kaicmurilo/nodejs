import mariadb from "mariadb"

const pool = mariadb.createPool({
    host: ip,
    user: user,
    password: pass,
    database: db,
    connectionLimit: 5
});

pool.getConnection().then(conn => {
    conn.query("SELECT p.codigo,p.nome,p.cpf_cnpj as cpfOrCnpj,p.categoria,p.z_data_desligamento as dataDesligamento,p.z_data_admissao as dataAdmissao,p.ramo as ramo,p.z_posicao,p.z_intervalo,p.z_equipe, zho.descricao FROM cad_pessoa p left join z_home_office zho on zho.id = p.z_home_office")
        .then((rows) => {
            console.log('----> conn.query')
            for (var i = 0; i < rows.length; i++) {
                // rows[i].nome = removeAcento(rows[i].nome)
                // rows[i].nome = formatanome(rows[i].nome)
                var pessoaAtiva = new Object();
                pessoaAtiva.categoria = rows[i].categoria;
                // if (rows[i].CATEGORIANEW == '1' || rows[i].CATEGORIANEW == '13' || rows[i].CATEGORIANEW == '15' || rows[i].CATEGORIANEW == '47' || rows[i].CATEGORIANEW == '48') {
                if (pessoaAtiva.categoria == '1' || pessoaAtiva.categoria == '13' || pessoaAtiva.categoria == '15' || pessoaAtiva.categoria == '47' || pessoaAtiva.categoria == '48') {

                    pessoaAtiva.codigoCPJ = rows[i].codigo
                    pessoaAtiva.title = rows[i].nome;
                    pessoaAtiva.funcao = rows[i].ramo;
                    pessoaAtiva.unidade = rows[i].z_posicao;
                    pessoaAtiva.periodo = rows[i].z_intervalo;
                    pessoaAtiva.setor = rows[i].z_equipe;
                    pessoaAtiva.tipoTrabalho = rows[i].descricao
                    pessoaAtiva.active = true;
                    pessoaAtiva.CpfOrCnpj = rows[i].cpfOrCnpj
                    pessoaAtiva.dataDesligamento = rows[i].dataDesligamento
                    pessoaAtiva.dataAdmissao = rows[i].dataAdmissao

                    console.log(pessoaAtiva)
                } else if (pessoaAtiva.categoria == '22' || pessoaAtiva.categoria == '21') {
                    pessoaAtiva.title = rows[i].nome;
                    pessoaAtiva.CpfOrCnpj = rows[i].cpfOrCnpj

                    // var totalPromise = desativaMongo2(pessoaAtiva)
                    // totalPromise.then(total => { }).catch(err => {
                    //     console.log('ERROR: ' + err);
                    // })
                }
            }
        })
        .catch(err => {
            console.log('ERROR: ' + err);
            // res.status(400).send('Error');
        })

}).catch(err => {
    console.log('ERROR: ' + err);

});
// }

