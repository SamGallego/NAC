const router = require("express").Router();
const tmdb = require('tmdbv3').init('dcc60c19b0fb66ddbb9f4e41845c2603');
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", { userInSession: req.session.currentUser });
});
router.get("/movie", (req, res, next) => {
  tmdb.movie.info(6, (err, res) => {
    console.log(res);
  });
});
module.exports = router;
