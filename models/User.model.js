const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  password: String,
  image: String,
  description: String,
  rate: Number,
  location: {
    type: { type: String },
    coordinates: [Number]
  },

},
  {
    timestamps: true
  }

);

const User = model("User", userSchema);

module.exports = User;
