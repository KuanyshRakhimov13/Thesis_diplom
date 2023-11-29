const Router = require("express");
const router = new Router();
const controller = require("../controllers/cardsController");

router.post("/cards", controller.createCards);

module.exports = router;
