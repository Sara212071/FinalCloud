const ProductModel = require ('../models/product');

module.exports.findAllproducts = async()=> {
    try{
        const products = await ProductModel.find();
        return products;
    } catch(err){
        throw new Error("NO products retrieved");
    }
};

module.exports.addNewProduct = async(productinfo) => {
try{
    const product = ProductModel({
name: productinfo.name,
description: productinfo.description,
price: productinfo.price,
imgURL: productinfo.imgURL
}    );
const createdProduct = await product.save();
return createdProduct;


}
catch (err){
    throw new Error("failed to create product");
}


};