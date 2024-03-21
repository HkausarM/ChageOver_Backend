const { database } = require("../database");

exports.getCategoryProducts = async (req, res) => {
    // /category/<men><women><kids>
    let category = req.params.category
    let catst
    if (category === 'men') {
        catst = "Men"
    } 
    else if (category === 'women'){
        catst = "Women"
    }
    else catst='Kids'

    let query = {'Category' : catst}
    console.log(query)

    let productsArr = await database.collection("products").find(query).toArray()
    console.log("categoryProducts:", productsArr);
    res.send(JSON.stringify({ categoryProducts: productsArr }))
};