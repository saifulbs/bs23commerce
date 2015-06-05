'use strict'

var category = require('./categoryRoute');
var order = require('./orderRoute');
var product = require('./productRoute');
var user = require('./userRoute');


var allRoutes = function(){

}

allRoutes.init = function (app){
    this.app = app;

    this.app.use('/api/user', user);
    this.app.use('/api/category', category);
    this.app.use('/api/order', order);
    this.app.use('/api/product', product);
}

module.exports = allRoutes;

