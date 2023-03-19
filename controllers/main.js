const Strore = require('../models/store');
const SaeeOrder = require('../models/saeeorder');
const Client = require('../models/client');
const Order = require('../models/order');
const bcrypt = require('bcryptjs');
const ejs = require('ejs');
const salt = bcrypt.genSaltSync(10);
const nodemailer = require('nodemailer');
const company = require('../models/company');
const axios = require('axios');
const telr = require("telr-nodejs")(process.env.TELR_AUTH, process.env.TELR_ID, {
    isTest: 0,
    currency: "SAR"
});
const code = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
/* nodemailer config */
const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'user@gmail.com',
        pass: 'pass'
    }
});
/*************************** */
exports.getDash = async (req, res) => {
    const Company = await company.find();
    const Store = await Strore.findById(req.session.store._id)
    console.log(Store)
    res.render('main/dashbord/index', {
        companys: Company,
        wallet: req.session.store.wallet
    })
}
exports.getPac = async (req, res) => {
    let orders = [];
    const saeeOrders = await SaeeOrder.find({ store: req.session.store._id });
    orders = [...saeeOrders];
    console.log(orders);
    res.render('main/dashbord/package', {
        orders: orders,
        wallet: req.session.store.wallet
    })
}
/**************** */
exports.getClintsPage = async (req, res) => {
    const clients = await Client.find({ store: req.session.store._id });
    res.render('main/dashbord/clints', {
        clients: clients,
        wallet: req.session.store.wallet
    })
}
exports.addClient = (req, res) => {
    const name = req.body.name;
    const mobile = req.body.number;
    const email = req.body.email;
    const address = req.body.street;
    const location = req.body.location;
    const details = req.body.details;
    const storeId = req.session.store._id;
    Client.findOne({ name: name })
        .then(client => {
            if (client) {
                if (client.store.toString() == storeId.toString()) {
                    res.send('هذا العميل موجود من قبل!')
                } else {
                    const newClient = new Client({
                        name: name,
                        mobile: mobile,
                        email: email,
                        address: address,
                        location: location,
                        details: details,
                        store: storeId
                    })
                    newClient.save()
                        .then(c => {
                            res.redirect('/clints')
                        })
                }
            } else {
                const newClient = new Client({
                    name: name,
                    mobile: mobile,
                    email: email,
                    address: address,
                    location: location,
                    details: details,
                    store: storeId
                })
                newClient.save()
                    .then(c => {
                        res.redirect('/clints')
                    })
            }
        })
        .catch(err => {
            console.log(err)
        })

}
exports.editClient = (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const mobile = req.body.number;
    const email = req.body.email;
    const address = req.body.street;
    const location = req.body.location;
    const details = req.body.details;
    Client.findById(id)
        .then(c => {
            c.name = name;
            c.mobile = mobile;
            c.email = email;
            c.address = address;
            c.location = location;
            c.details = details;
            return c.save()
        })
        .then(c => {
            res.redirect('/clints')
        })
        .catch(err => {
            console.log(err)
        })
}
exports.removeClient = (req, res) => {
    const id = req.params.id;
    Client.findByIdAndRemove(id)
        .then(c => {
            res.send('ok')
        })
        .catch(err => {
            console.log(err)
        })
}
exports.clientSearch = async (req, res) => {
    let payload = req.body.payload.trim();
    let search = await Client.find({ name: { $regex: new RegExp(payload + '.*', 'i') } });
    search = search.slice(0, 10);
    res.send({
        payload: search
    })
}
/******************************************************************* */
exports.getSignUP = (req, res) => {
    res.render('main/dashbord/signup', {
        msg: false
    })
}
exports.postSignUp = (req, res) => {
    const name = req.body.stroreName;
    const mobile = req.body.number;
    const email = req.body.email;
    const password = req.body.password;
    const address = req.body.street;
    const location = req.body.location;
    const hash = bcrypt.hashSync(password, salt);
    Strore.findOne({ email: email })
        .then(s => {
            if (s) {
                res.render('main/dashbord/signup', {
                    msg: 'البريد الالكتروني مستخدم من قبل !'
                })
            } else {
                const newStore = new Strore({
                    name: name,
                    mobile: mobile,
                    email: email,
                    password: hash,
                    address: address,
                    location: location,
                    wallet: 0
                })
                newStore.save()
                    .then(resu => {

                        res.redirect('/')
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        })
        .catch(err => {
            console.log(err)
        })
}
exports.postLogin = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    Strore.findOne({ email: email })
        .then(store => {
            if (store) {
                if (bcrypt.compareSync(password, store.password)) {
                    req.session.store = store;
                    res.redirect('/')
                } else {
                    res.render('main/dashbord/login', {
                        msg: 'كلمة المرور خطاء!'
                    })
                }
            } else {
                res.render('main/dashbord/login', {
                    msg: 'البريد الاكتروني غير موجود !'
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
}

exports.getLogin = (req, res) => {
    res.render('main/dashbord/login', {
        msg: false
    })
}
exports.logOut = (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/')
    })
}
/*****wallet **********************************************************/
exports.addFund = (req, res) => {
    const amount = req.body.amount;
    telr.order({
        orderId: new Date().valueOf(),
        amount: amount,
        returnUrl: "https://dashboard.go-tex.net/check-order",
        declineUrl: "https://dashboard.go-tex.net/check-order",
        cancelUrl: "https://dashboard.go-tex.net/check-order",
        description: "add to wallet"
    }, function (err, createRes) {
        console.log(createRes);
        const order = new Order({
            store: req.session.store._id,
            amount: amount,
            status: 0,
            ref: createRes.order.ref,
            url: createRes.order.url,
            cheked: 0
        })
        order.save()
            .then(o => {
                req.session.orderRef = o.ref;
                res.redirect(o.url);
            })
            .catch(err => {
                console.log(err)
            })
    });
}
exports.checkOrder = (req, res) => {
    if (req.session.orderRef) {
        Order.findOne({ ref: req.session.orderRef })
            .then(o => {
                if (!o.cheked) {
                    telr.status(req.session.orderRef
                        , function (err, response) {
                            if (response.order.status.text == 'Paid') {
                                Strore.findById(req.session.store._id)
                                    .then(s => {
                                        s.wallet = s.wallet + +response.order.amount;
                                        s.save()
                                            .then(s => {
                                                o.cheked = 1;
                                                return o.save()
                                            })
                                            .then(o => {
                                                req.session.store.wallet = s.wallet;
                                                res.redirect('/')
                                            })
                                    })
                            }
                        });
                } else {
                    res.send(' لم تنجح عملية الدفع !')
                }
            })
    } else {
        res.send('!note found')
    }
}
/* forget password */
exports.getforgetPass = (req, res) => {
    res.render('main/dashbord/forget-pass');
}
exports.postForgetPassword = (req, res) => {
    const email = req.body.email;

    Strore.findOne({ email: email })
        .then(s => {
            if (s) {
                s.code = code(50);
                return s.save();
            } else {
                return false
            }
        })
        .then(s => {
            if (s) {
                ejs.renderFile(__dirname + '/reset-pass-email.ejs', { name: s.name, code: s.code }, (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        var mailOptions = {
                            from: 'support@gotex.com',
                            to: email,
                            subject: 'reset your password',
                            html: data
                        };

                        transport.sendMail(mailOptions, (error, info) => {
                            if (error) {
                                return console.log(error);
                            }
                            console.log('Message sent: %s', info.messageId);
                        });
                    }
                });
                res.send(`تم ارسال رسالة لاستعادة كلمة المرور على البريد : ${email}`)
            } else {
                res.render('main/dashbord/forget-pass')
            }
        })
        .catch(err => {
            console.log(err)
        })
}
exports.getResetPass = (req, res) => {
    const code = req.params.code;
    res.render('main/dashbord/reset-pass', {
        code: code
    })
}
exports.postResetPass = (req, res) => {
    const code = req.params.code;
    const password = req.body.password;
    const hash = bcrypt.hashSync(password, salt);
    Strore.findOne({ code: code })
        .then(s => {
            if (s) {
                s.password = hash;
                return s.save();
            } else {
                return false
            }
        })
        .then(s => {
            if (s) {
                res.redirect('/login');
            } else {
                res.send('err')
            }
        })
        .catch(err => {
            console.log(err);
        })
}
/*********************** */
exports.getCities = (req, res) => {
    axios({
        method: 'get',
        url: `https://corporate.k-w-h.com/deliveryrequest/getallcities`,
        data: {
            secret: process.env.SAEE_KEY
        }
    })
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
}