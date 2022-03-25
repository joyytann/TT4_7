// Filename: api-routes.js
const api = require("./api");
// Initialize express router
let router = require('express').Router();
// Set default API response and routes

router.route('/register')
    .post(api.register)

router.route('/login')
.post(api.Login)


const express = require('express')
//
const customerModel = require('./Models/customer')
const { getCustomers, setCustomer, updateCustomer, deleteCustomer } = require('./controllers/customerController')
const { getLoanDetails, getLoanDetail, setLoanDetail, updateLoanDetail, deleteLoanDetail } = require('./controllers/LoanDetailController')
const { getPayments, getPayment, updatePayment } = require('./controllers/PaymentDetailsController')
const app = express()
//retrieve allcustomer info
router.get('/customers', getCustomers)
//retrieve all loan details
router.get('/loandetails', getLoanDetails)
//retrieve single loan detail
router.get('/loandetails/:id', getLoanDetail)
//set loan details
router.post('/loandetails', setLoanDetail)
//update loan detail
router.put('/loandetails/:id', updateLoanDetail)
//delete loan detail
router.delete('/loandetails/:id', deleteLoanDetail)
//retrive all payment details
router.get('/paymentdetails', getPayments)
//retrive single payment
router.get('/paymentdetails/:id', getPayment)
//update payment
router.put('/paymentdetails/:id', updatePayment)




// Export API routes
module.exports = router;