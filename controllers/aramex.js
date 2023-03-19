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
        PersonName: sh_name,
        PhoneNumber1: sh_mobile,
        Line1: sh_line1,
        CountryCode: 'SA',
        City: sh_city
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
    const axios = require('axios');
    let data = JSON.stringify({
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
                        "Line1": "dwayne streey 123, jhsg",
                        "Line2": "",
                        "Line3": "",
                        "City": "Mumbai",
                        "StateOrProvinceCode": "",
                        "PostCode": "400093",
                        "CountryCode": "IN",
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
                        "PersonName": "Dosan",
                        "Title": "",
                        "CompanyName": "jha pvt",
                        "PhoneNumber1": "25655666",
                        "PhoneNumber1Ext": "",
                        "PhoneNumber2": "",
                        "PhoneNumber2Ext": "",
                        "FaxNumber": "",
                        "CellPhone": "25655666",
                        "EmailAddress": "dosan@gmail.com",
                        "Type": ""
                    }
                },
                "Consignee": {
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
                "ShippingDateTime": `/Date(${new Date().setDate(0)})/`,
                "DueDate": `/Date(${new Date().setDate(1)})/`,
                "Comments": "",
                "PickupLocation": "",
                "OperationsInstructions": "",
                "AccountingInstrcutions": "",
                "Details": {
                    "Dimensions": null,
                    "ActualWeight": {
                        "Unit": "KG",
                        "Value": 2
                    },
                    "ChargeableWeight": null,
                    "DescriptionOfGoods": "Books",
                    "GoodsOriginCountry": "IN",
                    "NumberOfPieces": 1,
                    "ProductGroup": "EXP",
                    "ProductType": "PPX",
                    "PaymentType": "P",
                    "PaymentOptions": "",
                    "CustomsValueAmount": {
                        "CurrencyCode": "USD",
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
                                "CurrencyCode": "USD",
                                "Value": 10
                            },
                            "Comments": "Ravishing Gold Facial Kit Long Lasting Shining Appearance For All Skin Type 125g",
                            "GoodsDescription": "new Gold Facial Kit Long  Shining Appearance",
                            "Reference": "",
                            "CommodityCode": "98765432"
                        }
                    ],
                    "AdditionalProperties": [
                        {
                            "CategoryName": "CustomsClearance",
                            "Name": "ShipperTaxIdVATEINNumber",
                            "Value": "123456789101"
                        },
                        {
                            "CategoryName": "CustomsClearance",
                            "Name": "ConsigneeTaxIdVATEINNumber",
                            "Value": "987654321012"
                        },
                        {
                            "CategoryName": "CustomsClearance",
                            "Name": "TaxPaid",
                            "Value": "1"
                        },
                        {
                            "CategoryName": "CustomsClearance",
                            "Name": "InvoiceDate",
                            "Value": "08/17/2020"
                        },
                        {
                            "CategoryName": "CustomsClearance",
                            "Name": "InvoiceNumber",
                            "Value": "Inv123456"
                        },
                        {
                            "CategoryName": "CustomsClearance",
                            "Name": "TaxAmount",
                            "Value": "120.52"
                        },
                        {
                            "CategoryName": "CustomsClearance",
                            "Name": "IOSS",
                            "Value": "1098494352"
                        },
                        {
                            "CategoryName": "CustomsClearance",
                            "Name": "ExporterType",
                            "Value": "UT"
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
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://ws.dev.aramex.net/shippingapi.v2/shipping/service_1_0.svc/json',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });

}