const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
    company: String,
    store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
    details: Object
})

module.exports = mongoose.model('Pacorder', orderSchema);