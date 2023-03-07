const SaeeOrder = require('../models/saeeorder');

exports.getCreate = (req, res) => {
    res.render('main/dashbord/saee-create-order.ejs', {
        wallet: req.session.store.wallet
    })
}
exports.postCreate = (req, res) => {
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
        p_name: p_name,
        p_city: p_city,
        p_mobile: p_mobile,
        p_streetaddress: p_streetaddress,
        cashondelivery: cashondelivery,
        weight: weight,
        quantity: quantity,
        c_name: c_name,
        c_city: c_city,
        c_streetaddress: c_streetaddress,
        c_mobile: c_mobile
    }
    axios({
        method: 'post',
        url: 'https://www.k-w-h.com/deliveryrequest/new',
        data: o.details
    })
        .then(response => {
            console.log(response.data)
            if (response.data.success) {
                const newOrder = new SaeeOrder({
                    company: "saee",
                    store: req.session.store._id,
                    details: data,
                    response: response.data
                })
                newOrder.save()
                    .then(o => {
                        res.status(200).json({
                            "success": 'تم اضافة الشحنة بنجاح'
                        })
                    })
            } else {
                res.status(400).json({
                    msg: response.data.error
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
}