const LoanDetails = require('../Models/LoanDetail')

const getLoanDetails = async (req, res) => {
    const LoanDetail = await LoanDetails.find()
    res.json(LoanDetail)
}

const getLoanDetail = async (req, res) => {
    const LoanDetail = await LoanDetails.findById(req.params.id)
    res.json(LoanDetail)
}

// issue
 const setLoanDetail = async (req, res) => {
     if(!req.body.text) {
        res.status(400)
        //throw new Error('Please add a text field')
    } 

    const LoanDetail = await LoanDetails.create({
        loan_amount: req.body.Number
    })
    res.json(LoanDetail)
}

const updateLoanDetail = async (req, res) => {
    const LoanDetail = await LoanDetails.findById(req.params.id)

    if(!LoanDetail) {
        res.status(400)
        throw new Error('Customer not found')
    }

    const updatedLoanDetail = await LoanDetails.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.json(updatedLoanDetail)
}

const deleteLoanDetail = async (req, res) => {
    const LoanDetail = await LoanDetails.findById(req.params.id)
    if(!LoanDetail) {
        res.status(400)
        throw new Error('Customer not found')
    }

    await LoanDetail.remove()

    res.json({ id: req.params.id })
}



module.exports = {
    getLoanDetails , getLoanDetail, setLoanDetail, updateLoanDetail, deleteLoanDetail,
}