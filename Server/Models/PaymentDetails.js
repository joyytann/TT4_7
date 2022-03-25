var mongoose = require('mongoose');
//Customer Loan collection
var PaymentSchema = mongoose.Schema({
    loanId: {
        type: Number
    },
    payment_date: {
        type: date
    },
    payment_amount: {
        type: Number
    }
 
},{ collection: 'PaymentDetails' }
);

 var Payment = module.exports = mongoose.model('Payment', PaymentSchema);

 module.exports.get = function (callback, limit) {
    Payment.find(callback).limit(limit);
}
