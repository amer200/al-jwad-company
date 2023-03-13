const Store = require("../models/store");
const axios = require('axios');
const aramex = require("../models/aramex");
const aramexApi = require('aramex-api');
exports.getAramexCreate = (req, res) => {
    res.render('main/dashbord/aramex-create.ejs', {
        wallet: req.session.store.wallet
    })
}
exports.postCreates = async (req, res) => {
    // const aramex = await aramex.findOne();
    console.log(req.body);
    const sh_line1 = req.body.sh_line1;
    const sh_city = req.body.sh_city;
    const sh_name = req.body.sh_name;
    const sh_mobile = req.body.sh_mobile;
    const c_line1 = req.body.c_line1;
    const c_city = req.body.c_city;
    const c_name = req.body.c_name;
    const c_mobile = req.body.c_mobile;
    const weight = req.body.weight;
    const quantity = req.body.quantity;
    clientInfo = new aramexApi.ClientInfo({
        UserName: process.env.AR_USERNAME,
        Password: process.env.AR_PASSWORD,
        Version: 'v1.0',
        AccountNumber: process.env.AR_ACCOUNT,
        AccountPin: process.env.AR_PIN,
        AccountEntity: 'JED',
        AccountCountryCode: 'SA'
    });
    aramexApi.Aramex.setClientInfo(clientInfo);

    aramexApi.Aramex.setConsignee(new aramexApi.Consignee({
        PersonName: c_name,
        PhoneNumber1: c_mobile,
        Line1: c_line1,
        Line2: '',
        City: c_city,
        CountryCode: 'SA'
    }));

    aramexApi.Aramex.setShipper(new aramexApi.Shipper({
        PersonName : sh_name,
        PhoneNumber1 : sh_mobile,        
        Line1 : sh_line1,
        CountryCode : 'SA',
        City : sh_city
    }));

    aramexApi.Aramex.setThirdParty(new aramexApi.ThirdParty());

    aramexApi.Aramex.setDetails(1);

    aramexApi.Aramex.setDimension();

    aramexApi.Aramex.setWeight();

    //Creating shipment

    let result = await aramexApi.Aramex.createShipment([{ PackageType: 'Box', Quantity: quantity, Weight: { Value: weight, Unit: 'Kg' }, Comments: 'Docs', Reference: '' }]);
    console.log(result)
}
exports.postCreate = async (req, res) => {
    const Aramex = await aramex.findOne();
    const sh_line1 = req.body.sh_line1;
    const sh_city = req.body.sh_city;
    const sh_name = req.body.sh_name;
    const sh_mobil = req.body.sh_mobil;
    const c_line1 = req.body.c_line1;
    const c_city = req.body.c_city;
    const c_name = req.body.c_name;
    const c_mobile = req.body.c_mobile;
    const weight = req.body.weight;
    const quantity = req.body.quantity;
    var date = new Date();
    var data = JSON.stringify(
        {
            "ClientInfo": {
                "UserName": process.env.AR_USERNAME,
                "Password": process.env.AR_PASSWORD,
                "Version": "v1.0",
                "AccountNumber": process.env.AR_ACCOUNT,
                "AccountPin": process.env.AR_PIN,
                "AccountEntity": "JED",
                "AccountCountryCode": "SA",
                "Source": 24
            },
            "LabelInfo": {
                "ReportID": 9729,
                "ReportType": "URL"
            },
            "Shipments": [
                {
                    "Reference1": "",
                    "Reference2": "",
                    "Reference3": "",
                    "Shipper": {
                        "Reference1": "",
                        "Reference2": "",
                        "AccountNumber": process.env.AR_ACCOUNT,
                        "PartyAddress": {
                            "Line1": sh_line1,
                            "Line2": "",
                            "Line3": "",
                            "City": sh_city,
                            "StateOrProvinceCode": "",
                            "CountryCode": "SA",
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
                            "PersonName": sh_name,
                            "Title": "",
                            "PhoneNumber1": sh_mobil,
                            "PhoneNumber1Ext": "",
                            "PhoneNumber2": "",
                            "PhoneNumber2Ext": "",
                            "FaxNumber": "",
                            // "CellPhone": "25655666",
                            // "EmailAddress": "dosan@gmail.com",
                            "Type": ""
                        }
                    },
                    "Consignee": {
                        "Reference1": "",
                        "Reference2": "",
                        "AccountNumber": "",
                        "PartyAddress": {
                            "Line1": c_line1,
                            "Line2": "",
                            "Line3": "",
                            "City": c_city,
                            "StateOrProvinceCode": "",
                            "PostCode": "514516",
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
                            "PersonName": c_name,
                            "Title": "",
                            "PhoneNumber1": c_mobile,
                            "PhoneNumber1Ext": "",
                            "PhoneNumber2": "",
                            "PhoneNumber2Ext": "",
                            "FaxNumber": "",
                            "Type": ""
                        }
                    },

                    "ShippingDateTime": `\/Date(${Date.now()})\/`,
                    "DueDate": `\/Date(${date.setDate(date.getDate() + 7)})\/`,
                    "Comments": "",
                    "PickupLocation": "",
                    "OperationsInstructions": "",
                    "AccountingInstrcutions": "",
                    "Details": {
                        "Dimensions": null,
                        "ActualWeight": {
                            "Unit": "KG",
                            "Value": weight
                        },
                        "ChargeableWeight": null,
                        "DescriptionOfGoods": "Books",
                        "GoodsOriginCountry": "IN",
                        "NumberOfPieces": quantity,
                        "ProductGroup": "EXP",
                        "ProductType": "PPX",
                        "PaymentType": "c",
                        "PaymentOptions": "",
                        "CustomsValueAmount": {
                            "CurrencyCode": "SAR",
                            "Value": 200
                        },
                        "CashOnDeliveryAmount": "34",
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
                                }
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
            "Transaction": {
                "Reference1": "",
                "Reference2": "",
                "Reference3": "",
                "Reference4": "",
                "Reference5": ""
            }
        }
    );

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://ws.aramex.net/ShippingAPI.V2/Shipping/Service_1_0.svc/json/CreateShipments',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(response => {
            // if (response.data.success) {
            console.log(response.data.Shipments[0])
            //     if (cashondelivery) {
            //         const newOrder = new AramexOrder({
            //             company: "Aramex",
            //             store: req.session.store._id,
            //             details: data,
            //             response: response.data
            //         })
            //         newOrder.save()
            //             .then(o => {
            //                 console.log(o.response)
            //                 res.status(200).json({
            //                     msg: "تم اضافة الشحنة بنجاح"
            //                 })
            //             })
            //     } else {
            //         Store.findById(req.session.store._id)
            //             .then(s => {
            //                 if (weight > 15) {
            //                     s.wallet = (s.wallet - (Aramex.price + (3 * (weight - 15))));
            //                     req.session.store.wallet = s.wallet
            //                 } else {
            //                     s.wallet = (s.wallet - Aramex.price);
            //                     req.session.store.wallet = s.wallet
            //                 }
            //                 return s.save();
            //             })
            //             .then(s => {
            //                 const newOrder = new AramexOrder({
            //                     company: "Aramex",
            //                     store: req.session.store._id,
            //                     details: data,
            //                     response: response.data
            //                 })
            //                 newOrder.save()
            //                     .then(o => {
            //                         res.status(200).json({
            //                             msg: "تم اضافة الشحنة بنجاح"
            //                         })
            //                     })
            //             })
            //     }
            // } else {
            //     res.status(400).json({
            //         msg: response.data.error
            //     })
            // }
        })
        .catch(err => {
            console.log(err)
        })
}