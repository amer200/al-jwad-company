const express = require('express');
const routes = express.Router();
const saeeControllers = require('../controllers/saee');
const saeeMiddle = require('../middlewares/confirmsaeepayment');
const storeAuth = require('../middlewares/store-auth');

routes.get('/create', storeAuth.isAuth, saeeControllers.getCreate);
routes.post('/create', storeAuth.isAuth, saeeMiddle.isConfirm, saeeControllers.postCreate);
routes.get('/saee-print-sticker/:waybill', storeAuth.isAuth, saeeControllers.getSaeeSticker);
module.exports = routes