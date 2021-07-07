const { Schema, model } = require("mongoose");
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
