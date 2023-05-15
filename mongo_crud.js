const dbConnection = require('./mongodb/db_connect');

/// Using Promises to Fetch Data
// dbConnection().then((res) => {
//     res.find({}).toArray().then((results) => {
//         console.warn(results);
//     })
// });

/// Using Async Await to Fetch Data
// const main = async () => {
//     let data = await dbConnection();
//     data = await data.find({}).toArray();
//     console.warn(data);
// }


/// Insert Data
// const insertData = async () => {
//     var newData = [
//         {
//             name: "vivo 11",
//             brand: "Vivo",
//             price: "239",
//             category: "mobiles",
//         },
//         {
//             name: "vivo 13",
//             brand: "Vivo",
//             price: "1239",
//             category: "mobiles",
//         },
//     ]
//     let data = await dbConnection();
//     data = await data.insertMany(newData);
//     if (data.acknowledged) {
//         console.warn("✅ Data inserted successfully");
//     } else {
//         console.warn("🛑 Failed to insert data");
//     }
// }

// insertData();


/// Update Data
// const updateData = async () => {
//     let data = await dbConnection();
//     data = await data.updateOne({ name: "vivo 112" }, { $set: { name: "vivo 11", price: "100038" } });
//     if (data.acknowledged && data.modifiedCount == 1) {
//         console.warn(data);
//         console.warn("✅ Data updated successfully");
//     } else {
//         console.warn("🛑 Failed to update data");
//     }
// }

// updateData();

/// Delete Data
const deleteData = async () => {
    let data = await dbConnection();
    data = await data.deleteOne({ name: "vivo 12" })
    if (data.acknowledged && data.deletedCount == 1) {
        console.warn("✅ Data deleted successfully");
    } else {
        console.warn("🛑 Failed to delete data");
    }
}

deleteData();