const express = require('express');
const routes = express.Router();
const adminControllers = require('../controllers/admin');

routes.get('/', adminControllers.getIndex);
routes.get('/remove-store/:id', adminControllers.removeStore);
module.exports = routes;