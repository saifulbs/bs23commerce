'use strict'

var express = require('express'),
    userController = require('./controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/', userController.getUsers);

router.get('/:userId', userController.getUserById);

router.post('/', userController.createUser);

router.put('/', userController.updateUser);

router.delete('/:userId', userController.deleteUserById);

router.put('/changePassword', userController.changePassword);

router.put('/changeUserPassword', userController.changeUserPassword);

router.put('/resetForgotPassword', userController.resetForgotPassword);

router.post('/login', userController.login);

router.get('/logout', function(req, res) {
  res.send('user');
});

module.exports = router;
