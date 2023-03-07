const express = require('express');
const routes = express.Router();
const mainController = require('../controllers/main');
const storeAuth = require('../middlewares/store-auth');
/**clients */
routes.get('/', storeAuth.isAuth, mainController.getDash);
routes.post('/add-client', storeAuth.isAuth, mainController.addClient);
routes.post('/edit-client/:id', storeAuth.isAuth, mainController.editClient);
routes.get('/remove-client/:id', storeAuth.isAuth, mainController.removeClient);
routes.post('/get-search-client-result', storeAuth.isAuth, mainController.clientSearch);
/***********************walledt *****************************/
routes.post('/add-fund', storeAuth.isAuth, mainController.addFund);
routes.get('/check-order', storeAuth.isAuth, mainController.checkOrder);
/********************************************* */
routes.get('/signup', mainController.getSignUP)
routes.post('/signup', mainController.postSignUp);
routes.get('/login', mainController.getLogin);
routes.post('/login', mainController.postLogin);
routes.get('/logout', storeAuth.isAuth, mainController.logOut);
routes.get('/forget-password', mainController.getforgetPass);
routes.post('/forget-password', mainController.postForgetPassword);
routes.get('/reset-store-pass/:code', mainController.getResetPass);
routes.post('/reset-store-pass/:code', mainController.postResetPass);
routes.get('/cities', mainController.getCities);
module.exports = routes