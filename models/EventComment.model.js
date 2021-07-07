const { Schema, model } = require("mongoose");
const eventCommentSchema = new Schema({
    comment: [{
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        event: { type: Schema.Types.ObjectId, ref: 'Event' },
        text: String,
        date: Date
    }],
},
    {
        timestamps: true
    }
);
const EventComment = model("EventComment", eventCommentSchema);
module.exports = EventComment;