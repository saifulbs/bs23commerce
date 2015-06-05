'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    parent: {
        type: Schema.Types.ObjectId,
        default: null
    },
    description: {
        type: String,
        default: null
    }
});

mongoose.model('Category', CategorySchema);