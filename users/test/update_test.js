const assert = require("assert");
const User = require("../src/user");

describe("Updating Users", () => {
  let user;

  beforeEach(done => {
    user = new User({ name: "joe" });
    user.save().then(() => done());
  });

  it("set and update user", done => {
    user.set("name", "Alex");
    user.save().then(updateUser => {
      assert(updateUser.name === "Alex");
      done();
    });
  });
});
