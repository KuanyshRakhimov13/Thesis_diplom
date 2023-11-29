const { Schema, model } = require("mongoose");

// Define the type for the 'types' array within breakfast and other meal categories
const typeSchema = new Schema({
  title: String,
  carbs: String,
  fat: String,
  protein: String,
});

const dayFoodCardSchema = new Schema({
  card_id: { type: String, require: true },
  breakfast: {
    title: String,
    types: [typeSchema],
  },
  lunch: {
    title: String,
    types: [typeSchema],
  },
  snack: {
    title: String,
    types: [typeSchema],
  },
  dinner: {
    title: String,
    types: [typeSchema],
  },
  day_of_week: { type: String, require: true },
});

module.exports = model("DayFoodCard", dayFoodCardSchema);
