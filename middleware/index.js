module.exports = {
    checkLoggedUser: (req, res, next) => {
        req.session.currentUser ? next() : res.render('pages/auth/login', { errorMessage: 'Loggin pls :D' })
    },

}
