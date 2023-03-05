const Strore = require('../models/store');
const Company = require('../models/company');
const Client = require('../models/client');
const Order = require('../models/order');
const bcrypt = require('bcryptjs');
const ejs = require('ejs');
const nodemailer = require('nodemailer');
/* nodemailer config */
const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.PASSWORD,
    },
});
/*************************** */
exports.getIndex = async (req, res) => {
    const stores = await Strore.find();
    const companys = await Company.find();
    // const clients = await Client.find();
    // const orders = await Order.find();
    res.render('admin/index', {
        stores: stores,
        companys: companys
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
exports.sendStoreEmail = (req, res) => {
    const id = req.params.id;
    const msg = req.body.msg;
    Strore.findById(id)
        .then(s => {
            var mailOptions = {
                from: 'support@gotex.com',
                to: s.email,
                subject: 'من ادارة جوتكس',
                html: msg,
                text: msg
            };

            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return res.send(error)
                }
                console.log('Message sent: %s', info.messageId);
            });
        })
        .then(resu => {
            res.redirect('/admin')
        })
        .catch(err => {
            console.log(err)
        })
}
