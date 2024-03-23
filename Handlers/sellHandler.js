const { database } = require("../database");


const sellProduct = async (req, res) => {
    // /sell
    //{"CustomerName":"dummy","PhoneNumber":"dummy","EmailID":"dummy","Address":"dummy","ProductName":"dummy product",
    //"ProductDescription":"des","Size":"M","Category":"Women","PriceNegotiable":"yes","Age":"2 months","PriceQuoted": 10}
  let { CustomerName,PhoneNumber,EmailID,Address,ProductName,ProductDescription,Size,Category,PriceNegotiable,Age,PriceQuoted } = req.body;

  let sellObj = {
    CustomerName,PhoneNumber,EmailID,Address,ProductName,ProductDescription,Size,Category,PriceNegotiable,Age,PriceQuoted
  }
    database
      .collection("sellorders")
      .insertOne(sellObj)
      .then((result) => {
        console.log(result);
        res.send(JSON.stringify(result));
      });
};


module.exports = {sellProduct}