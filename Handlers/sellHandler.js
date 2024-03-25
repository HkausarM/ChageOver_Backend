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

const sellOrdervaluationList = async (req, res) => {
  console.log("inside middleware")

  let sellOrderArr = await database.collection("sellorders").find().toArray()
  console.log("SellOrderList:", sellOrderArr);
  res.send(JSON.stringify({ evaluationList: sellOrderArr}))
};


module.exports = {sellProduct, sellOrdervaluationList}