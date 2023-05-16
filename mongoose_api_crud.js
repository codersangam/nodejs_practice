const products_model = require("./models/products_model");
const express = require('express');
require('./config');
const app = express();
const mongodb = require('mongodb');
app.use(express.json())

/// Get Products
app.get("/products", async function (req, res) {
    var data = await products_model.find();
    res.json(data);
})

/// Save new Product
app.post("/products/add", async function (req, res) {
    var data = new products_model(req.body);
    data = await data.save();
    res.json(data);
})


/// Update Product
app.put("/products/update/:name", async function (req, res) {
    var data = await products_model.updateOne({ name: req.params.name }, { $set: req.body });
    res.json(data);
})
///using params id
app.put("/products/update/:_id", async function (req, res) {
    var data = await products_model.updateOne(req.params, { $set: req.body });
    res.json(data);
})


/// Delete Product
app.put("/products/delete/:_id", async (req, res) => {
    var data = await products_model.deleteOne(req.params);
    res.json(data);
})


/// Search Product by Single Field
app.get("/search/:key", async (req, res) => {
    var data = await products_model.find({ "$or": [{ "name": { $regex: req.params.key } }] });
    res.json(data);
})


/// Search Product by Multiple Fields
app.get("/search/:key", async (req, res) => {
    var data = await products_model.find({ "$or": [{ "name": { $regex: req.params.key } }, { "brand": { $regex: req.params.key } }] });
    res.json(data);
})

app.listen(5001);