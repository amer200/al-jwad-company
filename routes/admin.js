const express = require('express');
const routes = express.Router();
const adminControllers = require('../controllers/admin');

routes.get('/', adminControllers.getIndex);
routes.get('/remove-store/:id', adminControllers.removeStore);
routes.post('/send-store-email/:id', adminControllers.sendStoreEmail);
module.exports = routes;