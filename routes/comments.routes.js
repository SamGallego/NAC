const router = require("express").Router();
const Event = require('./../models/EventComment.model')

router.get("/", (req, res, next) => {
    res.render("index");
});

module.exports = router;