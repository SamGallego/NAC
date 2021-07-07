const router = require("express").Router();
const User = require('./../models/User.model')

const { checkLoggedUser } = require('./../middleware')
// Profile
router.get("/profile", (req, res, next) => {
    const user_id = req.session.currentUser._id
    User
        .findById(user_id)
        .then(user => {


            res.render('pages/users/profile', { user, userInSession: req.session.currentUser })
        })
        .catch(err => console.log(err))
})
// List
router.get("/user-list", checkLoggedUser, (req, res, next) => {
    User
        .find()
        .then(users => res.render('pages/users/profile-list', { users, userInSession: req.session.currentUser }))
        .catch(err => console.log(err))
})

module.exports = router;