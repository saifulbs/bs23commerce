'use strict'
var mongoose  = require('mongoose');
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
});
/*

exports.up = function(next){

    //mongoose.connection.collections['user'].drop();


    next();
 };

exports.down = function(next) {
  next();
};
*/
