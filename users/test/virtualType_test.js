const assert = require("assert");
const User = require("../src/user");

describe("Virtual types", () => {
  it("postCount should return no of posts", done => {
    const joe = new User({ name: "joe", posts: [{ title: "New Post" }] });
    joe.save().then(user => {
      assert(user.postCount === 1);
      done();
    });
  });
});
