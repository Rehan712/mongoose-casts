const assert = require("assert");
const User = require("../src/user");

describe("Deleting User", () => {
  let user;
  beforeEach(done => {
    user = new User({ name: "joe" });
    user.save(() => done());
  });

  it("class method remove", done => {
    user.remove().then(() => done());
  });
});
