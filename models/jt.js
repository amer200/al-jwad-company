const mongoose = require("mongoose");

const jtSchema = mongoose.Schema({
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SaeeOrders' }],
    price: Number,
    kgprice: Number,
    mprice: Number,
    status: Boolean
})

