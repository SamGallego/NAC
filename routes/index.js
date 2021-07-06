module.exports = app => {
  app.use('/', require('./base.routes'))
  app.use('/', require('./auth.routes'))
  app.use('/user', require('./users.routes'))
  app.use('/event', require('./events.routes.js'))
  app.use('/chat', require('./chats.routes.js'))
}