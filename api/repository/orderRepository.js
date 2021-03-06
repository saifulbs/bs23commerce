'use strict';

var Order = require('./models/orderModel');


exports.createOrder = function(model, callback){
    var order = new Order(model);

    order.save(function(err) {
        if(err) {
            return callback(err);
        }
        callback(null);
    });
};

exports.getOrder = function(query, callback){
    Order.find(query, function(err, orders) {
        if(err) {
            callback(err);
        }
        callback(orders);
    });
};

exports.getOrderById = function(query, callback){
    Order.find(query, function(err, order) {
        if(err) {
            callback(err);
        }
        callback(order);
    });
};

exports.updateOrder = function(conditions, updateData, callback) {
    Order.update(conditions, updateData, function(err) {
        if(err) {
            return callback(err);
        }
        callback(null);
    });
};

exports.deleteOrder = function(id, callback) {
    Order.findByIdAndRemove(id, function(err, doc) {
        if(err) {
            return callback(err);
        }
        callback(null, doc);
    });
};
