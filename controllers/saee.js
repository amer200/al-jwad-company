const SaeeOrder = require('../models/saeeorder');
const Store = require("../models/store");
const Saee = require("../models/saee");
const axios = require('axios');
exports.getCreate = (req, res) => {
    res.render('main/dashbord/saee-create-order.ejs', {
        wallet: req.session.store.wallet
    })
}
exports.postCreate = async (req, res) => {
    console.log(req.body);
    const saee = await Saee.findOne();
    const p_name = req.body.p_name;
    const p_city = req.body.p_city;
    const p_mobile = req.body.p_mobile;
    const p_streetaddress = req.body.p_streetaddress;
    const cashondelivery = req.body.cashondelivery;
    const weight = req.body.weight;
    const quantity = req.body.quantity;
    const c_name = req.body.c_name;
    const c_city = req.body.c_city;
    const c_streetaddress = req.body.c_streetaddress;
    const c_mobile = req.body.c_mobile;
    const data = {
        secret: process.env.SAEE_KEY,
        name: p_name,
        city: p_city,
        mobile: p_mobile,
        streetaddress: p_streetaddress,
        cashondelivery: cashondelivery,
        weight: weight,
        quantity: quantity,
        c_name: c_name,
        c_city: c_city,
        c_streetaddress: c_streetaddress,
        c_mobile: c_mobile
    }
    axios({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        url: 'https://corporate.saeex.com/deliveryrequest/new',
        data: data
    })
        .then(response => {
            console.log(response.data)
            if (response.data.success) {
                Store.findById(req.session.store._id)
                    .then(s => {
                        if (weight > 15) {
                            s.wallet = (s.wallet - (saee.price + (3 * (weight - 15))));
                            req.session.store.wallet = s.wallet
                        } else {
                            s.wallet = (s.wallet - saee.price);
                            req.session.store.wallet = s.wallet
                        }
                        return s.save();
                    })
                    .then(s => {
                        const newOrder = new SaeeOrder({
                            company: "saee",
                            store: req.session.store._id,
                            details: data,
                            response: response.data
                        })
                        newOrder.save()
                            .then(o => {
                                res.status(200).json({
                                    msg: "تم اضافة الشحنة بنجاح"
                                })
                            })
                    })
            } else {
                res.status(400).json({
                    msg: response.data.error
                })
            }
        })
        .catch(err => {
            console.log(err.request)
        })
}
exports.getSaeeSticker = (req, res) => {
    const orderId = req.params.id;
    const waybill = req.params.waybill;
    axios({
        method: 'get',
        url: `https://corporate.saeex.com/deliveryrequest/printsticker/${waybill}`,
        data: {
            secret: process.env.SAEE_KEY
        }
    })
        .then(response => {
            const sticker = response.data;
            res.render('main/dashbord/includes/saee-sticer', {
                data: sticker
            })
        })
        .catch(err => {
            console.log(err)
        })
}