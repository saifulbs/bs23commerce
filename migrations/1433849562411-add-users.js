'use strict'
//var mongoose = require('mongoose');
//require('../api/models/userModel');
var userRepo = require('../api/repository/userRepository');
//var UserSchema = mongoose.model('User');

exports.up = function(next){
    userRepo.createUser({firstName: 'Saiful', lastName: 'Islam'});
    /*db.rpush('pets', 'loki');
    db.rpush('pets', 'jane', next);*/
    next();
};

exports.down = function(next){
    /*db.rpop('pets');
    db.rpop('pets');
    db.rpop('pets', next);*/
    next();
};
/*

exports.up = function(next) {
  next();
};

exports.down = function(next) {
  next();
};
*/
