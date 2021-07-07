const router = require("express").Router();
const User = require('./../models/User.model')
/* GET home page */
router.get("/profile", (req, res, next) => {
    const user_id = req.session.currentUser._id
    User
        .findById(user_id)
        .then(user => {
            res.render('pages/users/profile', { user, userInSession: req.session.currentUser })
        })
        .catch(err => console.log(err))
})
module.exports = router;