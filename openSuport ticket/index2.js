import mysql from "mysql"

var pool = mysql.createConnection({
    host: '172.29.68.16',
    user: 'suporte',
    password: 'q37A1M9ijjKD1N*V',
    database: 'suporte'
});



var assunto = 'TESTE ULTIMO 2'
var corpo = 'Colaborador ' + 'nome' + ' teve alteração de prédio realizada. De ' + 'res.unidade' + ' para ' + 'usuario.unidade';
var sql = montaChamado(assunto, corpo, await recuperaUltimoTicket())
await cadastraTicket(sql);

var assunto = 'TESTE ULTIMO 3'
var corpo = 'Colaborador ' + 'nome' + ' teve alteração de prédio realizada. De ' + 'res.unidade' + ' para ' + 'usuario.unidade';
var sql = montaChamado(assunto, corpo, await recuperaUltimoTicket())
await cadastraTicket(sql);


var assunto = 'TESTE ULTIMO 4'
var corpo = 'Colaborador ' + 'nome' + ' teve alteração de prédio realizada. De ' + 'res.unidade' + ' para ' + 'usuario.unidade';
var sql = montaChamado(assunto, corpo, await recuperaUltimoTicket())
await cadastraTicket(sql);
