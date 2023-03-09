const User = require('../models/user');

exports.isAdmin = (req, res, next) => {
    if (req.session.user) {
        if (req.session.user.rolle == 'admin') {
            next();
        } else {
            res.redirect('/admin/login');
        }
    } else {
        res.redirect('/admin/login');
    }
}