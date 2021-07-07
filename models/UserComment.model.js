const { Schema, model } = require("mongoose");
const userCommentSchema = new Schema({
    comment: [{
        sender: { type: Schema.Types.ObjectId, ref: 'User' },
        receiver: { type: Schema.Types.ObjectId, ref: 'User' },
        text: String,
        date: Date
    }],
},
    {
        timestamps: true
    }
);
const UserComment = model("UserComment", userCommentSchema);
module.exports = UserComment;