const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
    company: String,
    sender: {
        id: String,
        name: String,
        mobile: Number,
        address: String,
        city: String

    },
    package: {
        weight: Number,
        quantity: Number,
    },
    clints: {
        name: String,
        mobile: Number,
        address: String,
        city: String
    },
    cashondelivery: Number
})

module.exports = mongoose.model('Pacorder', orderSchema);