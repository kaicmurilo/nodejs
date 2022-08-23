import axios from "axios";
import mysql from "mysql"

var connection = mysql.createConnection({
    host: '192.168.1.16',
    user: 'suporte',
    password: '',
    database: 'suporte'
});

const assunto = 'ALTERAÇÃO DE FUNÇÃO'
const corpo = 'Segue dados. <br> Nome: <strong></strong>  <br> Ramal: <strong></strong>   <br> Email: <strong></strong>  <br> Setor: <strong></strong>  <br> Função: <strong></strong>  <br> Favor verificar assinatura!'

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
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
    const ticketNumber = dia + mes + ano + + hora + minutos + date.getSeconds() + date.getMilliseconds()
    var sql = "INSERT INTO ticket (ticket_number, unread, unread_staff, title, content, language, date, closed, department_id, author_staff_id, total_departments, total_owners) VALUES (1234" + ticketNumber + ", 0, 1, '" + assunto + "', '<p>" + corpo + "</p>', 'br', " + dateInsert + ", 0, 2, 1, 0, 0)";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});


const config = {
    app_name: "teste",
    debug: {
        http: true
    },
    api: "http://localhost/site/api"
    // api: "http://localhost:3000/"
};
const api = () => {
    return axios.create({
        baseURL: config.api,
        timeout: 30000
    });
};
async function all(corpoItcket) {
    const res = await api().post('ticket/create', corpoItcket)
    console.log(res)
    return res
}
const ticket = {
    title: " Kaic nunes",
    content: "teste",
    departmentId: 1,
    name: "Kaic",
    email: "kaic.nunes@mascarenhasbarbosa.com.br"
}

// connection.end();
// all(ticket)