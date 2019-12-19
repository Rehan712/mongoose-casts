const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/user_test")
  .once("open", () => console.log("Good to go!"))
  .on("error", error => console.warn("Error", error));
