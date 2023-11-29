const Card = require("../models/FoodCard");

class cardsController {
  async createCards(req, res) {
    try {
      const { title, text, id } = req.body;

      const card = new Card({ title, text, id });
      await card.save();
      return res
        .status(200)
        .json({ message: "Card has been successfully registered" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Card post error" });
    }
  }

  async getFoods(req, res) {
    try {
      res.json("server work", req.body);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new cardsController();
