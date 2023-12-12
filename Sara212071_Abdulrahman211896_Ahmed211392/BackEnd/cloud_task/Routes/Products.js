const{Router} = require ('express');
const productsController = require ('../Controllers/Products');
const productsRouter = Router();

productsRouter.get ('/',productsController.getProducts);
module.exports = productsRouter;
productsRouter.post('/',productsController.postProduct);