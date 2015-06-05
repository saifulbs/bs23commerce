'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SettingsSchema = new Schema({
    themeDirectory:{
        type: String
    },
    shopName:{
        type: String
    },
    motto:{
        type: String
    }
});

mongoose.model('Settings', SettingsSchema);
