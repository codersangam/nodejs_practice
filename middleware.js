const express = require('express');
const checkage = require('./middleware/checkage_middleware');

const app = express();

app.set("view engine", "ejs")

/// Application Level Middleware
// app.use(checkage);


/// Route Level Middleware
app.get("/", checkage, function (req, res) {
    var data = {
        "name": "sangam",
        "email": "sangam@gmail.com",
        "skills": [
            "flutter",
            "dart",
            "java"
        ],
    }
    res.render("index", { data });
})

app.get("/about", function (req, res) {
    res.render("about");
})

app.get("/contact", checkage, function (req, res) {
    res.render("contact");
})

app.get("*", function (req, res) {
    res.render("404");
})

app.listen(5001);