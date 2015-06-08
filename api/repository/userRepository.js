'use strict';

var User = require('./models/userModel');


exports.createUser = function(userModel, callback){
    var user = new User(userModel);

    user.save(function(err) {
        if(err) {
            return callback(err);
        }
        callback(null);
    });
};

exports.getUser = function(query, callback){
    User.findOne(query, function(err, user) {
       if(err) {
           callback(err);
       }
        callback(user);
    });
};

exports.getUsers = function(query, callback){
    User.find(query, function(err, users) {
        if(err) {
            callback(err);
        }
        callback(users);
    });
};

exports.getUserById = function(query, callback){
    User.findOne(query, function(err, user) {
        if(err) {
            callback(err);
        }
        callback(user);
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

exports.deleteUserById = function(id, callback) {
    User.findByIdAndRemove(id, function(err) {
        if(err) {
            return callback(err);
        }
        callback(null);
    });
};
