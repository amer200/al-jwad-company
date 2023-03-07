const Strore = require('../models/store');
const Saee = require('../models/saee');
const Client = require('../models/client');
const Order = require('../models/order');
const bcrypt = require('bcryptjs');
const ejs = require('ejs');
const saee = require('../models/saee');
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
    const saee = await Saee.findOne();
    // const clients = await Client.find();
    // const orders = await Order.find();
    res.render('admin/index', {
        stores: stores,
        saee: saee
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
exports.changeSaeeStatus = (req, res) => {
    saee.findOne()
        .then(c => {
            console.log(c)
            if (c.status) {
                c.status = false;
            } else {
                c.status = true;
            }
            return c.save()
        })
        .then(c => {
            res.status(200).json({
                msg: `تم تعديل حالة شركة`
            })
        })
        .catch(err => {
            console.log(err)
        })
}
exports.editSaeePrice = (req, res) => {
    const price = req.body.price;
    const kgprice = req.body.kgprice;
    Saee.findOne()
        .then(s => {
            s.price = price;
            s.kgprice = kgprice;
            return s.save();
        })
        .then(s => {
            res.redirect('/admin');
        })
        .catch(err => {
            console.log(err)
        })
}