const { Schema, model } = require("mongoose");

// here is shown schema how the data will be send to back-end
const User = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  card_id: {
    type: String,
    default: "", 
  },
});

module.exports = model("User", User);
