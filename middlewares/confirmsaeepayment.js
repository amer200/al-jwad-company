const Store = require('../models/store');
const Saee = require('../models/saee');
exports.isConfirm = async (req, res, next) => {
    const saee = await Saee.findOne();
    const weight = req.body.weight;
    Store.findById(req.session.store._id)
        .then(s => {
            if (weight > 15) {
                if ((s.wallet - (saee.price + (3 * (weight - 15)))) > 0) {
                    s.wallet = (s.wallet - (saee.price + (3 * (weight - 15))));
                    s.save()
                        .then(s => {
                            next()
                        })
                } else {
                    console.log("m1")
                    res.status(200).json({
                        msg: "الرصيد لا يكفي !!"
                    })
                }
            } else {
                if ((s.wallet - saee.price) > 0) {
                    s.wallet = s.wallet - saee.price;
                    s.save()
                        .then(s => {
                            next()
                        })
                } else {
                    console.log("m")
                    res.status(200).json({
                        msg: "الرصيد لا يكفي !!"
                    })
                }
            }
        })
        .catch(err => {
            console.log(err)
        })

}