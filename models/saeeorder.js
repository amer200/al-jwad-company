const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
    store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
    details: Object,
    response: Object,
})

module.exports = mongoose.model('SaeeOrders', orderSchema);