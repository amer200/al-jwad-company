const Store = require("../models/store");
const axios = require('axios');
const Aramex = require("../models/aramex");

exports.getAramexCreate = (req, res) => {
    res.render('main/dashbord/aramex-create.ejs', {
        wallet: req.session.store.wallet
    })
}
exports.postCreate = async (req, res) => {
    const Aramex = await Aramex.findOne();
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
        ClientInfo: {
            UserName: process.env.AR_USERNAME,
            Password: process.env.AR_PASSWORD,
            Version: "v1.0",
            AccountNumber: process.env.AR_ACCOUNT,
            AccountPin: process.env.AR_PIN,
            AccountEntity: "JED",
            AccountCountryCode: "SA",
            "Source": 24
        },
        LabelInfo: {
            ReportID: 9729,
            ReportType: "URL"
        },
        Shipments: [
            {
                Shipper: {
                    AccountNumber: process.env.AR_ACCOUNT,
                    PartyAddress: {
                        Line1: p_streetaddress,
                        City: p_city,
                        CountryCode: "SA",
                        Longitude: 0,
                        Latitude: 0,
                        BuildingNumber: null,
                        BuildingName: null,
                        Floor: null,
                        Apartment: null,
                        POBox: null,
                        Description: null
                    },
                    Contact: {
                        PersonName: p_name,
                        PhoneNumber1: p_mobile,
                        // "CellPhone": "25655666",
                    }
                },
                Consignee: {
                    PartyAddress: {
                        Line1: c_streetaddress,
                        City: c_city,
                        CountryCode: "SA",
                        Longitude: 0,
                        Latitude: 0,
                        POBox: null,
                    },
                    "Contact": {
                        PersonName: c_name,
                        PhoneNumber1: c_mobile,
                        // CellPhone: "8454097313",
                        // "EmailAddress": "vi@gmail.com",
                        // "Type": ""
                    }
                },
                "ThirdParty": {
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
                        "PersonName": "",
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
                },
                ShippingDateTime: "\/Date(1678611305000)\/",
                Details: {
                    Dimensions: null,
                    ActualWeight: {
                        Unit: "KG",
                        Value: weight
                    },
                    ChargeableWeight: null,
                    NumberOfPieces: quantity,
                    PaymentType: "c",
                    CustomsValueAmount: {
                        "CurrencyCode": "SAR",
                        "Value": 200
                    },
                    "CashOnDeliveryAmount": null,
                    "InsuranceAmount": null,
                    "CashAdditionalAmount": null,
                    "CashAdditionalAmountDescription": "",
                    "CollectAmount": null,
                    "Services": "",
                    "Items": [
                        {
                            "PackageType": "Box",
                            "Quantity": "1",
                            "Weight": null,
                            "CustomsValue": {
                                "CurrencyCode": "SAR",
                                "Value": 10
                            },
                            "Comments": "Ravishing Gold Facial Kit Long Lasting Shining Appearance For All Skin Type 125g",
                            "GoodsDescription": "new Gold Facial Kit Long  Shining Appearance",
                            "Reference": "",
                            "CommodityCode": "98765432"
                        }
                    ]
                },
                "Attachments": [],
                "ForeignHAWB": "",
                "TransportType ": 0,
                "PickupGUID": "",
                "Number": null,
                "ScheduledDelivery": null
            }
        ],
        name: p_name,
        city: p_city,
        mobile: p_mobile,
        streetaddress: p_streetaddress,
        cashondelivery: cashondelivery,
        weight: weight,
        quantity: quantity,
        c_name: c_name,
        c_city: c_city,
        c_streetaddress: c_streetaddress,
        c_mobile: c_mobile
    }
    axios({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        url: 'https://ws.aramex.net/ShippingAPI.V2/Shipping/Service_1_0.svc/json/CreateShipments',
        data: data
    })
        .then(response => {
            if (response.data.success) {
                if (cashondelivery) {
                    const newOrder = new AramexOrder({
                        company: "Aramex",
                        store: req.session.store._id,
                        details: data,
                        response: response.data
                    })
                    newOrder.save()
                        .then(o => {
                            res.status(200).json({
                                msg: "تم اضافة الشحنة بنجاح"
                            })
                        })
                } else {
                    Store.findById(req.session.store._id)
                        .then(s => {
                            if (weight > 15) {
                                s.wallet = (s.wallet - (Aramex.price + (3 * (weight - 15))));
                                req.session.store.wallet = s.wallet
                            } else {
                                s.wallet = (s.wallet - Aramex.price);
                                req.session.store.wallet = s.wallet
                            }
                            return s.save();
                        })
                        .then(s => {
                            const newOrder = new AramexOrder({
                                company: "Aramex",
                                store: req.session.store._id,
                                details: data,
                                response: response.data
                            })
                            newOrder.save()
                                .then(o => {
                                    res.status(200).json({
                                        msg: "تم اضافة الشحنة بنجاح"
                                    })
                                })
                        })
                }
            } else {
                res.status(400).json({
                    msg: response.data.error
                })
            }
        })
        .catch(err => {
            console.log(err.request)
        })
}