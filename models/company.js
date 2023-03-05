const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    name: String,
    price: Number,
    key: String,
    status: String,
})

module.exports = mongoose.model('Company', companySchema);