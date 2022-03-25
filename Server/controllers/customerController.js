const Customer = require('../Models/customer')

const getCustomers = async (req, res) => {
    const customers = await Customer.find()
    res.json(customers)
}

 const setCustomer = async (req, res) => {
/*     if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    } */

    const customer = await Customer.create({
        CustomerId: req.body.Number,
        customer_name: req.body.text,
        customer_phone: req.body.Number,
        customer_address: req.body.text,
        balance: req.body.Number,
    })
    res.json(customer)
}

const updateCustomer = async (req, res) => {
    const customer = await Customer.findById(req.params.id)

    if(!customer) {
        res.status(400)
        throw new Error('Customer not found')
    }

    const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.json(updatedCustomer)
}
const deleteCustomer = async (req, res) => {
    const customer = await Customer.findById(req.params.id)
    if(!customer) {
        res.status(400)
        throw new Error('Customer not found')
    }

    await customer.remove()

    res.json({ id: req.params.id })
}



module.exports = {
    getCustomers, setCustomer, updateCustomer, deleteCustomer,
}