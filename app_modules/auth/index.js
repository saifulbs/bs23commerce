'use strict'

var auth = function (req, res, next) {
    /*console.log(req.session);
    console.log(req.session.user);*/

    this.user = function(req, res, next){
        if (req.session.user == "saif" || req.path ==='/auth') {
            next();
        } else {
            res.redirect("/login");
        }
    }
    this.admin = function(req, res, next){
        if (req.session.user == "saif" || req.path ==='/auth') {
            next();
        } else {
            res.redirect("/login");
        }
    }
}



module.exports = auth;
