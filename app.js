require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbUrl = process.env.DB_URL;
const port = process.env.PORT;
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
/******************************************************************* */
const store = new MongoDBStore({
    uri: dbUrl,
    collection: 'mySessions'
});
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
}))
/********************************************************************************* */
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/********************************************************************************* */
const mainRoutes = require('./routes/main');
const saeeRoutes = require('./routes/saee');
const aramexRoutes = require('./routes/aramex');
const adminRoutes = require('./routes/admin');
app.use('/', mainRoutes);
app.use('/aramex', aramexRoutes);
app.use('/saee', saeeRoutes);
app.use('/admin', adminRoutes);
/********************************************************************************* */
mongoose.connect(dbUrl)
    .then(resu => {
        console.log('db connection done !');
        app.listen(port, () => {
            console.log('app conneted on port ' + port)
        })
    })
    .catch(err => {
        console.log(err)
    })