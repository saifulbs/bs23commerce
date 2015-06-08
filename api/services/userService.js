'use strict';

var UserRepository = require('./repository/userRepository');

exports.createUser =  function(req, callback) {
    var user = {
        name: req.body.name,
        username: req.body.email.toLowerCase(),
        email: req.body.email.toLowerCase(),
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        status: 'email-not-verified',
        addresses: req.body.addresses,
        gender: req.body.gender,
        active: req.body.active,
        roles: req.body.roles
    };

    UserRepository.createUser(user, function(err) {
        if(err) {
            callback(err);
        }
        callback(null);
    });
};

exports.getUser = function(req, callback) {
    UserRepository.getUser({}, function(err, users) {
      if(err) {
          callback(err, null);
      }
        callback(null, users);
  });
};

exports.getUserById = function(req, callback) {
    var query = {_id: req.params.userId};
    UserRepository.getUserById(query, function(err, user) {
       if(err) {
           callback(err)
       }
        callback(user);
    });
};

exports.searchUser = function(searchQuery, callback) {
    UserRepository.getUser(searchQuery, function(err, users) {
        if(err) {
            callback(err, null);
        }
        callback(null, users);
    });
};

exports.updateUser = function(req, callback) {
    var updateData = {
        email: req.body.email,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        addresses: req.body.addresses,
        roles: req.body.roles,
        active: req.body.active,
        gender: req.body.gender
    };

    UserRepository.updateUser({_id:req.body._id}, updateData, function(err) {
        if(err) {
            callback(err);
        }
        callback(null);
    });
};

exports.changePassword = function(req, callback) {
    var updateData = {
        password: req.body.newPassword
    };

    UserRepository.updateUser({_id: req.body._id, email: req.user.email, password: req.body.password}, updateData, function(err) {
        if(err) {
            callback(err);
        }
        callback(null);
    });
};

exports.changeUserPassword = function(req, callback) {
    var updateData = {
        password: req.body.password
    };

    UserRepository.updateUser({_id: req.body._id}, updateData, function(err) {
        if(err) {
            callback(err);
        }
        callback(null);
    });
};

exports.resetForgotPassword = function(req, callback) {
    var updateData = {
        password: req.body.password
    };
    UserRepository.updateUser({email: req.body.email}, updateData, function(err) {
        if(err) {
            callback(err);
        }
        callback(null);
    });
};

exports.deleteUserById = function(req, callback) {
    UserRepository.deleteUserById(req.query.userId, function(err) {
        if(err) {
            callback(err);
        }
        callback(null);
    });
};