const router = require("express").Router();
const Event = require('./../models/Event.model')
const User = require('./../models/User.model')
const { checkLoggedUser } = require('./../middleware')
/* GET home page */
router.get("/create", (req, res, next) => {
    res.render("pages/events/event-create", { userInSession: req.session.currentUser });
});

router.post('/create', checkLoggedUser, (req, res) => {
    const { name, capacity, image, startDate, format, lat, lng, title, description, imageUrl } = req.body

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
        .create({ name, capacity, image, startDate, format, location, movie, description, organizer: req.session.currentUser._id })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})

router.post('/assignUser/:event_id', checkLoggedUser, (req, res) => {
    const user = req.body.user_id
    Event
        .findByIdAndUpdate(req.params.event_id, { $push: { users: user } }, { new: true })
        .then((updated) => res.json(updated))
        .catch(err => console.log(err))
})


// List
router.get("/list", (req, res, next) => {
    Event
        .find()
        .then(events => {
            console.log(events)
            res.render('pages/events/event-list', { events, userInSession: req.session.currentUser })
        })
        .catch(err => console.log(err))
})
router.get("/list/:_id", (req, res, next) => {
    const event_id = req.params
    Event
        .findById(event_id)
        .then(event => {
            res.render('pages/events/event-details', { event, userInSession: req.session.currentUser, canJoin: !event.users.some(user => user == req.session.currentUser) })
        })
        .catch(err => console.log(err))
})

module.exports = router;