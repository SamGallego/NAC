const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
    name: String,
    capacity: Number,
    movie: {
        name: String,
        id: Number
    },
    date: {
        start: Date,
        end: Date
    },
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    organizer: { type: Schema.Types.ObjectId, ref: 'User' },
    format: { type: String, enum: ['House', 'Cinema'] },
    location: {
        type: { type: String },
        coordinates: [Number],
        country: String,
        city: String,
        address: String
    },
    image: String,
    description: String,
    status: { type: String, enum: ['ACTIVE', 'INACTIVE'] }

});

eventSchema.index({ location: '2dsphere' })

const Event = model("Event", eventSchema);

module.exports = Event;