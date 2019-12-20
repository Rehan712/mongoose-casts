const assert = require("assert");
const User = require("../src/user");

describe("Creating Records", () => {
  it("saves a user", done => {
    const rehan = new User({ name: "rehana" });

    rehan.save().then(() => {
      assert(!rehan.isNew);
      done();
    });
  });
});
