const router = require("express").Router();
const Event = require('./../models/Event.model')
const User = require('./../models/User.model')
const { checkLoggedUser } = require('./../middleware')
/* GET home page */
router.get("/create", (req, res, next) => {
    res.render("pages/events/event-create", { userInSession: req.session.currentUser });
});
router.post('/create', checkLoggedUser, (req, res) => {
    const { name, capacity, image, startDate, format, lat, lng, title, imageUrl } = req.body
    const location = {
        type: 'Point',
        coordinates: [lat, lng],
        country: '',
        city: '',
        address: ''
    }
    const movie = {
        name: title,
        image: imageUrl
    }
    Event
        .create({ name, capacity, image, startDate, format, location, movie })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})
// List
router.get("/list", (req, res, next) => {
    Event
        .find()
        .then(events => res.render('pages/events/event-list', { events, userInSession: req.session.currentUser }))
        .catch(err => console.log(err))
})
router.get("/list/:_id", (req, res, next) => {
    const event_id = req.params
    Event
        .findById(event_id)
        .then(event => {
            res.render('pages/events/event-details', { event, userInSession: req.session.currentUser })
        })
        .catch(err => console.log(err))
})
module.exports = router;