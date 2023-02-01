const Strore = require('../models/store');
const Client = require('../models/client');
const telr = require("telr-nodejs")(process.env.TELR_AUTH, process.env.TELR_ID, {
    isTest: 1,
    currency: "sar"
});
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
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
    const storeId = req.session.store._id;
    const amount = req.body.amount;
    telr.order({
        orderId: storeId,
        amount: amount,
        returnUrl: "http://your-return-url.com",
        declineUrl: "http://url-to-call-in-decline-transaction.com",
        cancelUrl: "http://url-to-call-in-cancel-transaction.com",
        description: "test transiction"
    }, function (err, response) {
        console.log(response);
    });
}