'use strict';

var Settings = require('./models/settingsModel');


exports.createCategory = function(model, callback){
    var settings = new Settings(model);

    settings.save(function(err) {
        if(err) {
            return callback(err);
        }
        callback(null);
    });
};

exports.getSettings = function(query, callback){
    Settings.find(query, function(err, settings) {
        if(err) {
            callback(err);
        }
        callback(settings);
    });
};

exports.getSettingsById = function(query, callback){
    Settings.findOne(query, function(err, setting) {
        if(err) {
            callback(err);
        }
        callback(setting);
    });
};

exports.updateSettings = function(conditions, updateData, callback) {
    Settings.update(conditions, updateData, function(err) {
        if(err) {
            return callback(err);
        }
        callback(null);
    });
};

exports.deleteSettings = function(id, callback) {
    Settings.findByIdAndRemove(id, function(err, doc) {
        if(err) {
            return callback(err);
        }
        callback(null, doc);
    });
};
