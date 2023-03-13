const express = require('express');
const routes = express.Router();
const aramexController = require('../controllers/aramex');
const storeAuth = require('../middlewares/store-auth');

routes.get('/create', aramexController.getAramexCreate);
routes.post('/create', aramexController.postCreate)
// routes.post('/add-new-order', companyControllers.aramexApi);
module.exports = routes