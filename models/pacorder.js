const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
    sender: {
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
    }
})

module.exports = mongoose.model('Pacorder', orderSchema);