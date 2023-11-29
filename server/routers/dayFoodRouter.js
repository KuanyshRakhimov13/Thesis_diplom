const Router = require("express");
const xrouter = new Router();
const controller = require("../controllers/dayFoodController");

router.post("/food", controller.createDayFood);
router.get("/food/:card_id", controller.getDayFoodByCardId);

module.exports = router;
