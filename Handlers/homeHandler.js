const { database } = require("../database");

const getAllProducts = async (req, res) => {
    console.log("inside middleware")

    let productsArr = await database.collection("products").find().toArray()
    console.log("Products:", productsArr);
    let query = { Discount: { $gt: 0 } };
    let saleArr = await database.collection("products").find(query).toArray()
    console.log(saleArr);
    res.send(JSON.stringify({ allProducts: productsArr, saleProducts: saleArr }))
};

module.exports = { getAllProducts };
