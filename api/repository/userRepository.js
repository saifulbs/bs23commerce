'use strict';

var User = require('./models/userModel');


exports.createUser = function(model, callback){
    var user = new User(model);

    user.save(function(err) {
        if(err) {
            return callback(err);
        }
        callback(null);
    });
};

exports.getUser = function(query, callback){
    User.find(query, function(err, users) {
       if(err) {
           callback(err);
       }
        callback(users);
    });
};

exports.updateUser = function(conditions, updateData, callback) {
    User.update(conditions, updateData, function(err) {
        if(err) {
            return callback(err);
        }
        callback(null);
    });
};

exports.deleteUser = function(id, callback) {
    User.findByIdAndRemove(id, function(err, doc) {
        if(err) {
            return callback(err);
        }
        callback(null, doc);
    });
};
