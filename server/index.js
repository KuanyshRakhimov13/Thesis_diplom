const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const authRouter = require("./routers/authRouter");
const corsMiddleware = require("./middleware/cors.middleware");
const foodRouter = require("./routers/foodRouter");
const dayFoodRouter = require("./routers/dayFoodRouter");

const app = express();
const PORT = config.get("serverPort");

app.use(corsMiddleware);
app.use(express.json());
// routers used
app.use("/auth", authRouter);
app.use("/card", foodRouter);
app.use("/food", dayFoodRouter);

// recall the back-end
const start = async () => {
  try {
    await mongoose.connect(config.get("URL_DB"));

    app.listen(PORT, () => {
      console.log("server started on", PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
