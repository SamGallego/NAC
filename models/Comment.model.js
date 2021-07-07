const { Schema, model } = require("mongoose");
const commentSchema = new Schema({
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
const Comment = model("Comment", commentSchema);
module.exports = Comment;