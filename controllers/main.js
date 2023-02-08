const Strore = require('../models/store');
const Client = require('../models/client');
const Order = require('../models/order');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
var telr = require("telr-nodejs")('Vb8kW-zPQF9@pZX6', "28017", {
    isTest: 1,
    currency: "SAR"
});
exports.getDash = async (req, res) => {
    const clients = await Client.find({ store: req.session.store._id });
    res.render('main/dashbord/index', {
        clients: clients
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
                            res.redirect('/')
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
                        res.redirect('/')
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
            res.redirect('/')
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
    res.render('main/dashbord/signup')
}
exports.postSignUp = (req, res) => {
    const name = req.body.stroreName;
    const mobile = req.body.number;
    const email = req.body.email;
    const password = req.body.password;
    const address = req.body.street;
    const location = req.body.location;
    const hash = bcrypt.hashSync(password, salt);
    const newStore = new Strore({
        name: name,
        mobile: mobile,
        email: email,
        password: hash,
        address: address,
        location: location
    })
    newStore.save()
        .then(resu => {
            res.redirect('/')
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
        returnUrl: "http://localhost:3000/",
        declineUrl: "http://url-to-call-in-decline-transaction.com",
        cancelUrl: "http://url-to-call-in-cancel-transaction.com",
        description: "add to wallet"
    }, function (err, createRes) {
        console.log(createRes);
        const order = new Order({
            store: req.session.store._id,
            amount: amount,
            status: 0,
            ref: createRes.order.ref,
            url: createRes.order.url
        })
        order.save()
            .then(o => {
                res.redirect(o.url);
            })
            .catch(err => {
                console.log(err)
            })
    });
}