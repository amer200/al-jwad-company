const express = require('express');
const routes = express.Router();
const companyControllers = require('../controllers/company');
const storeAuth = require('../middlewares/store-auth');

routes.post('/add-new-order', storeAuth.isAuth, companyControllers.aramexApi);
module.exports = routes