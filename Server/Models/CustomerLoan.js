var mongoose = require('mongoose');
//Customer Loan collection
var CustomerLoanSchema = mongoose.Schema({
    CustomerId: {
        type: Number
    },
    LoanId: {
        type: Number
    },
 
},{ collection: 'CustomerLoan' }
);

 var CustomerLoan = module.exports = mongoose.model('CustomerLoan', CustomerLoanSchema);

 module.exports.get = function (callback, limit) {
    CustomerLoan.find(callback).limit(limit);
}
