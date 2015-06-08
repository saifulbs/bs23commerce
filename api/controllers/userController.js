'use strict';

var UserService = requier('./services/userService'),
    User        = requier('./models/userModel'),
    nodemailer  = require('nodemailer');

//<editor-fold desc='start local functions'>

var generateSearchQuery = function(req, callback) {
    //console.dir(req.query.roles +' '+ req.query.email + ' ' + req.query.name);
    var searchQuery={};
    var roles = [];
    if(req.query.roles !== '') {
        roles = req.query.roles.split(',');
    }
    if(req.query.roles !== '' && req.query.email !== '' && req.query.name !== ''){
        searchQuery = { $and: [{roles: { $in: roles} },{ email: req.query.email, name: req.query.name }]};
    }
    else if(req.query.roles !== '' && req.query.email !== '' && req.query.name === ''){
        searchQuery = { $and: [{ roles: { $in: roles }},{ email: req.query.email }]};
    }
    else if(req.query.roles !== '' && req.query.email === '' && req.query.name !== ''){
        searchQuery = { $and: [{ roles: { $in: roles }},{ name: req.query.name }]};
    }
    else if(req.query.roles !== '' && req.query.email === '' && req.query.name === ''){
        searchQuery = {roles: {$in: roles }};
    }
    else if(req.query.email !== '' && req.query.name !== ''){
        searchQuery = {email: req.query.email,name: req.query.name};
    }
    else if(req.query.email !== '' && req.query.name === '') {
        searchQuery = {email: req.query.email};
    }
    else if(req.query.email === '' && req.query.name !== '') {
        searchQuery = {name: req.query.name};
    }

    callback(searchQuery);
};

var passwordGenerator =  function(){
    var newPassword = '';
    var possibleCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';

    for( var i=0; i < 8; i+=1 )
        newPassword += possibleCharacter.charAt(Math.floor(Math.random() * possibleCharacter.length));

    return newPassword;
};

var sendMail = function(recipientEmail, subject, htmlBody, callback){

    var smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'qa.aareas900@gmail.com',
            pass: 'qa.aareas'
        }
    });

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'BS-Commerce ✔ <info@domain.com>', // sender address
        to: recipientEmail, // list of receivers
        subject: subject + ' ✔', // Subject line
        html: htmlBody // html body
    };

    // send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            callback(false);
        }else{
            callback(true);
        }

        // if you don't want to use this transport object anymore, uncomment following line
        //smtpTransport.close(); // shut down the connection pool, no more messages
    });
};

//</editor-fold>

exports.login = function(req, res) {
    var loginRequest = {
        email: req.body.email.toLowerCase(),
        password: User.hashPassword(req.body.password)
    };
    UserService.login(loginRequest, function(err, user) {
        if(err || user === null) {
            return res.status(400).send({msg: 'Invalid credential !'});
        }
        return res.status(200).send(user);
    });
};

exports.createUser =  function(req, res) {
    if(!req.user) {
        return res.status(409).send({msg: 'Invalid credential !'});
    }

    UserService.createUser(req, function(err) {
        if(err) {
            return res.status(400).send({msg: 'An unhandled error occurred, please try again'});
        }
        return res.status(200).send({msg: 'User Create Success'});
    });
};

exports.getUsers =  function(req, res) {
    if(!req.user) {
        return res.status(409).send({msg: 'Invalid credential !'});
    }

    UserService.getUsers(req, function(err, users) {
        if(err) {
            return res.status(400).send(err);
        }
        return res.status(200).send(users);
    });
};

exports.getUserById =  function(req, res) {
    if(!req.user) {
        return res.status(409).send({msg: 'Invalid credential !'});
    }

    UserService.getUserById(req, function(err, user) {
        if(err) {
            return res.status(400).send(err);
        }
        return res.status(200).send(user);
    });
};

exports.searchUser =  function(req, res) {
    if(!req.user) {
        return res.status(409).send({msg: 'Invalid credential !'});
    }

    generateSearchQuery(req, function(searchQuery) {
        UserService.searchUser(searchQuery, function(err, users) {
            if(err) {
                return res.status(400).send(errs);
            }
            return res.status(200).send(users);
        });
    });
};

exports.updateUser =  function(req, res) {
    if(!req.user) {
        return res.status(409).send({msg: 'Invalid credential !'});
    }

    UserService.updateUser(req, function(err) {
        if(err) {
            return res.status(400).send(err);
        }
        return res.status(200).send({msg: 'User updated successfully.'});
    });
};

exports.changePassword = function(req, res) {
    if (!req.user) {
        return res.status(401).send([{msg: 'Invalid credential !'}]);
    }

    if (req.body.password) {
        req.body.password = User.hashPassword(req.body.password);
    }

    UserService.changePassword(req, function(err) {
        if(err) {
            return res.status(400).send(err);
        }
        return res.status(200).send([{msg: 'Password updated successfully.'}]);
    });
};

exports.changeUserPassword =  function(req, res) {
    if(!req.user) {
        return res.status(409).send({msg: 'Invalid credential !'});
    }

    passwordGenerator(req, function(newPassword) {
        req.body.password = newPassword;
        UserService.changeUserPassword(req, function(err) {
            if(err) {
                return res.status(400).send(err);
            }
            return res.status(200).send({msg: 'Password updated successfully.'});
        });
    });

};

exports.resetForgotPassword =  function(req, res) {
    if(!req.user) {
        return res.status(409).send({msg: 'Invalid credential !'});
    }

    var randomPassword= passwordGenerator();

    req.body.password = randomPassword;
    UserService.resetForgotPassword(req, function(err) {
        if(err) {
            return res.status(400).send(err);
        }
        sendMail(req.body.email, 'BS-Commerce  password reset','<h2>Thanks for using BS-Commerce </h2><h3>your new password : '+ randomPassword +'</h3>', function(response){
            if(response) {
                return res.status(200).send('New password sent to your email.');
            }else{
                return res.status(500).send('Email not sent!.');
            }
        });
    });
};

exports.deleteUserById =  function(req, res) {
    if(!req.user) {
        return res.status(409).send({msg: 'Invalid credential !'});
    }

    UserService.deleteUserById(req, function(err) {
        if(err) {
            return res.status(400).send(err);
        }
        return res.status(200).send({msg: 'User delete successfully.'});
    });
};