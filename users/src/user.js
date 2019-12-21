const mongoose = require("mongoose");
const PostSchema = require("./postSchema");
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
  posts: [PostSchema]
});
userSchema.virtual("postCount").get(function() {
  return this.posts.length;
});
const User = mongoose.model("user", userSchema);

module.exports = User;
