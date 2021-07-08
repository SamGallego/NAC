const router = require("express").Router();
const Event = require('./../models/Event.model')

router.get("/", (req, res, next) => {

  Event
    .find()
    .then(events => {
      res.render("index", { userInSession: req.session.currentUser, events });
      console.log(events)
    }
    )
    .catch(err => console.log(err))




});

router.get("/api/movie", (req, res, next) => {
  Event
    .find()
    .then(events => res.json(events))
    .catch(err => console.log(err))
});

module.exports = router;
