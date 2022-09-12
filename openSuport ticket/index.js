import mysql from "mysql"

var db = mysql.createConnection({
    host: ip,
    user: user,
    password: pass,
    database: db
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

SelectAllElements = () => {
    return new Promise((resolve, reject) => {
        pool.query('Select Max(ticket_number) as lastTicketNumber from ticket ', (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
};

async function recuperaUltimoTicket(assunto, corpo) {
    var sql = "Select Max(ticket_number) as lastTicketNumber from ticket"
    connection.query(sql, function (err, result) {
        if (err) throw err;
        var string = JSON.stringify(result);
        var json = JSON.parse(string);
        const newTicketNumber = json[0].lastTicketNumber + 1;
    });
}
async function geraTicket() {
    await db.query('Select Max(ticket_number) as lastTicketNumber from ticket', function (err, result) {
        if (err) throw err;
        var string = JSON.stringify(result);
        var json = JSON.parse(string);
        const newTicketNumber = json[0].lastTicketNumber + 1;
        return newTicketNumber
    });
}
async function geraNewTicket(assunto, corpo, ticketNumber) {

    // const newTicketVerificado = verificaNumberTicket(newTicketNumber)

}

async function novoChamado(assunto, corpo, ticketNumber) {
    console.log('gera novo chamado')
    const date = new Date();
    const ano = date.getFullYear()
    const dia = date.getDate()
    var diaInsert = dia;
    const mes = date.getMonth() + 1
    var mesInsert = mes
    const hora = date.getHours() + 4
    var horaInsert = hora
    const minutos = date.getMinutes()
    var minutosInsert = minutos
    const segundos = date.getSeconds()

    if (dia < 10) {
        diaInsert = '0' + dia
    }
    if (hora < 10) {
        horaInsert = '0' + hora
    }
    if (minutos < 10) {
        minutosInsert = '0' + minutos
    }
    if (mes < 10) {
        mesInsert = '0' + mes
    }

    var dataFull = ano + mesInsert + diaInsert + horaInsert + minutosInsert
    var dateInsert = parseInt(dataFull)
    console.log(ticketNumber)
    var sql = "INSERT INTO ticket (ticket_number, unread, unread_staff, title, content, language, date, closed, department_id, author_staff_id, total_departments, total_owners) VALUES (" + ticketNumber + ", 0, 1, '" + assunto + "', '<p>" + corpo + "</p>', 'br', " + dateInsert + ", 0, 2, 1, 0, 0)";

    await db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("incluido -->>")
    });

}

var assunto = 'TESTE ULTIMO 1'
var corpo = 'Colaborador ' + 'nome' + ' teve alteração de prédio realizada. De ' + 'res.unidade' + ' para ' + 'usuario.unidade';
// geraTicket().then(result => console.log(result))
// novoChamado(assunto, corpo,)

// var assunto = 'TESTE ULTIMO 2'
// var corpo = 'Colaborador ' + 'nome' + ' teve alteração de prédio realizada. De ' + 'res.unidade' + ' para ' + 'usuario.unidade';
// await recuperaUltimoTicket(assunto, corpo).then(() => { })

// var assunto = 'TESTE ULTIMO 3'
// var corpo = 'Colaborador ' + 'nome' + ' teve alteração de prédio realizada. De ' + 'res.unidade' + ' para ' + 'usuario.unidade';
// await recuperaUltimoTicket(assunto, corpo).then(() => { })




// connection.end();
// all(ticket)