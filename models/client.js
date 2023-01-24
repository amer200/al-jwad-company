const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
    name: String,
    mobile: String,
    email: String,
    address: String,
    location: String,
    details: String,
    store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' }
})

module.exports = mongoose.model('Client', clientSchema);