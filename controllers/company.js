const Company = require('../models/company');
const Pacorder = require('../models/pacorder');
const aramex = require('aramex-api');
const axios = require('axios');
const { response } = require('express');
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
exports.newSaeeOrder = (req, res) => {
    console.log(req.body)
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
    Company.findOne({ name: "saee" })
        .then(c => {
            const order = new Pacorder({
                company: c._id,
                sender: {
                    id: req.session.store._id,
                    name: p_name,
                    mobile: +p_mobile,
                    address: p_streetaddress,
                    city: p_city

                },
                package: {
                    weight: weight,
                    quantity: quantity,
                },
                clints: {
                    name: c_name,
                    mobile: +c_mobile,
                    address: c_streetaddress,
                    city: c_city
                }
            })
            return order.save()
        })
        .then(o => {
            axios({
                method: 'post',
                url: 'https://www.k-w-h.com/deliveryrequest/new',
                data: {
                    secret: '$2y$10$.TnZcg0LUirhXlUzcmSkEOvUIAciQE9nSmfOL8SYEkJf6xEgYP0pK',
                    name: req.body.p_name,
                    city: req.body.p_city,
                    mobile: +req.body.p_mobile,
                    streetaddress: req.body.p_streetaddress,
                    cashondelivery: req.body.cashondelivery,
                    weight: +req.body.weight,
                    quantity: +req.body.quantity,
                    c_name: req.body.c_name,
                    c_city: req.body.c_city,
                    c_streetaddress: req.body.c_streetaddress,
                    c_mobile: +req.body.c_mobile
                }
            })
                .then(function (response) {
                    console.log(response)
                    res.status(200);
                })
        })
        .catch(err => {
            console.log(err)
            res.status(500)
        })
}
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