const mongodb = require('mongodb');
const dbConnection = require('./mongodb/db_connect');
const express = require('express');

const app = express();

app.use(express.json());

/// To Fetch Products
app.get("/products", async function (req, res) {
    var data = await dbConnection();
    data = await data.find().toArray();
    res.json(data);
})

/// To Add New Product
app.post('/products/add', async (req, res) => {
    var bodyData = req.body;
    var data = await dbConnection();
    data = await data.insertOne(bodyData);
    res.json(data);
})

/// To Update Product
app.put('/products/update/:name', async (req, res) => {
    var data = await dbConnection();
    data = await data.updateOne({ name: req.params.name }, { $set: req.body });
    res.json(data);
})

/// To Delete Product
app.delete('/products/delete/:id', async (req, res) => {
    var data = await dbConnection();
    data = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
    res.json(data);
})

app.listen(5001);