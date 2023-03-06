const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    name: String,
    mobile: String,
    email: String,
    password: String,
    address: String,
    location: String,
    clients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Client' }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
    pacorder: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pacorder' }],
    wallet: Number,
    code: String
})

module.exports = mongoose.model('Store', storeSchema);