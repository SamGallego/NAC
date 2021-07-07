const router = require("express").Router();
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
