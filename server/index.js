const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();
const PORT = config.get("serverPort");

const start = async () => {
  try {
    await mongoose.connect(config.get("URL_DB"));

    app.listen(PORT, () => {
      console.log("server started on ", PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
