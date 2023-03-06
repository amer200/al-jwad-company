const Company = require('../models/company');
const Pacorder = require('../models/pacorder');
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
exports.newSaeeOrder = (req, res) => {
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
                    secret: '$2y$10$eYSXofhGvjNiG4wO.a0m6OzCrYmYdBrV2NPpD4ih2Ib03G9o2E6we',
                    p_name: req.body.p_name,
                    p_city: req.body.p_city,
                    p_mobile: +req.body.p_mobile,
                    p_streetaddress: req.body.p_streetaddress,
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
                    console.log(response);
                })
        })
        .catch(err => {
            console.log(err)
        })
}
exports.aramexApi = async (req, res) => {
    try {
        clientInfo = new aramex.ClientInfo();

        aramex.Aramex.setClientInfo(clientInfo);

        aramex.Aramex.setConsignee(new aramex.Consignee({
            'Reference1': 'Ref 333333',
            'Reference2': 'Ref 444444',
            'AccountNumber': '',
            'PartyAddress': {
                'Line1': '15 ABC St',
                'Line2': '',
                'Line3': '',
                'City': 'Dubai',
                'StateOrProvinceCode': '',
                'PostCode': '',
                'CountryCode': 'AE'
            },
            'Contact': {
                'Department': '',
                'PersonName': 'Mazen',
                'Title': '',
                'CompanyName': 'Aramex',
                'PhoneNumber1': '6666666',
                'PhoneNumber1Ext': '155',
                'PhoneNumber2': '',
                'PhoneNumber2Ext': '',
                'FaxNumber': '',
                'CellPhone': '',
                'EmailAddress': 'mazen@aramex.com',
                'Type': ''
            }
        }));

        aramex.Aramex.setShipper(new aramex.Shipper({
            'Reference1': 'Ref 111111',
            'Reference2': 'Ref 222222',
            'AccountNumber': '20016',
            'PartyAddress': {
                'Line1': 'Mecca St',
                'Line2': '',
                'Line3': '',
                'City': 'Amman',
                'StateOrProvinceCode': '',
                'PostCode': '',
                'CountryCode': 'Jo'
            },
            'Contact': {
                'Department': '',
                'PersonName': 'Michael',
                'Title': '',
                'CompanyName': 'Aramex',
                'PhoneNumber1': '5555555',
                'PhoneNumber1Ext': '125',
                'PhoneNumber2': '',
                'PhoneNumber2Ext': '',
                'FaxNumber': '',
                'CellPhone': '07777777',
                'EmailAddress': 'michael@aramex.com',
                'Type': ''
            }
        }));

        aramex.Aramex.setThirdParty(new aramex.ThirdParty());

        aramex.Aramex.setDetails(1);

        aramex.Aramex.setDimension();

        aramex.Aramex.setWeight();
        let result = await aramex.Aramex.createShipment([{ PackageType: 'Box', Quantity: 2, Weight: { Value: 0.5, Unit: 'Kg' }, Comments: 'Docs', Reference: '' }]);
        console.log(result);
    } catch (err) {
        console.log(err)
    }
}