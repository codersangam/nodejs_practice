const multer = require("multer");
const express = require('express');
const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) { cb(null, 'uploads') },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg")
    }
})

const upload = multer({
    storage: storage
}).single('avatar');

app.post("/uploads", upload, function (req, res, next) {
    res.send("File uploaded");
    next()
})

app.listen(5001)