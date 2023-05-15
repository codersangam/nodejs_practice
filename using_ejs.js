const express = require('express');

const app = express();

app.set("view engine", "ejs")

app.get("/", function (req, res) {
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

app.get("/contact", function (req, res) {
    res.render("contact");
})

app.listen(5001);