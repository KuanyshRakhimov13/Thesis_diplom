const DayFood = require("../models/DayFoodCard");

class cardsController {
  async createDayFood(req, res) {
    try {
      const { card_id, breakfast, lunch, snack, dinner, day_of_week } =
        req.body;

      const food = new DayFood({
        card_id,
        breakfast,
        lunch,
        snack,
        dinner,
        day_of_week,
      });
      await food.save();
      return res
        .status(200)
        .json({ message: "Day food has been successfully registered" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Day food post error" });
    }
  }

  async getDayFoodByCardId(req, res) {
    try {
      const { card_id } = req.params; // Assuming card_id is a URL parameter

      const dayFoods = await DayFood.find({ card_id });

      if (!dayFoods || dayFoods.length === 0) {
        return res.status(404).json({ message: "Day food not found" });
      }

      return res.status(200).json(dayFoods);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = new cardsController();
