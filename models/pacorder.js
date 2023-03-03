const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
    store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
    package: {
        weight: Number,
        quantity: Number,
        desc: String
    },
    clints: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Client' }]
})

module.exports = mongoose.model('Order', orderSchema);