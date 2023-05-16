const express = require('express');
const app = express();
const EventEmitter = require('events');

const event = new EventEmitter();

let count = 0;
event.on("ok", () => {
    count++;
    console.warn("Event added", count);
})

app.get("/", function (req, res) {
    res.send("home")
    event.emit("ok")
})

app.get("/about", function (req, res) {
    res.send("about")
    event.emit("ok")
})

app.get("/contact", function (req, res) {
    res.send("contact")
    event.emit("ok")
})

app.listen(5001)


