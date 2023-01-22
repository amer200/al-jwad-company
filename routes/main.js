const express = require('express');
const routes = express.Router();
const mainController = require('../controllers/main');

routes.get('/', mainController.getDash);
routes.get('/signup', mainController.getSignUP)

module.exports = routes