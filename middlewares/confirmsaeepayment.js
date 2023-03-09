const Store = require('../models/store');
const Saee = require('../models/saee');
exports.isConfirm = async (req, res, next) => {
    console.log(req.body.cashondelivery)

    if (req.body.cashondelivery == '1') {
        next()
    } else {
        res.status(200).json({
            msg: "عذرا حاليا الدفع الاونلاين غير متاح"
        })
        // const saee = await Saee.findOne();
        // const weight = req.body.weight;
        // Store.findById(req.session.store._id)
        //     .then(s => {
        //         if (weight > 15) {
        //             if ((s.wallet - (saee.price + (3 * (weight - 15)))) > 0) {
        //                 next()
        //             } else {
        //                 console.log("m1")
        //                 res.status(200).json({
        //                     msg: "الرصيد لا يكفي !!"
        //                 })
        //             }
        //         } else {
        //             if ((s.wallet - saee.price) > 0) {
        //                 next()
        //             } else {
        //                 console.log("m")
        //                 res.status(200).json({
        //                     msg: "الرصيد لا يكفي !!"
        //                 })
        //             }
        //         }
    // })
    //         .catch (err => {
    //     console.log(err)
    // })
}
}