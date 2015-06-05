'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var OrderSchema =new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    shippingAddress:{
        type: String
    },
    billingAddress:{
        type: String
    },
    paymentMethod:{
        type: String
    },
    ordered:{
        type: Boolean,
        default: false
    },
    orderDate:{
        type: Data
    },
    deliverDate:{
        type: Data
    },
    delivered:{
        type: Boolean,
        default: false
    },
    productItems:{

        quantity:{
            type: Number,
            default: 0
        },
        finalPrice:{
            type: Number,
            default: 0
        }
    }
});
mongoose.model('Order', OrderSchema);