const express = require('express');
const routes = express.Router();
const mainController = require('../controllers/main');

routes.get('/', mainController.getDash);


module.exports = routes