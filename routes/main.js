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
/********************************************* */
routes.get('/signup', mainController.getSignUP)
routes.post('/signup', mainController.postSignUp);
routes.get('/login', mainController.getLogin);
routes.post('/login', mainController.postLogin);
routes.get('/logout', storeAuth.isAuth, mainController.logOut);
module.exports = routes