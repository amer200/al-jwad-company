const mongoose = require('mongoose');

const aramexSchema = mongoose.Schema({
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AramexOrders' }],
    price: Number,
    kgprice: Number,
    mprice: Number,
    status: Boolean
})

module.exports = mongoose.model("Aramex", aramexSchema);