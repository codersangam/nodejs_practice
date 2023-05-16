const con = require('./mysql_config');
const express = require('express');
const app = express();
express.json()

// con.query("SELECT * FROM USERS", (err, res) => {
//     console.warn(res);
// });

/// API Fetch
app.get('/users', function (req, res) {
    con.query('select * from users', (err, data) => {
        if (err) {
            console.warn(err);
        } else {
            res.json(data);
        }
    })
})


app.listen(5001)



