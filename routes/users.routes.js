const router = require("express").Router();
const User = require('./../models/User.model')



/* GET home page */
router.get("/profile", (req, res, next) => {


    const user_id = req.session.currentUser._id
    console.log('aaaaaaaaaaaaaaaaaaaaaa', req.session.currentUser._id)

    // var id = mongoose.Types.ObjectId('4edd40c86762e0fb12000003');

    User
        .findById(user_id)
        .then(user => {
            console.log('skreeeeeeeeee', user_id)
            console.log('skraaaaaaa', user)
            res.render('pages/users/profile', { user, userInSession: req.session.currentUser })
        })
        .catch(err => console.log(err))
})
module.exports = router;