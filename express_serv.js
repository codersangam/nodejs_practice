const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, "/public");

app.get('/', function (req, res) {
    res.sendFile(`${publicPath}/index.html`);
})

app.get('/about', function (req, res) {
    res.sendFile(`${publicPath}/about.html`);
})

app.get('/contact', function (req, res) {
    res.sendFile(`${publicPath}/contact.html`);
})

app.get('*', function (req, res) {
    res.sendFile(`${publicPath}/404.html`);
})

app.listen(5001);