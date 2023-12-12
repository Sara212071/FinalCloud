const productService = require('../Services/Products');

module.exports.getProducts = async (req,res) => {
try {
const products =await productService.findAllproducts();
res.send({products})
}
catch(err){

    res.status(500);
    res.send({
        error:err
    });
}



};

module.exports.postProduct = async (req, res) => {
    const productInfo ={
name: req.body.name,
description: req.body.description,
price: req.body.price,
imgURL: req.body.imgURL

    }; 

    try{
const createdProduct = await productService.addNewProduct(productInfo);
return res.status(201).send({
    msg: 'product created',
    productId: createdProduct._id
});
    }
    catch(err){
        return res.status(500).send({
            error:err.message
        });

    }
};