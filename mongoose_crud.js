const mongoose = require('mongoose');

var url = 'mongodb+srv://sangamrobo:TlBr0plrcCgiWCih@cluster0.zikxtpe.mongodb.net/e-comm'

const ProductsSchema = new mongoose.Schema({
    name: String,
    price: String
});

/// Save New Data
// const saveNewData = async () => {
//     await mongoose.connect(url);

//     const ProductsModel = mongoose.model('products', ProductsSchema);
//     let data = new ProductsModel({ name: "lol", price: 1000 });
//     let result = await data.save()
//     console.warn(result);
// }

// saveNewData();

/// Update Data
const updateData = async () => {
    await mongoose.connect(url);
    const ProductsModel = mongoose.model('products', ProductsSchema);
    let data = await ProductsModel.updateOne({ name: "vivo 13" }, { $set: { price: "12000" } });
    console.warn(data);
}

// updateData();

/// To Delete Data
const deleteData = async () => {
    await mongoose.connect(url);
    const ProductsModel = mongoose.model('products', ProductsSchema);
    let data = await ProductsModel.deleteOne({ name: "vivo 13" });
    console.warn(data);
}

// deleteData();


/// To View/Get Data
const getData = async () => {
    await mongoose.connect(url);
    const ProductsModel = mongoose.model('products', ProductsSchema);
    let data = await ProductsModel.find();
    console.warn(data);
}

getData();