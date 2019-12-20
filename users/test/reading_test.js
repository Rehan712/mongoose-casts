const assert = require("assert");
const User = require("../src/user");

describe("finding the users out of database", () => {
  let user;
  beforeEach(done => {
    user = new User({ name: "joe" });
    user.save().then(() => done());
  });
  it("finding users with name of joe", done => {
    User.findOne({ name: user.name }).then(foundUser => {
      assert(foundUser._id.toString() === user._id.toString());
      done();
    });
  });
});
