var mongoose = require('mongoose');
//Customer  collection
var CustomerSchema = mongoose.Schema({
    customer_name: {
        type: String
    },
    customer_phone: {
        type: String
    },
    customer_address: {
        type: String
    },
    balance: {
        type: Number
    },
    userid:{
        type:String
    },
    password:{ 
        type:String
    },
    CustomerId:{
        type:Number
    }
 
},{ collection: 'customer' }
);

 var Customer = module.exports = mongoose.model('Customer', CustomerSchema);

 module.exports.get = function (callback, limit) {
    Customer.find(callback).limit(limit);
}
