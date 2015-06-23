'use strict'
var mongoose  = require('mongoose');
var q = require('q');
var db = mongoose.connect('mongodb://localhost/bs23commerce');
require('../api/models/userModel');
var User = mongoose.model('User');

var createUser = function(userModel, callback){
    var user = new User(userModel);
    console.log(user);
    user.save(function(err) {
        if(err) {
            callback(err);
        }
        callback('success');
    });
};
User.remove().exec(function(){
    createUser({firstName: 'Saiful', lastName: 'Islam', email: 'saiful@brainstation-23.com', gender:'male', phoneNumber: '01674520707', status: 'active', password: '123456'}, function(err){console.log(err);});
    createUser({firstName: 'Shaishab', lastName: 'Roy', email: 'shaishab.roy@bs23.com', gender:'male', phoneNumber: '01922405989', status: 'active', password: '123456'}, function(err){console.log(err);});
    createUser({firstName: 'Raisul', lastName: 'Kabir', email: 'raisulk@gmail.com', gender:'male', phoneNumber: '01713458492', status: 'active', password: '123456'}, function(err){console.log(err);});
});
