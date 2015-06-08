'use strict'

var express = require('express'),
    userController = require('./controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/', userController.getUser);

router.get('/:userId', userController.getUserById);

router.post('/', userController.createUser);

router.put('/', userController.updateUser);

router.delete('/:userId', userController.deleteUserById);

router.put('/changePassword', userController.changePassword);

router.put('/resetForgotPassword', userController.resetForgotPassword);

router.post('/login', function(req, res) {
  res.send('user');
});

router.get('/logout', function(req, res) {
  res.send('user');
});

module.exports = router;
