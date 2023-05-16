const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'watwallet_web',
    password: 'acforiginals'
});

connection.connect((err) => {
    if (err) {
        console.warn("not connected");
    } else {
        console.warn("connected");
    }
})

module.exports = connection;
