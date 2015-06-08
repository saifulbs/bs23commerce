'use strict';

var Category = require('./models/categoryModel');


exports.createCategory = function(model, callback){
    var category = new Category(model);

    category.save(function(err) {
        if(err) {
            return callback(err);
        }
        callback(null);
    });
};

exports.getCategory = function(query, callback){
    Category.find(query, function(err, categories) {
        if(err) {
            callback(err);
        }
        callback(categories);
    });
};

exports.getCategoryById = function(query, callback){
    Category.findOne(query, function(err, categorie) {
        if(err) {
            callback(err);
        }
        callback(categorie);
    });
};

exports.updateCategory = function(conditions, updateData, callback) {
    Category.update(conditions, updateData, function(err) {
        if(err) {
            return callback(err);
        }
        callback(null);
    });
};

exports.deleteCategory = function(id, callback) {
    Category.findByIdAndRemove(id, function(err, doc) {
        if(err) {
            return callback(err);
        }
        callback(null, doc);
    });
};
