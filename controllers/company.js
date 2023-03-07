const Company = require('../models/company');
const Pacorder = require('../models/saeeorder');
const Store = require('../models/store');
const aramex = require('aramex-api');
const axios = require('axios');
exports.changeStatus = async (req, res) => {
    const id = req.params.id;
    Company.findById(id)
        .then(c => {
            if (c.status == "disabled") {
                c.status = "active";
            } else {
                c.status = "disabled";
            }
            return c.save()
        })
        .then(c => {
            res.status(200).json({
                msg: `تم تعديل حالة شركة ${c.name}`
            })
        })
        .catch(err => {
            console.log(err)
        })
}
// exports.newSaeeOrder = (req, res) => {
//     const p_name = req.body.p_name;
//     const p_city = req.body.p_city;
//     const p_mobile = req.body.p_mobile;
//     const p_streetaddress = req.body.p_streetaddress;
//     const cashondelivery = req.body.cashondelivery;
//     const weight = req.body.weight;
//     const quantity = req.body.quantity;
//     const c_name = req.body.c_name;
//     const c_city = req.body.c_city;
//     const c_streetaddress = req.body.c_streetaddress;
//     const c_mobile = req.body.c_mobile;
//     console.log(req.body.declared_value);
//     axios({
//         method: 'post',
//         url: 'https://www.k-w-h.com/deliveryrequest/new',
//         data: {
//             secret: process.env.SAEE_KEY,
//             name: req.body.p_name,
//             city: req.body.p_city,
//             mobile: +req.body.p_mobile,
//             streetaddress: req.body.p_streetaddress,
//             cashondelivery: req.body.cashondelivery,
//             weight: +req.body.weight,
//             quantity: +req.body.quantity,
//             c_name: req.body.c_name,
//             c_city: req.body.c_city,
//             c_streetaddress: req.body.c_streetaddress,
//             c_mobile: +req.body.c_mobile,
//             declared_value: +req.body.declared_value
//         }
//     })
//         .then(response => {
//             if (response.data.success) {
//                 const newPacorder = new Pacorder({
//                     company: "saee",
//                     name: c_name,
//                     store: req.session.store._id,
//                     details: {
//                         waybill: response.data.waybill
//                     }
//                 })
//                 newPacorder.save()
//                     .then(o => {
//                         Store.findById(req.session.store._id)
//                             .then(s => {
//                                 s.pacorder.push(o._id)
//                                 return s.save()
//                             })
//                             .then(s => {
//                                 res.status(200).json({
//                                     msg: "تم اضافة الشحنة ",
//                                 })
//                             })
//                     })
//             } else {
//                 console.log(response.data)
//                 res.status(403).json({
//                     msg: response.data.error
//                 })
//             }
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

exports.aramexApi = async (req, res) => {
    try {
        const sh_PersonName = req.body.p_name;
        const sh_CompanyName = 'Gotex';
        const sh_EmailAddress = 'support@go-tex.net';
        const sh_PhoneNumber1 = req.body.p_mobile;
        const sh_Line1 = req.body.p_streetaddress;
        const sh_City = req.body.c_city;
        const sh_CountryCode = 'SAU';
        const weight = req.body.weight;
        const quantity = req.body.quantity;
        /*********************************** */
        const c_PersonName = req.body.c_name;
        const c_PhoneNumber1 = req.body.c_mobile;
        const c_Line1 = req.body.c_streetaddress;
        const c_City = req.body.c_city;
        const c_CountryCode = 'SAU';
        const clientInfo = new aramex.ClientInfo();
        // aramex.Aramex.setClientInfo(clientInfo);

        aramex.Aramex.setConsignee(new aramex.Consignee(
            PersonName = sh_PersonName,
            CompanyName = sh_CompanyName,
            EmailAddress = sh_EmailAddress,
            PhoneNumber1 = sh_PhoneNumber1,
            Line1 = sh_Line1,
            City = sh_City,
            CountryCode = sh_CountryCode));

        aramex.Aramex.setShipper(new aramex.Shipper(
            PersonName = c_PersonName,
            CompanyName = null,
            EmailAddress = null,
            PhoneNumber1 = c_PhoneNumber1,
            PhoneNumber1Ext = null,
            CellPhone = '9661123151',
            Line1 = c_Line1,
            CountryCode = 'SAU',
            City = c_City));

        aramex.Aramex.setThirdParty(new aramex.ThirdParty());

        aramex.Aramex.setDetails(1);

        aramex.Aramex.setDimension();

        aramex.Aramex.setWeight();

        //Creating shipment

        let result = await aramex.Aramex.createShipment([{ PackageType: 'Box', Quantity: +quantity, Weight: { Value: +weight, Unit: 'Kg' }, Comments: null, Reference: null }]);
        console.log(result)
        res.json(result)
    } catch (err) {
        console.log(err)
    }
}