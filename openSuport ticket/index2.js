var mysql = require('mysql');
var pool = mysql.createPool('../sql/config.js');
pool.getConnection(function (err, connection) {
    if (err) throw err; // not connected!

    // Use the connection
    connection.query('SELECT something FROM sometable', function (error, results, fields) {
        // When done with the connection, release it.
        connection.release();

        // Handle error after the release.
        if (error) throw error;

        // Don't use the connection here, it has been returned to the pool.
    });
});

// var assunto = 'TESTE ULTIMO 2'
// var corpo = 'Colaborador ' + 'nome' + ' teve alteração de prédio realizada. De ' + 'res.unidade' + ' para ' + 'usuario.unidade';
// var sql = montaChamado(assunto, corpo, await recuperaUltimoTicket())
// await cadastraTicket(sql);

// var assunto = 'TESTE ULTIMO 3'
// var corpo = 'Colaborador ' + 'nome' + ' teve alteração de prédio realizada. De ' + 'res.unidade' + ' para ' + 'usuario.unidade';
// var sql = montaChamado(assunto, corpo, await recuperaUltimoTicket())
// await cadastraTicket(sql);


// var assunto = 'TESTE ULTIMO 4'
// var corpo = 'Colaborador ' + 'nome' + ' teve alteração de prédio realizada. De ' + 'res.unidade' + ' para ' + 'usuario.unidade';
// var sql = montaChamado(assunto, corpo, await recuperaUltimoTicket())
// await cadastraTicket(sql);
