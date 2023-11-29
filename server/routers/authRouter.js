const Router = require("express");
const router = new Router();
const controller = require("../controllers/authController");

// auth API
router.post("/registration", controller.registration);
router.post("/login", controller.login);
router.post("/login/:id", controller.addUserId);

module.exports = router;
