const mongoose = require('mongoose');


const orderShemaa = mongoose.Schema({
    store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
    amount: Number,
    status: Boolean,
    ref: String,
    url: String,
    cheked: Boolean
})

module.exports = mongoose.model('Order', orderShemaa);