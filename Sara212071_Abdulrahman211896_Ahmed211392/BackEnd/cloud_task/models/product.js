const {Schema, model} = require('mongoose');
const ProductSchema = new Schema({

    name:{
type: 'String',
required: true
    },
    description:{
        type: 'String',
        required: true 
    },

    price:{
       type: 'Number',
       required: true

    },
    imgURL: {
        type: 'String'
    }
});

const ProductModel = model('product',ProductSchema);

module.exports = ProductModel;