const express = require('express');
const routes = express.Router();
const adminControllers = require('../controllers/admin');
const companyControllers = require('../controllers/company');
routes.get('/', adminControllers.getIndex);
routes.get('/remove-store/:id', adminControllers.removeStore);
routes.post('/send-store-email/:id', adminControllers.sendStoreEmail);
routes.get('/change-company-status/:id', companyControllers.changeStatus);
module.exports = routes;