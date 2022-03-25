const PaymentDetails = require('../Models/PaymentDetails')



const getPayments = async (req, res) => {
   const payment = await PaymentDetails.find()
    res.json(payment)
}

const getPayment = async (req, res) => {
    const payment = await PaymentDetails.findById(req.params.id)
    res.json(payment)
}


const updatePayment = async (req, res) => {
    const PaymentDetail = await PaymentDetails.findById(req.params.id)

    if(!PaymentDetail) {
        res.status(400)
        throw new Error('Customer not found')
    }

    const updatedPayment = await PaymentDetails.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.json(updatedPayment)
}


module.exports = {
    getPayments, getPayment, updatePayment,
}