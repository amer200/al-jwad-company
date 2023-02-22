const Strore = require('../models/store');
const Client = require('../models/client');
const Order = require('../models/order');
const bcrypt = require('bcryptjs');
const ejs = require('ejs');
exports.getIndex = async (req, res) => {
    const stores = await Strore.find();
    // const clients = await Client.find();
    // const orders = await Order.find();
    res.render('admin/index', {
        stores: stores
    });
}
/* stores config */
exports.removeStore = (req, res) => {
    const id = req.params.id;
    Strore.findByIdAndRemove(id)
        .then(s => {
            res.status(200).json({
                msg: 'ok'
            })
        })
        .catch(err => {
            console.log(err)
        })
}