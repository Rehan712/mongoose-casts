const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    validate: {
      validator: name => {
        return name.length > 2;
      },
      message: "Name must be longer than 2 characters"
    }
  },
  postCount: { type: Number }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
