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
    clientInfo = new aramex.ClientInfo();
    aramex.Aramex.setClientInfo(clientInfo);

    aramex.Aramex.setConsignee(new aramex.Consignee({
        "Reference1": "",
        "Reference2": "",
        "AccountNumber": "",
        "PartyAddress": {
            "Line1": "1, bhat ji ki badi",
            "Line2": "",
            "Line3": "",
            "City": "Dubai",
            "StateOrProvinceCode": "",
            "PostCode": "",
            "CountryCode": "AE",
            "Longitude": 0,
            "Latitude": 0,
            "BuildingNumber": "",
            "BuildingName": "",
            "Floor": "",
            "Apartment": "",
            "POBox": null,
            "Description": ""
        },
        "Contact": {
            "Department": "",
            "PersonName": "Viki",
            "Title": "",
            "CompanyName": "hgh pvt ltd",
            "PhoneNumber1": "8454097313",
            "PhoneNumber1Ext": "",
            "PhoneNumber2": "",
            "PhoneNumber2Ext": "",
            "FaxNumber": "",
            "CellPhone": "8454097313",
            "EmailAddress": "vi@gmail.com",
            "Type": ""
        }
    }));

    aramex.Aramex.setShipper(new aramex.Shipper({
        "Reference1": "",
        "Reference2": "",
        "AccountNumber": "60531487",
        "PartyAddress": {
            "Line1": "dwayne streey 123, jhsg",
            "Line2": "",
            "Line3": "",
            "City": "Makkah",
            "StateOrProvinceCode": "",
            "PostCode": "24211",
            "CountryCode": "SAU",
            "Longitude": 0,
            "Latitude": 0,
            "BuildingNumber": null,
            "BuildingName": null,
            "Floor": null,
            "Apartment": null,
            "POBox": null,
            "Description": null
        },
        "Contact": {
            "Department": "",
            "PersonName": "Amer Mostafa",
            "Title": "",
            "CompanyName": "jha pvt",
            "PhoneNumber1": "+201152306375",
            "PhoneNumber1Ext": "",
            "PhoneNumber2": "",
            "PhoneNumber2Ext": "",
            "FaxNumber": "",
            "CellPhone": "25655666",
            "EmailAddress": "amermostaafa@gmai;.com",
            "Type": ""
        }
    }));

    aramex.Aramex.setThirdParty(new aramex.ThirdParty({
        "Reference1": "",
        "Reference2": "",
        "AccountNumber": "",
        "PartyAddress": {
            "Line1": "",
            "Line2": "",
            "Line3": "",
            "City": "",
            "StateOrProvinceCode": "",
            "PostCode": "",
            "CountryCode": "",
            "Longitude": 0,
            "Latitude": 0,
            "BuildingNumber": null,
            "BuildingName": null,
            "Floor": null,
            "Apartment": null,
            "POBox": null,
            "Description": null
        },
        "Contact": {
            "Department": "",
            "PersonName": "Amer",
            "Title": "",
            "CompanyName": "",
            "PhoneNumber1": "",
            "PhoneNumber1Ext": "",
            "PhoneNumber2": "",
            "PhoneNumber2Ext": "",
            "FaxNumber": "",
            "CellPhone": "",
            "EmailAddress": "",
            "Type": ""
        }
    }));

    aramex.Aramex.setDetails(1);

    aramex.Aramex.setDimension();

    aramex.Aramex.setWeight();

    //Creating shipment

    let result = await aramex.Aramex.createShipment([{ PackageType: 'Box', Quantity: 2, Weight: { Value: 0.5, Unit: 'Kg' }, Comments: 'Docs', Reference: '' }]);
    res.json(result)
    //tracking shipment let result = await aramex.Aramex.track(['3915342793', '3915342826']);
}