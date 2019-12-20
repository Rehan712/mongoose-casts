const assert = require("assert");
const User = require("../src/user");

describe("Creating Records", () => {
  it("saves a user", () => {
    const rehan = new User({ name: "rehana" });
  });
});
