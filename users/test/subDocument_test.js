const assert = require("assert");
const User = require("../src/user");

describe("Subdocuments tests", () => {
  it("can create a sub documnet", done => {
    const joe = new User({
      name: "joe",
      posts: [{ title: "PostTitle" }]
    });
    joe.save().then(createdUser => {
      assert(createdUser.posts[0].title === "PostTitle");
      done();
    });
  });
  it("can remove a sub document", done => {
    const joe = new User({
      name: "joe",
      posts: [{ title: "New Post" }]
    });
    joe
      .save()
      .then(() => User.findOne({ name: "joe" }))
      .then(user => {
        const post = user.posts[0];
        post.remove();
        return user.save();
      })
      .then(() => User.findOne({ name: "joe" }))
      .then(user => {
        assert(user.posts.length === 0);
        done();
      });
  });
});
