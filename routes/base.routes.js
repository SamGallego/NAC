const router = require("express").Router();
const tmdb = require('tmdbv3').init('dcc60c19b0fb66ddbb9f4e41845c2603');
const Event = require('./../models/Event.model')

/* GET home page */
router.get("/", (req, res, next) => {


  res.render("index", { userInSession: req.session.currentUser });
});


router.get("/api/movie", (req, res, next) => {


  Event
    .find()
    .then(events => res.json(events))
    .catch(err => console.log(err))


});

module.exports = router;
