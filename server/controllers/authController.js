const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { secret } = require("../config/default.json");

// JWT Token creation
const generateAccessToken = (id) => {
  const payload = {
    id,
  };

  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

// registartion logic
class authController {
  async registration(req, res) {
    try {
      const { username, password, card_id = null } = req.body;
      const candidate = await User.findOne({ username });

      if (candidate) {
        return res.status(400).json({ message: `This user already exists` });
      }

      const hashPassword = bcrypt.hashSync(password, 7);
      const user = new User({ username, password: hashPassword, card_id });
      await user.save();
      return res
        .status(200)
        .json({ message: "User has been successfully registered" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "registration error" });
    }
  }

  //login logic
  async login(req, res) {
    try {
      const { username, password } = req.body;

      //find the user
      const user = await User.findOne({ username });
      if (!user) {
        return res
          .status(400)
          .json({ message: `поьзователь ${username} не найден` });
      }

      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Password is incorrect" });
      }

      //return the response 
      const token = generateAccessToken(user._id);
      res.status(200).json({ token, card_id: user.card_id });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Login error" });
    }
  }

  async addUserId(req, res) {
    try {
      const { username } = req.body;
      const { id } = req.params;

      // find user by username
      const user = await User.findOne({ username });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // renew the card_id page
      user.card_id = id;

      // save the updated user
      await user.save();

      res.status(200).json({ message: "User's card_id updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Update error" });
    }
  }
}

module.exports = new authController();
