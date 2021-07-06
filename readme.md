Listado de endpoints

  app.use('/', require('./base.routes.js'))
  app.use('/auth', require('./auth.routes'))
  app.use('/user', require('./users.routes.js'))
  app.use('/event', require('./events.routes.js'))
  app.use('/chat', require('./chats.routes.js'))

Index
/

Auth
/auth/login
/auth/register

User
/:user_id/
/edit/:user_id

Event
/event/create
/event/:event_id
/event/edit/:event_id

Chat
/chats/:user_id


Modelos

User

  name: String,
  password: String,
  profileImg: String,
  description: String,
  rate: Number,
  coment: [String],
  location: {
          type: { type: String },
          coordinates: [Number]
      },
  eventoAsistido: Number
  eventoOrganizado: Number







Event

  name: String
  peopleCapacity: Number
  startDate: Date,
  endDate: Date,
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  organizer:{ type: Schema.Types.ObjectId, ref: 'User' }
  type: { type: String, enum: ['House', 'Cinema']}
  <!-- chat:{message: String, sender:_id, } -->
  location: {
          type: { type: String },
          coordinates: [Number]
      },
  status: Boolean,
  image: String,
  genre: String(genre_movie)
  description: String
  price: Number(Opcional)
  status: { type: String, enum: ['ON', 'OFF'], default: 'ON' }

Chat

sender: [{ type: Schema.Types.ObjectId, ref: 'User' }]
reciver: [{ type: Schema.Types.ObjectId, ref: 'User' }]
message: String