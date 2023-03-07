const mongoose = require('mongoose');

const saeeSchema = mongoose.Schema({
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SaeeOrders' }],
    price: Number,
    kgprice: Number,
    status: Boolean
})

module.exports = mongoose.model("Saee", saeeSchema);