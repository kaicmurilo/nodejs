var pool = require('./sql/connect');

pool.getConnection(function (err, connection) {
    if (err) throw err; // not connected!

    // Use the connection
    connection.query('Select Max(ticket_number) as lastTicketNumber from ticket', function (error, results, fields) {
        // When done with the connection, release it.

        console.log(results)
        // Handle error after the release.
        if (error) throw error;

        // Don't use the connection here, it has been returned to the pool.
        pool.end();
    });
});

pool.getConnection(function (err, connection) {
    if (err) throw err; // not connected!

    // Use the connection
    connection.query('Select Max(ticket_number) as lastTicketNumber from ticket', function (error, results, fields) {
        console.log(results)
        if (error) throw error;
        pool.end();
    });
});