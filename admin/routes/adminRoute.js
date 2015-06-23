'use strict'

var express = require('express'),
    userController = require('../controllers/userController');
var router = express.Router();
var auth = require('auth');

/* GET users listing. */
router.get('/', userController.getUsers);

router.get('/:adminId', userController.getUserById);

router.post('/', userController.createUser);

router.put('/', userController.updateUser);

router.delete('/:adminId', userController.deleteUserById);

router.put('/changePassword', userController.changePassword);

router.put('/changeAdminPassword', userController.changeUserPassword);

router.put('/resetForgotPassword', userController.resetForgotPassword);

router.post('/login', auth, userController.login);

router.get('/logout', function(req, res) {
    res.send('user');
});

module.exports = router;
