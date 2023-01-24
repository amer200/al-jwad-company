exports.isAuth = (req, res, next) => {
    if (req.session.store) {
        next()
    } else {
        res.redirect('/login')
    }
}