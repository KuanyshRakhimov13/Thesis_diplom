const { Schema, model } = require("mongoose");

const FoodCard = new Schema({
  id: { type: "string", required: true },
  title: { type: "string", required: true },
  text: { type: "string", required: true },
});

module.exports = model("FoodCard", FoodCard);
