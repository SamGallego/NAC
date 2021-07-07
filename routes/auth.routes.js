const router = require("express").Router();
const bcrypt = require('bcrypt')
const User = require('./../models/User.model')
// Signup
router.get('/register', (req, res) => res.render('pages/auth/signup'))
router.post('/register', (req, res) => {

    const { name, pwd, image, description } = req.body
    const bcryptSalt = 10
    const salt = bcrypt.genSaltSync(bcryptSalt)
    const hashPass = bcrypt.hashSync(pwd, salt)
    User
        .create({ name, password: hashPass, image, description })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})
// Login
router.get('/login', (req, res) => res.render('pages/auth/login'))
router.post('/login', (req, res) => {
    const { name, pwd } = req.body
    User
        .findOne({ name })
        .then(user => {
            if (!user) {
                res.render('pages/auth/login', { errorMessage: 'Usuario no reconocido' })
                return
            }
            if (bcrypt.compareSync(pwd, user.password) === false) {
                res.render('pages/auth/login', { errorMessage: 'Contraseña incorrecta' })
                return
            }
            req.session.currentUser = user
            res.redirect('/')
        })
        .catch(err => console.log(err))
})
router.get('/byebye', (req, res) => req.session.destroy(() => res.redirect('/')))
module.exports = router