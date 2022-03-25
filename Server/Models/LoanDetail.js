var mongoose = require('mongoose');
//Load Detail Collection
var LoanDetailSchema = mongoose.Schema({
    loan_amount: {
        type: Number
    }
    
},{ collection: 'LoanDetails' }
);

 var LoanManagement = module.exports = mongoose.model('LoanDetail', LoanDetailSchema);

 module.exports.get = function (callback, limit) {
    LoanManagement.find(callback).limit(limit);
}
