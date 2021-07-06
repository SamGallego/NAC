const router = require("express").Router();

const Event = require('./../models/Event.model')
const User = require('./../models/User.model')

const { checkLoggedUser } = require('./../middleware')

/* GET home page */
router.get("/create", (req, res, next) => {
    res.render("pages/events/event-create", { userInSession: req.session.currentUser });
});


router.post('/create', checkLoggedUser, (req, res) => {

    const { name, capacity, image, startDate, format, lat, lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng],
        country: '',
        city: '',
        address: ''
    }



    Event
        .create({ name, capacity, image, startDate, format, location })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))

})

// List

router.get("/list", (req, res, next) => {
    //     res.render("pages/events/event-list");
    // });
    // router.get('/', (req, res) => {

    // let errorMessage = req.query.errorMessage

    Event
        .find()
        .then(events => res.render('pages/events/event-list', { events, userInSession: req.session.currentUser }))
        .catch(err => console.log(err))
})

router.get("/list/:_id", (req, res, next) => {


    const event_id = req.params
    console.log('---------------------')
    console.log('kkkkkk')
    console.log('---------------------')


    Event
        .findById(event_id)
        .then(event => {
            console.log('skreeeeeeeeee', event_id)
            console.log('skraaaaaaa', event)
            res.render('pages/events/event-details', { event, userInSession: req.session.currentUser })
        })
        .catch(err => console.log(err))
})




module.exports = router;