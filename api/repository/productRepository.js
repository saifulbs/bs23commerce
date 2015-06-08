'use strict';

var Product = require('./models/productModel');


exports.createProduct = function(model, callback){
    var product = new Product(model);

    product.save(function(err) {
        if(err) {
            return callback(err);
        }
        callback(null);
    });
};

exports.getProduct = function(query, callback){
    Product.find(query, function(err, products) {
        if(err) {
            callback(err);
        }
        callback(products);
    });
};

exports.getProductById = function(query, callback){
    Product.findOne(query, function(err, product) {
        if(err) {
            callback(err);
        }
        callback(product);
    });
};

exports.updateProduct = function(conditions, updateData, callback) {
    Product.update(conditions, updateData, function(err) {
        if(err) {
            return callback(err);
        }
        callback(null);
    });
};

exports.deleteProduct = function(id, callback) {
    Product.findByIdAndRemove(id, function(err, doc) {
        if(err) {
            return callback(err);
        }
        callback(null, doc);
    });
};
