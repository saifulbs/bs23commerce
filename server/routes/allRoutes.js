'use strict'

var routes = require('./indexRoute');

var allRoutes = function(){

}

allRoutes.init = function (app){
    this.app = app;
    this.app.use('/', routes);
}

module.exports = allRoutes;

